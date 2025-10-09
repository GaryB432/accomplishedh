import * as AdmZip from "adm-zip";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path/posix";
import { getParts, schemaValidate } from "./manifest/index.mjs";

const cwd = "/home/gary/repos/human-accomplishment/apps/extension";

let success = false;

const [arg2] = process.argv.slice(2);
const distPath = normalize(join(cwd, arg2));

const context = {
  isVerbose: true,
  projectName: "@human-accomplishment",
};

const options = {
  outputFileName: join(
    cwd,
    `zip/human-accomplishment.extension.{manifestVersion}.zip`,
  ),

  tagGit: false,
};

const buildTarget = {
  options: {
    outputPath: distPath,
  },
};

const sv = schemaValidate(
  readFileSync(join(distPath, "manifest.json"), "utf-8"),
);
if (!sv.success) {
  throw new Error("Manifest is not valid");
}
if (sv.manifest.manifest_version === 3) {
  const zipName = options.outputFileName.replace(
    "{manifestVersion}",
    sv.manifest.version,
  );

  if (existsSync(zipName)) {
    throw new Error(`${zipName} already exists.`);
  }

  for (const filePart of getParts(sv.manifest).keys()) {
    const fullName = join(buildTarget.options.outputPath, filePart);
    if (context.isVerbose) {
      console.log("checking", fullName);
    }
    if (!existsSync(fullName)) {
      throw new Error(`${filePart} does not exist.`);
    }
  }

  const bodyLines = [];
  const zip = new AdmZip.default();

  zip.addLocalFolder(buildTarget.options.outputPath);
  zip.writeZip(zipName, (e) => {
    if (e) {
      console.log(e.message);
      success = false;
    }
  });

  console.warn(`git tag -a v${sv.manifest.version} -m "${dirname(zipName)}"`);
  console.log(bodyLines);
  success = true;
}
console.log(success);

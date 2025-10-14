import * as AdmZip from "adm-zip";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { getParts, schemaValidate } from "./manifest/index.mjs";

const extensionRoot = normalize(join(import.meta.dirname, "../"));

console.log(extensionRoot, import.meta.dirname, "asdf");

let success = false;

const [arg2] = process.argv.slice(2);
const distPath = normalize(join(extensionRoot, arg2));

const context = {
  isVerbose: true,
  projectName: "@human-accomplishment",
};

const options = {
  outputFileName: join(
    extensionRoot,
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

  const zip = new AdmZip.default();

  zip.addLocalFolder(buildTarget.options.outputPath);
  zip.writeZip(zipName, (e) => {
    if (e) {
      console.log(e.message);
      success = false;
    }
  });

  console.warn(`git tag -a v${sv.manifest.version} -m "${dirname(zipName)}"`);
  success = true;
}
console.log(success);

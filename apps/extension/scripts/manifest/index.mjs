import Ajv from "ajv";
import * as schemaDocument from "./chrome-manifest.json" with { type: "json" };

export function schemaValidate(json) {
  const manifest = JSON.parse(json);

  const ajv = new Ajv({
    // strict: false,
    // allErrors: true,
    // verbose: false,
    // $data: true,
    formats: {
      "content-security-policy": { type: "string", validate: () => false },
      "mime-type": { type: "string", validate: () => false },
      "glob-pattern": { type: "string", validate: () => false },
      "match-pattern": { type: "string", validate: () => true },
      permission: { type: "string", validate: () => true },
    },
  });

  const messages = [];
  const validate = ajv.compile(schemaDocument);
  const success = validate(manifest);
  if (!success && validate.errors) {
    // console.log(JSON.stringify(validate.errors, undefined, 2));
    for (const ef of validate.errors) {
      messages.push(`${ef.instancePath} ${ef.message}`);
    }
  }

  return { messages, manifest, success };
}

export function getParts(manifest) {
  if (manifest.manifest_version !== 3) {
    throw new Error("Only manifest_version 3 is supported");
  }
  /** @type {Map<string, string>} */
  const content = new Map();
  if (manifest.options_page) {
    content.set(manifest.options_page, "page");
  }
  if (manifest.action) {
    const { action } = manifest;
    if (action.default_icon) {
      Object.values(action.default_icon).forEach((path) =>
        content.set(path, "icon"),
      );
    }
  }
  if (manifest.icons) {
    Object.values(manifest.icons).forEach((path) => content.set(path, "icon"));
  }
  if (manifest.content_scripts) {
    manifest.content_scripts.forEach((cs) =>
      cs.js?.forEach((js) => content.set(js, "script")),
    );
  }
  if (manifest.background?.service_worker) {
    content.set(manifest.background.service_worker, "script");
  }
  return content;
}

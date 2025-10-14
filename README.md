# accomplishedh

[![CI](https://github.com/GaryB432/accomplishedh/actions/workflows/ci.yml/badge.svg)](https://github.com/GaryB432/accomplishedh/actions/workflows/ci.yml)
[![Dependabot Updates](https://github.com/GaryB432/accomplishedh/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/GaryB432/accomplishedh/actions/workflows/dependabot/dependabot-updates)

Source for my human-accomplishment project

## Apps

- [**cli**](/apps/cli/README.md) Command line program with back-office commands for operations
- [**extension**](/apps/extension/README.md) The webkit browser extension, currently avaiable in the Chrome and Edge stores
- [**web**](/apps/web/README.md) The web site

## Libraries

- [**shared**](/libraries/shared/README.md) Functions shared by the applications
- [**social-media**](/libraries/social-media/README.md) Functions for posting
- [**web-ui**](/libraries/web-ui/README.md) Functions shared by the extension and web applications
- [**wikibase**](/libraries/wikibase/README.md) Functions to search and read wikibase

## Open Source

The project makes use of many open source packages

<!-- prettier-ignore -->
| Package | Functions |
| --- | --- |
| [`@google.visualization`](https:://www.npmjs.com/package/@google.visualization) | Further information about the features of @google.visualization |
| [`@sveltejs/adapter-vercel`](https:://www.npmjs.com/package/@sveltejs/adapter-vercel) | Further information about the features of @sveltejs/adapter-vercel |
| [`@inquirer/prompts`](https:://www.npmjs.com/package/@inquirer/prompts) | Further information about the features of @inquirer/prompts |
| [`@sveltejs/kit`](https:://www.npmjs.com/package/@sveltejs/kit) | Further information about the features of @sveltejs/kit |
| [`adm-zip`](https:://www.npmjs.com/package/adm-zip) | Further information about the features of adm-zip |
| [`admzip`](https:://www.npmjs.com/package/admzip) | Further information about the features of admzip |
| [`ajv`](https:://www.npmjs.com/package/ajv) | Further information about the features of ajv |
| [`cac`](https:://www.npmjs.com/package/cac) | Further information about the features of cac |
| [`cli-progress`](https:://www.npmjs.com/package/cli-progress) | Further information about the features of cli-progress |
| [`clipboardy`](https:://www.npmjs.com/package/clipboardy) | Further information about the features of clipboardy |
| [`cryto-js`](https:://www.npmjs.com/package/cryto-js) | Further information about the features of cryto-js |
| [`eslint`](https:://www.npmjs.com/package/eslint) | Further information about the features of eslint |
| [`eslint-plugin-gb`](https:://www.npmjs.com/package/eslint-plugin-gb) | Further information about the features of eslint-plugin-gb |
| [`picocolors`](https:://www.npmjs.com/package/picocolors) | Further information about the features of picocolors |
| [`sass`](https:://www.npmjs.com/package/sass) | Further information about the features of sass |
| [`typescript`](https:://www.npmjs.com/package/typescript) | Further information about the features of typescript |
| [`vite`](https:://www.npmjs.com/package/vite) | Further information about the features of vite |
| [`vitest`](https:://www.npmjs.com/package/vitest) | Further information about the features of vitest |
| [`webpack`](https:://www.npmjs.com/package/webpack) | Further information about the features of webpack |
| [`xml`](https:://www.npmjs.com/package/xml) | Further information about the features of xml |

## Gratuitous Graph

```mermaid
flowchart TD
D@{ shape: bow-rect, label: "JSON Data "}
Axios@{ shape: lean-r, label: "Axios" }
web --> shared
web --> D
web --> web-ui
cli --> D
cli --> social-media
cli --> shared
cli --> wikibase
wikibase --> Axios
extension --> web-ui
extension --> shared
social-media --> shared
wikibase --> shared
web-ui --> shared

```

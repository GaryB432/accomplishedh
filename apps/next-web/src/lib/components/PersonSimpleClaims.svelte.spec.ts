import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import SimpleClaims from "./PersonSimpleClaims.svelte";
import type { Claims } from "@accomplishedh/wikibase";

describe("PersonSimpleClaims.svelte", () => {
  const claims: Claims = {
    P373: [
      {
        mainsnak: {
          snaktype: "value",
          property: "P373",
          datavalue: {
            value: "Q000009",
            type: "string",
          },
          datatype: "string",
        },
        type: "statement",
        id: "Q000009$dd7f461b-4cae",
        rank: "normal",
      },
      {
        mainsnak: {
          snaktype: "value",
          property: "P1801",
          datavalue: {
            value: "Q000009.jpg",
            type: "string",
          },
          datatype: "commonsMedia",
        },
        type: "statement",
        id: "Q000009$f35d8f8f",
        rank: "normal",
      },
      {
        mainsnak: {
          snaktype: "value",
          property: "P1801",
          datavalue: {
            value: "Q000009-1425.jpg",
            type: "string",
          },
          datatype: "commonsMedia",
        },
        type: "statement",
        id: "Q438769$f73b6493",
        rank: "normal",
      },
    ],
  };
  const item = {
    TESTER: {
      id: "Q000009",
      claims,
      type: "item",
    },
  };

  it("renders claims list", async () => {
    render(SimpleClaims, { claims });

    await expect
      .element(page.getByTestId("claims-list"))
      .toHaveTextContent(
        'P373 something about { "snaktype": "value", "property": "P373", "datavalue": { "value": "Q000009", "type": "string" }',
      );
  });
});

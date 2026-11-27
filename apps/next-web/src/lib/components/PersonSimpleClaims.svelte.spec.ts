import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import SimpleClaims from "./PersonSimpleClaims.svelte";
import type { Claims } from "@accomplishedh/wikibase";

describe("PersonSimpleClaims.svelte", () => {
  const claims: Claims = {
    P375: [
      {
        mainsnak: {
          snaktype: "value",
          property: "P735",
          datavalue: {
            value: {
              "entity-type": "item",
              "numeric-id": 15731830,
              id: "Q15731830",
            },
            type: "wikibase-entityid",
          },
          datatype: "wikibase-item",
        },
        type: "statement",
        qualifiers: {
          P1545: [
            {
              snaktype: "value",
              property: "P1545",
              hash: "2a1ced1dca90648ea7e306acbadd74fc81a10722",
              datavalue: { value: "1", type: "string" },
              datatype: "string",
            },
          ],
        },
        "qualifiers-order": ["P1545"],
        id: "Q154014$7a1b6913-4149-07f1-1823-7d55ef7f07b9",
        rank: "normal",
        references: [
          {
            hash: "4d200371a7e87e8e8bc6ac26829c6afa4eee55e0",
            snaks: {
              P248: [
                {
                  snaktype: "value",
                  property: "P248",
                  hash: "0077878fdbbc3386263c1f9cb475fec6d405abb7",
                  datavalue: {
                    value: {
                      "entity-type": "item",
                      "numeric-id": 15712417,
                      id: "Q15712417",
                    },
                    type: "wikibase-entityid",
                  },
                  datatype: "wikibase-item",
                },
              ],
            },
            "snaks-order": ["P248"],
          },
        ],
      },
      {
        mainsnak: {
          snaktype: "value",
          property: "P735",
          datavalue: {
            value: {
              "entity-type": "item",
              "numeric-id": 1985538,
              id: "Q1985538",
            },
            type: "wikibase-entityid",
          },
          datatype: "wikibase-item",
        },
        type: "statement",
        qualifiers: {
          P1545: [
            {
              snaktype: "value",
              property: "P1545",
              hash: "7241753c62a310cf84895620ea82250dcea65835",
              datavalue: { value: "2", type: "string" },
              datatype: "string",
            },
          ],
          P3831: [
            {
              snaktype: "value",
              property: "P3831",
              hash: "dbd40245cfc74fad93188d2f44e7b227d46047a2",
              datavalue: {
                value: {
                  "entity-type": "item",
                  "numeric-id": 3409033,
                  id: "Q3409033",
                },
                type: "wikibase-entityid",
              },
              datatype: "wikibase-item",
            },
          ],
        },
        "qualifiers-order": ["P1545", "P3831"],
        id: "Q154014$61F4B279-63B9-4CB4-83CE-DC1EB57E0125",
        rank: "normal",
        references: [
          {
            hash: "4d200371a7e87e8e8bc6ac26829c6afa4eee55e0",
            snaks: {
              P248: [
                {
                  snaktype: "value",
                  property: "P248",
                  hash: "0077878fdbbc3386263c1f9cb475fec6d405abb7",
                  datavalue: {
                    value: {
                      "entity-type": "item",
                      "numeric-id": 15712417,
                      id: "Q15712417",
                    },
                    type: "wikibase-entityid",
                  },
                  datatype: "wikibase-item",
                },
              ],
            },
            "snaks-order": ["P248"],
          },
        ],
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
        'P735 something about { "snaktype": "value", "property": "P735", "datavalue": { "value": { "entity-type": "item", "numeric-id": 15731830, "id": "Q15731830" }, "type": "wikibase-entityid" }, "datatype": "wikibase-item" } given name, something about { "snaktype": "value", "property": "P735", "datavalue": { "value": { "entity-type": "item", "numeric-id": 1985538, "id": "Q1985538" }, "type": "wikibase-entityid" }, "datatype": "wikibase-item" } given name',
      );
  });
});

import {
  WIKIDATA_PERSON_PROPERTIES,
  type Claims,
} from "@accomplishedh/wikibase";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "vitest/browser";
import SimpleClaims from "./PersonSimpleClaims.svelte";

const RANING_PROPERTIES = {
  SERIES_ORDINAL: "P1545",
  OBJECT_OF_STATEMENT_HAS_ROLE: "P3831",
  STATED_IN: "P248",
};

describe("PersonSimpleClaims.svelte", () => {
  const claims: Claims = {
    PUNUSED: [
      {
        mainsnak: {
          snaktype: "value",
          property: WIKIDATA_PERSON_PROPERTIES.GIVEN_NAME,
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
          [RANING_PROPERTIES.SERIES_ORDINAL]: [
            {
              snaktype: "value",
              property: RANING_PROPERTIES.SERIES_ORDINAL,
              datavalue: { value: "1", type: "string" },
              datatype: "string",
            },
          ],
        },
        "qualifiers-order": [RANING_PROPERTIES.SERIES_ORDINAL],
        id: "Q154014$7a1b6913-4149-07f1-1823-7d55ef7f07b9",
        rank: "normal",
        references: [
          {
            snaks: {
              [RANING_PROPERTIES.STATED_IN]: [
                {
                  snaktype: "value",
                  property: RANING_PROPERTIES.STATED_IN,
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
            "snaks-order": [RANING_PROPERTIES.STATED_IN],
          },
        ],
      },
      {
        mainsnak: {
          snaktype: "value",
          property: WIKIDATA_PERSON_PROPERTIES.GIVEN_NAME,
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
          [RANING_PROPERTIES.SERIES_ORDINAL]: [
            {
              snaktype: "value",
              property: RANING_PROPERTIES.SERIES_ORDINAL,
              datavalue: { value: "2", type: "string" },
              datatype: "string",
            },
          ],
          [RANING_PROPERTIES.OBJECT_OF_STATEMENT_HAS_ROLE]: [
            {
              snaktype: "value",
              property: RANING_PROPERTIES.OBJECT_OF_STATEMENT_HAS_ROLE,
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
        "qualifiers-order": [
          RANING_PROPERTIES.SERIES_ORDINAL,
          RANING_PROPERTIES.OBJECT_OF_STATEMENT_HAS_ROLE,
        ],
        id: "Q154014$61F4B279-63B9-4CB4-83CE-DC1EB57E0125",
        rank: "normal",
        references: [
          {
            snaks: {
              [RANING_PROPERTIES.STATED_IN]: [
                {
                  snaktype: "value",
                  property: RANING_PROPERTIES.STATED_IN,
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
            "snaks-order": [RANING_PROPERTIES.STATED_IN],
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

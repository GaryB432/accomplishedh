import {
  WIKIDATA_PERSON_PROPERTIES,
  type Claims,
} from "@accomplishedh/wikibase";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "vitest/browser";
import SimpleClaims from "./PersonSimpleClaims.svelte";

const RANING_PROPERTIES = {
  SERIES_ORDINAL: "=1545",
  OBJECT_OF_STATEMENT_HAS_ROLE: "=3831",
  STATED_IN: "=248",
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
  
  it("renders claims list", async () => {
    render(SimpleClaims, { claims: subjectClaims });

    await expect
      .element(page.getByTestId("claims-list"))
      .toHaveTextContent(
        'P735 something about { "snaktype": "value", "property": "P735", "datavalue": { "value": { "entity-type": "item", "numeric-id": 15731830, "id": "Q15731830" }, "type": "wikibase-entityid" }, "datatype": "wikibase-item" } given name, something about { "snaktype": "value", "property": "P735", "datavalue": { "value": { "entity-type": "item", "numeric-id": 1985538, "id": "Q1985538" }, "type": "wikibase-entityid" }, "datatype": "wikibase-item" } given name',
      );
  });
});

const subjectClaims: Claims = {
  P373: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P373",
        datavalue: { value: "Peter Benoit", type: "string" },
        datatype: "string",
      },
      type: "statement",
      id: "q733063$3CA21C77-F48E-4DCB-8D0B-88C88429669E",
      rank: "normal",
    },
  ],
  P214: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P214",
        datavalue: { value: "56825961", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "q733063$F981BAF0-4E8F-4DB9-B853-0EE460458DFC",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P213: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P213",
        datavalue: { value: "0000000106544277", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "q733063$EB16AD71-E99F-4FC5-92B8-E57340473DFA",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 423048,
                    id: "Q423048",
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
  P244: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P244",
        datavalue: { value: "n79049119", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "q733063$67530867-DF81-4CF5-9B47-AD8B94FD46B9",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P227: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P227",
        datavalue: { value: "118886568", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "q733063$D35C4ECC-059E-4702-9D59-CC2AEE64AC02",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P19: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P19",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 478797, id: "Q478797" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q733063$0F2AE8BD-AC79-4B36-88F0-EFC2BA5D543D",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2014-12-16T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P20: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P20",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 12892, id: "Q12892" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q733063$019061BB-8496-4CFF-BDEA-22046FB6F624",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2014-12-31T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P31: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P31",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 5, id: "Q5" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$EB6F1DE8-938C-4E83-B713-029D28C241D0",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                datavalue: { value: "14418403p", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
      ],
    },
  ],
  P569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P569",
        datavalue: {
          value: {
            time: "+1834-08-17T00:00:00Z",
            timezone: 0,
            before: 0,
            after: 0,
            precision: 11,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
          },
          type: "time",
        },
        datatype: "time",
      },
      type: "statement",
      id: "Q733063$4605048A-40A4-467D-AAD7-D91C1919911B",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2014-05-04T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                datavalue: { value: "14418403p", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 5375741,
                    id: "Q5375741",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1417: [
              {
                snaktype: "value",
                property: "P1417",
                datavalue: { value: "biography/Peter-Benoit", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P1417", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17299517,
                    id: "Q17299517",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P650: [
              {
                snaktype: "value",
                property: "P650",
                datavalue: { value: "441206", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P650", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 29861311,
                    id: "Q29861311",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3430: [
              {
                snaktype: "value",
                property: "P3430",
                datavalue: { value: "w6kp8dv6", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63056,
                    id: "Q63056",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P535: [
              {
                snaktype: "value",
                property: "P535",
                datavalue: { value: "7048", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 523660,
                    id: "Q523660",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P839: [
              {
                snaktype: "value",
                property: "P839",
                datavalue: { value: "Category:Benoit,_Peter", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P839", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 237227,
                    id: "Q237227",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P5019: [
              {
                snaktype: "value",
                property: "P5019",
                datavalue: { value: "benoit-peter", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoît", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63484499,
                    id: "Q63484499",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6925: [
              {
                snaktype: "value",
                property: "P6925",
                datavalue: { value: "86872", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P6925", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 3407324,
                    id: "Q3407324",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8349: [
              {
                snaktype: "value",
                property: "P8349",
                datavalue: { value: "11824", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: {
                  value: "Peter (Léonard-Léopold) Benoit",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
      ],
    },
  ],
  P570: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P570",
        datavalue: {
          value: {
            time: "+1901-03-08T00:00:00Z",
            timezone: 0,
            before: 0,
            after: 0,
            precision: 11,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
          },
          type: "time",
        },
        datatype: "time",
      },
      type: "statement",
      id: "Q733063$97B8EBB7-E049-494B-B234-97A29928B757",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2014-05-04T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                datavalue: { value: "14418403p", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 5375741,
                    id: "Q5375741",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1417: [
              {
                snaktype: "value",
                property: "P1417",
                datavalue: { value: "biography/Peter-Benoit", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P1417", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17299517,
                    id: "Q17299517",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P650: [
              {
                snaktype: "value",
                property: "P650",
                datavalue: { value: "441206", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P650", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 29861311,
                    id: "Q29861311",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3430: [
              {
                snaktype: "value",
                property: "P3430",
                datavalue: { value: "w6kp8dv6", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63056,
                    id: "Q63056",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P535: [
              {
                snaktype: "value",
                property: "P535",
                datavalue: { value: "7048", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 523660,
                    id: "Q523660",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P839: [
              {
                snaktype: "value",
                property: "P839",
                datavalue: { value: "Category:Benoit,_Peter", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P839", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 237227,
                    id: "Q237227",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P5019: [
              {
                snaktype: "value",
                property: "P5019",
                datavalue: { value: "benoit-peter", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoît", type: "string" },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63484499,
                    id: "Q63484499",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6925: [
              {
                snaktype: "value",
                property: "P6925",
                datavalue: { value: "86872", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: { value: "Peter Benoit", type: "string" },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P6925", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 3407324,
                    id: "Q3407324",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8349: [
              {
                snaktype: "value",
                property: "P8349",
                datavalue: { value: "11824", type: "string" },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                datavalue: {
                  value: "Peter (Léonard-Léopold) Benoit",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
      ],
    },
  ],
  P18: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P18",
        datavalue: { value: "Peter Benoit, PA00421.jpg", type: "string" },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q733063$EB5C2CEB-08F6-40D4-A44B-0C0561B6FCEF",
      rank: "normal",
    },
  ],
  P646: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P646",
        datavalue: { value: "/m/083yy3", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$23C73FD4-AF96-4499-85B0-75171A467A3E",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 15241312,
                    id: "Q15241312",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                datavalue: {
                  value: {
                    time: "+2013-10-28T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P577"],
        },
      ],
    },
  ],
  P268: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P268",
        datavalue: { value: "14418403p", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$AA1865AC-6FC8-4C74-9CB8-7023A49C1A82",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
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
  P865: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P865",
        datavalue: { value: "b0408", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$0450D827-9FE2-4987-AC10-71D5EE2747C4",
      rank: "normal",
    },
  ],
  P734: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P734",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 23722326,
            id: "Q23722326",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$A01B57C9-F220-4273-BE88-7EA8E4285741",
      rank: "normal",
    },
  ],
  P27: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 31, id: "Q31" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$CD56DF8E-0315-45D5-B72F-5B25674EB267",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 11920,
                    id: "Q11920",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P106: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 158852, id: "Q158852" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$9FF553B0-3092-4AA2-AFCF-AC55BEFFE87C",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P227: [
              {
                snaktype: "value",
                property: "P227",
                datavalue: { value: "118886568", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-04-20T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 36834, id: "Q36834" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$207D36CA-1ECF-4EC9-AF24-58D9A1F8F3F6",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63484499,
                    id: "Q63484499",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6925: [
              {
                snaktype: "value",
                property: "P6925",
                datavalue: { value: "86872", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2022-04-05T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P6925", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P227: [
              {
                snaktype: "value",
                property: "P227",
                datavalue: { value: "118886568", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-04-20T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 82955, id: "Q82955" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$659C005D-21A2-4535-8E52-8261187FCF0A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14915627,
            id: "Q14915627",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$222CB690-22F1-48CB-B556-260036D58908",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2675537,
            id: "Q2675537",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$7FB47E1D-AB71-4CF1-8841-8BB0E29B5FD3",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P227: [
              {
                snaktype: "value",
                property: "P227",
                datavalue: { value: "118886568", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-04-20T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
    },
  ],
  P735: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P735",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2793400,
            id: "Q2793400",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$1939DAE1-2746-4725-BFBA-CA4C59401597",
      rank: "normal",
    },
  ],
  P1006: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1006",
        datavalue: { value: "069924910", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$E40BD67E-6E74-45D4-8D9D-89FA67148977",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                datavalue: { value: "56825961", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2014-12-16T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
    },
  ],
  P723: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P723",
        datavalue: { value: "beno002", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$81868FEF-58E8-4585-8ABA-DF056960B5D7",
      rank: "normal",
    },
  ],
  P800: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1912251,
            id: "Q1912251",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$ACE1B238-B69E-43C1-9BF6-ADA46A70EB18",
      rank: "normal",
    },
  ],
  P434: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P434",
        datavalue: {
          value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$EDAD7A72-C445-454E-9A05-14F7BADBBAB4",
      rank: "normal",
    },
  ],
  P1343: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1766280,
            id: "Q1766280",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$63A647E0-F0DC-40E2-BD08-3D038C6133BD",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 20078554,
            id: "Q20078554",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 30108600,
                id: "Q30108600",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q733063$38E22A14-45DA-4B0B-B34A-A83DAA0F38D9",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 27680201,
            id: "Q27680201",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 27771994,
                id: "Q27771994",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q733063$ad0f32d4-4967-c774-1eb3-202bdec50c50",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 602358, id: "Q602358" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 24345122,
                id: "Q24345122",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q733063$F8916C5C-1441-4B90-8182-33C84AFBE9F9",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19180675,
            id: "Q19180675",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 24752239,
                id: "Q24752239",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q733063$C5D04605-1FEE-4193-9ECB-040FF1CD343A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 867541, id: "Q867541" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 84663002,
                id: "Q84663002",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q733063$819463AA-0615-48BE-9CF8-1180056CF269",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 125935456,
            id: "Q125935456",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P2699: [
          {
            snaktype: "value",
            property: "P2699",
            datavalue: {
              value: "http://az-libr.ru/Persons/000/Src/0001/2a8e4162.shtml",
              type: "string",
            },
            datatype: "url",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",
            datavalue: { value: "21", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P2699", "P304"],
      id: "Q733063$08DC3279-2002-44C3-8674-1B50EEFA1909",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 13028710,
            id: "Q13028710",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P478: [
          {
            snaktype: "value",
            property: "P478",
            datavalue: { value: "3", type: "string" },
            datatype: "string",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",
            datavalue: { value: "102", type: "string" },
            datatype: "string",
          },
        ],
        P1476: [
          {
            snaktype: "value",
            property: "P1476",
            datavalue: {
              value: { text: "БЕНУА", language: "be" },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
        P953: [
          {
            snaktype: "value",
            property: "P953",
            datavalue: {
              value: "https://verbum.by/belen/%D0%91%D0%95%D0%9D%D0%A3%D0%90-4",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P478", "P304", "P1476", "P953"],
      id: "Q733063$00DBF404-E4C4-4694-9081-B1A6A05FEE83",
      rank: "normal",
    },
  ],
  P136: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P136",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 1344, id: "Q1344" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$FC2CE6A3-2262-4A83-8A06-F21839EE1786",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P136",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 216860, id: "Q216860" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$02a3fcf8-4468-49b8-e4f1-c64577f79702",
      rank: "normal",
    },
  ],
  P2163: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2163",
        datavalue: { value: "34857", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$1800326F-9CF2-470A-9399-953FCEEB55D2",
      rank: "normal",
    },
  ],
  P650: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P650",
        datavalue: { value: "441206", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$C6D6611E-9EC4-4ED6-9386-0B7750A469DD",
      rank: "normal",
    },
  ],
  P3430: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3430",
        datavalue: { value: "w6kp8dv6", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$C45839D0-B492-43CB-915B-A4232D13E604",
      rank: "normal",
      references: [
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P3674: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3674",
        datavalue: { value: "BenoitP", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$4B06AA6E-B04D-4DBD-A4A5-C53F06EE2AEC",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P3762: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3762",
        datavalue: { value: "52460", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$85D3808F-9133-407E-8DFD-A2599C170BB8",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P3762",
        datavalue: { value: "302564", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$37A98290-653E-44CB-A34F-3A53694E8ACD",
      rank: "normal",
    },
  ],
  P1417: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1417",
        datavalue: { value: "biography/Peter-Benoit", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Peter Benoit", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$1A482FA9-0D1A-4342-AEC4-26A7B0C722A7",
      rank: "normal",
    },
  ],
  P485: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3813695,
            id: "Q3813695",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$7454F018-1438-4217-B993-0916A1BD7CFA",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                datavalue: {
                  value: "http://www.archiefbank.be/dlnk/AE_13097",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
    },
  ],
  P4293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4293",
        datavalue: { value: "pe/001476", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P3740: [
          {
            snaktype: "value",
            property: "P3740",
            datavalue: { value: { amount: "+9", unit: "1" }, type: "quantity" },
            datatype: "quantity",
          },
        ],
        P5592: [
          {
            snaktype: "value",
            property: "P5592",
            datavalue: { value: { amount: "+4", unit: "1" }, type: "quantity" },
            datatype: "quantity",
          },
        ],
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoît, Peter", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P3740", "P5592", "P1810"],
      id: "Q733063$DD1ADF39-84B7-45A4-850F-93810885C06F",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                datavalue: {
                  value: "http://purl.org/pressemappe20/beaconlist/pe",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2017-10-23T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P854", "P813"],
        },
      ],
    },
  ],
  P839: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P839",
        datavalue: { value: "Category:Benoît,_Peter", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$D72FBF92-88B2-46DF-87C4-90687FE5A6C8",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
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
        property: "P839",
        datavalue: { value: "Category:Benoit,_Peter", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$16305A94-0632-4FC9-8DF0-4D93133121C2",
      rank: "preferred",
    },
  ],
  P1953: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1953",
        datavalue: { value: "991387", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$A9B74439-32C2-4D31-A9BC-500FC259DABF",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
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
  P906: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P906",
        datavalue: { value: "274946", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$87E6EB89-089A-4C80-93FB-5DCDD615BE7B",
      rank: "normal",
    },
  ],
  P802: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P802",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 29155326,
            id: "Q29155326",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$c7c9cbef-46bf-3512-2bb8-08283ae2b468",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P802",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1681637,
            id: "Q1681637",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$84c13b4c-404c-76b8-3e1e-d210b53ba44b",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P802",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 110222828,
            id: "Q110222828",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$c088a7ca-48fb-f890-b93f-b6f7b2fd873d",
      rank: "normal",
    },
  ],
  P950: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P950",
        datavalue: { value: "XX4439013", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$65324C6C-2E6D-4697-BD03-5E8F82FAA091",
      rank: "normal",
    },
  ],
  P648: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P648",
        datavalue: { value: "OL7198872A", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$49681520-B89B-41BC-AEF2-8F4ADDE37905",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P648",
        datavalue: { value: "OL5383205A", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$238AEA66-27CB-47DA-81B9-7D3214B75FFE",
      rank: "normal",
    },
  ],
  P69: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 336968, id: "Q336968" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$A7DA7538-F71B-4D22-9241-068B5A675BA8",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P269: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P269",
        datavalue: { value: "079962572", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$67C99185-4D7F-4377-8AEC-D8235D0711B9",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-08-26T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P1412: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1412",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 7411, id: "Q7411" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$DF3E5D91-7499-4330-8A09-CC0D331B380F",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                datavalue: { value: "14418403p", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
      ],
    },
  ],
  P4629: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4629",
        datavalue: { value: "Benoît, Peter, 1834-1901", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$3F292DF9-5EA5-4753-9719-F32BDFCAA23F",
      rank: "normal",
    },
  ],
  P5731: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5731",
        datavalue: { value: "82468", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$AF2EC12B-E3AE-4484-869B-9966AD017FB2",
      rank: "normal",
    },
  ],
  P5587: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5587",
        datavalue: { value: "b8nrv1bv2vdv70c", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$33467030-C35A-4EF9-89ED-A27D05F0B3CB",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1798125,
                    id: "Q1798125",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                datavalue: {
                  value: {
                    time: "+2012-11-05T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2018-08-24T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P577", "P813"],
        },
      ],
    },
  ],
  P5882: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5882",
        datavalue: { value: "M00000235989", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$70AEDEE5-595C-4F63-BEA8-EA4AFEE86E24",
      rank: "normal",
    },
  ],
  P119: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P119",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2248900,
            id: "Q2248900",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$05e144a5-4deb-4d05-afb0-f17b93eb1116",
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P21: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P21",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 6581097,
            id: "Q6581097",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$36D3409C-05FE-41C4-86D0-A8BE4D74D159",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                datavalue: { value: "14418403p", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P227: [
              {
                snaktype: "value",
                property: "P227",
                datavalue: { value: "118886568", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2024-07-06T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
    },
  ],
  P691: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P691",
        datavalue: { value: "mzk2011668014", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$BE6E462C-F912-4A4B-80C2-D4C0B112E4B0",
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                snaktype: "value",
                property: "P214",
                datavalue: { value: "56825961", type: "string" },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2018-12-21T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P214", "P248", "P813"],
        },
      ],
    },
  ],
  P1315: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1315",
        datavalue: { value: "1533024", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$8E079AB7-0F5A-43EB-9522-20F54667205B",
      rank: "normal",
    },
  ],
  P6925: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6925",
        datavalue: { value: "86872", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$2F08006A-3BEE-428A-9D1F-9BD84D18E381",
      rank: "normal",
    },
  ],
  P5019: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5019",
        datavalue: { value: "benoit-peter", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$1F105DD8-EEC2-4345-AAA8-6DEE016305BA",
      rank: "normal",
    },
  ],
  P7704: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7704",
        datavalue: { value: "agent/base/77618", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$D0C8E1AF-76B0-4161-B3D8-8C87C6955F93",
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2019-12-12T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P813"],
        },
      ],
    },
  ],
  P535: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P535",
        datavalue: { value: "7048", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$92C3FCE9-43B4-458B-8A01-CFC7A56662EB",
      rank: "normal",
    },
  ],
  P7902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7902",
        datavalue: { value: "118886568", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$207214B2-ADFB-4BC4-8444-7F7F65046C37",
      rank: "normal",
    },
  ],
  P8235: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8235",
        datavalue: { value: "3378", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$CFF7F2FF-9619-44D0-88DB-C8FE6FEC1A15",
      rank: "normal",
    },
  ],
  P5504: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5504",
        datavalue: { value: "people/30016412", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoit, Peter (1834-1901)", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$6FF7BF56-49CD-4C35-9C8F-BFB563770558",
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-06-14T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P813"],
        },
      ],
    },
  ],
  P8034: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8034",
        datavalue: { value: "495/30617", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoit, Peter, 1834-1901", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$B9BFAEB2-59B5-46E6-AF65-440D2BDF5932",
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-06-08T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P813"],
        },
      ],
    },
  ],
  P1207: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1207",
        datavalue: { value: "n2017005015", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$DB7B4E4C-0AD5-4773-946A-F714127D988A",
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                snaktype: "value",
                property: "P214",
                datavalue: { value: "56825961", type: "string" },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2020-09-02T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P214", "P248", "P813"],
        },
      ],
    },
  ],
  P7982: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7982",
        datavalue: { value: "6952", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$EA720379-2CC7-4FB2-92D5-C21DC9A58810",
      rank: "normal",
    },
  ],
  P8349: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8349",
        datavalue: { value: "11824", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$75C6468D-510F-4524-9EF5-3EA0ABC7D4D9",
      rank: "normal",
    },
  ],
  P8870: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8870",
        datavalue: { value: "C6693", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$8B8E7B7A-6823-4AB5-AAEC-8FF27B83C56B",
      rank: "normal",
    },
  ],
  P1005: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1005",
        datavalue: { value: "355960", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$87D38BC8-185E-4C81-8D71-B6C74AD97FF5",
      rank: "normal",
    },
  ],
  P7293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7293",
        datavalue: { value: "9810609846805606", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$16F96274-3FD5-4927-BA34-F73930BEE466",
      rank: "normal",
    },
  ],
  P9081: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9081",
        datavalue: { value: "18247", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$715B618A-A393-42CF-A498-D94853C74150",
      rank: "normal",
    },
  ],
  P9097: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9097",
        datavalue: { value: "12456626", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$5ED75B1B-933D-4818-9FEF-A57AA42C3239",
      rank: "normal",
    },
  ],
  P135: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P135",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 207591, id: "Q207591" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$2cd371ab-4648-4c7c-0d72-7589f0322957",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P135",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 290209, id: "Q290209" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$e3794212-44fa-739f-d907-1d7e4edf8bb3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P135",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 6235, id: "Q6235" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$81018c0c-4d82-c874-40be-fb461634be38",
      rank: "normal",
    },
  ],
  P9686: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9686",
        datavalue: { value: "2169", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$FB98EE32-8E1B-49BC-BBF5-6B8BAA23BDD7",
      rank: "normal",
    },
  ],
  P1728: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1728",
        datavalue: { value: "mn0001173086", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$c404f9cb-c63f-47f5-9099-6634b30ada98",
      rank: "normal",
      references: [
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P2722: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2722",
        datavalue: { value: "2737601", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$1be6766d-6ac5-4569-82fc-af9346854e14",
      rank: "normal",
      references: [
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P1902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1902",
        datavalue: { value: "260usZKSgRGs6Ze4DWahMI", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$518c59ae-8777-4e98-9c1b-7f08992dbe15",
      rank: "normal",
      references: [
        {
          snaks: {
            P887: [
              {
                snaktype: "value",
                property: "P887",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1266546,
                    id: "Q1266546",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P434: [
              {
                snaktype: "value",
                property: "P434",
                datavalue: {
                  value: "a92bb13c-6b24-4634-a0a3-30a7a1660ec4",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2021-08-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P887", "P248", "P434", "P813"],
        },
      ],
    },
  ],
  P103: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P103",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 7411, id: "Q7411" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$18d9d388-41bc-48b8-9002-a436858d3cf8",
      rank: "normal",
    },
  ],
  P7305: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7305",
        datavalue: { value: "3876071", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$97c373e3-4acc-371c-fd49-e891b6c5efa8",
      rank: "normal",
    },
  ],
  P1260: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1260",
        datavalue: { value: "LSH/agents/2546", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$3414FC67-761A-411C-B815-B8F3F59E5B4F",
      rank: "normal",
    },
  ],
  P3368: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3368",
        datavalue: { value: "1949895", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$FF4A7B5C-1B93-4528-B8AA-14F0B6623507",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P3368",
        datavalue: { value: "727764", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$FB794BCE-69DF-4389-8AF4-F770425AD137",
      rank: "normal",
    },
  ],
  P8591: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8591",
        datavalue: { value: "02716", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$72D5DEDC-26AB-41B6-9BE8-6F346E25D272",
      rank: "normal",
    },
  ],
  P2600: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2600",
        datavalue: { value: "6000000015776090853", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$48CBDFF3-3154-4B4F-B3D8-3C94B8B8798B",
      rank: "normal",
    },
  ],
  P9495: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9495",
        datavalue: {
          value: "person/59A1A73B-467A-4529-BCA2-4465DE3C23B3",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$579B2C2A-3955-4427-9FBF-45E4D1FC75B4",
      rank: "normal",
    },
  ],
  P8189: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8189",
        datavalue: { value: "987007441298805171", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$B0501A98-9B78-458F-BC92-3A8321675EDB",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 106509962,
                    id: "Q106509962",
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
  P8168: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8168",
        datavalue: { value: "Q381636", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$16C3302F-7BB1-45BC-9FF5-2718D2C1DF47",
      rank: "normal",
    },
  ],
  P9965: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9965",
        datavalue: { value: "544037", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$61FE6511-2B6D-4929-A9AC-A4C06D1EFBF4",
      rank: "normal",
    },
  ],
  P11156: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11156",
        datavalue: { value: "108424", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$DFB9149E-0E9B-4A58-9DE6-07235307EE2B",
      rank: "normal",
    },
  ],
  P937: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 12892, id: "Q12892" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P580: [
          {
            snaktype: "value",
            property: "P580",
            datavalue: {
              value: {
                time: "+1867-01-01T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 9,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
        P582: [
          {
            snaktype: "value",
            property: "P582",
            datavalue: {
              value: {
                time: "+1901-01-01T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 9,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      id: "Q733063$71a64508-6739-4c85-925d-2ca81a0fca47",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17299517,
                    id: "Q17299517",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P650: [
              {
                snaktype: "value",
                property: "P650",
                datavalue: { value: "441206", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2022-12-27T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P650", "P813"],
        },
      ],
    },
  ],
  P11249: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11249",
        datavalue: { value: "14160974", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$D0EC4D12-E815-4E0A-94FB-6C9B0E1494BA",
      rank: "normal",
    },
  ],
  P11496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11496",
        datavalue: { value: "1140000791631537920", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$29CF0268-3C18-446C-B0E6-C5992D0CC331",
      rank: "normal",
    },
  ],
  P271: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P271",
        datavalue: { value: "DA12924925", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$08871B11-BBFF-4B34-80D8-179103F7A54E",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 115920372,
                    id: "Q115920372",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P11496: [
              {
                snaktype: "value",
                property: "P11496",
                datavalue: { value: "1140000791631537920", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2023-03-22T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P248", "P11496", "P813"],
        },
      ],
    },
  ],
  P1327: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1327",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1334711,
            id: "Q1334711",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$9ace0b4f-4d93-c30e-dfed-06d1049b2ddf",
      rank: "normal",
      references: [
        {
          snaks: {
            P1065: [
              {
                snaktype: "value",
                property: "P1065",
                datavalue: {
                  value:
                    "https://web.archive.org/web/20230429065700/https://gezelle.be/biografisch-plein/hiel",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P1065"],
        },
      ],
    },
  ],
  P6104: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6104",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 117717183,
            id: "Q117717183",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$fb64e34c-4ff3-b10e-f49b-4edc2b8a7840",
      rank: "normal",
    },
  ],
  P4457: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4457",
        datavalue: { value: "368041", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$17D3F780-1DA0-4D29-A341-B8B092945D48",
      rank: "normal",
    },
  ],
  P12046: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12046",
        datavalue: { value: "per-000620", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$A031435C-CC62-4ECF-84F7-AE5E692126CE",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                datavalue: { value: "http://data.advn.be/id", type: "string" },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
    },
  ],
  P12458: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12458",
        datavalue: { value: "254088", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: {
              value: "Benoit, Petrus Leonardus Leopoldus, 1834-1901",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$0A4398AA-742D-4C40-8655-8AA2C1839EF4",
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2026-04-04T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P813"],
        },
      ],
    },
  ],
  P6235: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6235",
        datavalue: { value: "peter-leonard-leopold-benoit", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$0C89A7DE-C572-48B4-81BE-852EF153E385",
      rank: "normal",
    },
  ],
  P12615: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12615",
        datavalue: { value: "1437", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$A62936FE-9B1B-4983-8848-B263294F60EC",
      rank: "normal",
    },
  ],
  P10832: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10832",
        datavalue: { value: "E39PBJhd8GtXdH4r7TvXFVVjYP", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$1002282D-CDCD-4C6E-ACA6-9FA1F41C4DD3",
      rank: "normal",
      references: [
        {
          snaks: {
            P11797: [
              {
                snaktype: "value",
                property: "P11797",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 13219454,
                    id: "Q13219454",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P244: [
              {
                snaktype: "value",
                property: "P244",
                datavalue: { value: "n79049119", type: "string" },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                datavalue: {
                  value: {
                    time: "+2024-04-13T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "snaks-order": ["P11797", "P244", "P813"],
        },
      ],
    },
  ],
  P1066: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1066",
        datavalue: {
          value: { "entity-type": "item", "numeric-id": 523581, id: "Q523581" },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$9b75936e-4525-71e7-a5df-b4ad0f0f3b12",
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 41793465,
                    id: "Q41793465",
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
  P1368: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1368",
        datavalue: { value: "000053192", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoit, Peter, 1834-1901", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$E6A4807F-B550-433A-90B8-E9840062DAED",
      rank: "normal",
    },
  ],
  P3365: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3365",
        datavalue: { value: "peter-benoit", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoît, Peter", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$5044C1AC-8FC5-40A4-8C12-F498038DF0C7",
      rank: "normal",
    },
  ],
  P13049: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13049",
        datavalue: { value: "118886568", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$401AC960-FF75-47D9-8652-9BE68885D227",
      rank: "normal",
    },
  ],
  P10608: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10608",
        datavalue: { value: "agent/gnd_118886568", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$90F239B0-0DF5-476E-9846-DD6D9DBB4ABF",
      rank: "normal",
    },
  ],
  P9964: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9964",
        datavalue: { value: "118886568", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$3C8431C2-CA40-410B-8595-E5C0C1ED175E",
      rank: "normal",
    },
  ],
  P13455: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13455",
        datavalue: { value: "14786", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$E359FF45-E6D2-4932-B63E-5090ACBDF585",
      rank: "normal",
    },
  ],
  P396: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P396",
        datavalue: { value: "MUSV006282", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            datavalue: { value: "Benoît, Peter", type: "string" },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q733063$936A6D83-C967-47CB-B6C8-7CA039EAED0F",
      rank: "normal",
    },
  ],
  P13591: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13591",
        datavalue: {
          value: "person/28e5a350-2f91-4aa5-b064-21c166f44c50",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$5FA06802-A9A3-4269-9758-4B79160839F6",
      rank: "normal",
    },
  ],
  P2909: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2909",
        datavalue: { value: "254191", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$CDF77E54-17AA-42B6-9508-EEACF09E76F5",
      rank: "normal",
    },
  ],
  P3373: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3373",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 137439878,
            id: "Q137439878",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$c6b8faa6-4878-c09c-7859-b6d91f7de509",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                datavalue: {
                  value: "https://www.odis.be/lnk/PS_201418",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
    },
  ],
  P25: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P25",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 137439917,
            id: "Q137439917",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q733063$81a427f5-4470-bb06-dd98-0ede0197c3c9",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                datavalue: {
                  value: "http://www.odis.be/lnk/PS_201418",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
    },
  ],
  P1442: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1442",
        datavalue: {
          value: "Tombeau de Peter Benoit (1834–1901) 3.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q733063$5acd3e55-4c4d-00f9-12a1-f841a592c6c0",
      rank: "normal",
    },
  ],
  P14178: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P14178",
        datavalue: { value: "mzk2011668014", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$53831B0A-3D9B-481D-B631-0BA62BD2CA6A",
      rank: "normal",
    },
  ],
  P12674: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12674",
        datavalue: { value: "Q575589", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$CDC1C66F-0172-4711-B0D2-9435FF551426",
      rank: "normal",
    },
  ],
  P14536: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P14536",
        datavalue: { value: "382596", type: "string" },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q733063$8A25C6C7-C697-4D2F-BD94-3CDFFC832E0B",
      rank: "normal",
    },
  ],
};

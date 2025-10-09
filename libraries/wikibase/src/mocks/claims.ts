import type { Claims } from "../types.js";
import type { Snak } from "../types/snaks.js";

type Reference = {
  snaks: Record<string, Snak[]>;
  "snaks-order": string[];
};

const references: Reference[] = [
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

          datavalue: {
            value: "119016075",
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
      P1476: [
        {
          snaktype: "value",
          property: "P1476",

          datavalue: {
            value: {
              text: "Albert Einstein (1879-1955), data.bnf.",
              language: "en",
            },
            type: "monolingualtext",
          },
          datatype: "monolingualtext",
        },
      ],
    },
    "snaks-order": ["P248", "P268", "P813", "P1476"],
  },
  {
    snaks: {
      P854: [
        {
          snaktype: "value",
          property: "P854",

          datavalue: {
            value: "https://www.ige.ch/de/ueber-uns/einstein.html",
            type: "string",
          },
          datatype: "url",
        },
      ],
    },
    "snaks-order": ["P854"],
  },
  {
    snaks: {
      P854: [
        {
          snaktype: "value",
          property: "P854",

          datavalue: {
            value:
              "https://www.library.ethz.ch/en/Resources/Digital-library/Einstein-Online/Einstein-s-Studies-at-the-Polytechnic-Institute-in-Zurich-1896-1900",
            type: "string",
          },
          datatype: "url",
        },
      ],
    },
    "snaks-order": ["P854"],
  },
];

export const schoolClaims: Claims = {
  P69: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11942,
            id: "Q11942",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      // qualifiers,
      // "qualifiers-order": ["P512", "P580", "P582", "P812"],
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      rank: "normal",
      references,
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 206702,
            id: "Q206702",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",

      "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      rank: "normal",
    },
  ],
};

export const fieldClaims: Claims = {
  P101: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",

        datavalue: {
          value: {
            "entity-type": "item",
            id: "Q10001",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",

      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      rank: "normal",
      references: [],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",

        datavalue: {
          value: {
            "entity-type": "item",
            id: "Q10002",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$bdd0de70-44e3-c7c5-8566-0389c0bd14e7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",

        datavalue: {
          value: {
            "entity-type": "item",
            id: "Q10004",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$b2fb71ab-49ad-df08-7b3b-8bd09a55ae77",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",

        datavalue: {
          value: {
            "entity-type": "item",
            id: "Q10003",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      rank: "normal",
      references: [],
    },
  ],
};

export const lifeDateClaims: Claims = {
  P569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P569",

        datavalue: {
          value: {
            time: "+1879-03-14T00:00:00Z",
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
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
      rank: "normal",
      references,
    },
  ],
  P570: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P570", // DATE_OF_DEATH

        datavalue: {
          value: {
            time: "+1955-04-18T00:00:00Z",
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
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
      rank: "normal",
      references,
    },
  ],
};

export const humanClaims: Claims = {
  P31: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P31",
        datavalue: {
          value: {
            "entity-type": "item",
            id: "Q5",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$00000000-0000-0000-0000-00000000000B",
      rank: "normal",
    },
  ],
};

export const imageClaims: Claims = {
  P18: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P18",

        datavalue: {
          value: "Albert Einstein Head.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P2096: [
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein en 1947",
                language: "es",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein in 1947.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein i 1947.",
                language: "nb",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein i 1947.",
                language: "nn",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "ألبرت أينشتاين في عام 1947",
                language: "ar",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "jan Ape Ansan li lon tenpo sike nanpa 1947.",
                language: "tok",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1947-00-00T00:00:00Z",
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
      "qualifiers-order": ["P2096", "P585"],
      id: "q937$B471B8E0-E688-4793-8E30-24C8389A8061",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P18",

        datavalue: {
          value: "Einstein 1921 by F Schmutzer - restoration.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1921-00-00T00:00:00Z",
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
        P2096: [
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein during a lecture in Vienna in 1921.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",

            datavalue: {
              value: {
                text: "Albert Einstein under en forelesning i Wien i 1921.",
                language: "nb",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            datavalue: {
              value: {
                text: "Albert Einstein under ei forelesing i Wien i 1921.",
                language: "nn",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
        P276: [
          {
            snaktype: "value",
            property: "P276",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1741,
                id: "Q1741",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2096", "P276"],
      id: "Q937$88B58F47-3339-46E1-A0AD-478709700441",
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
                    "numeric-id": 191168,
                    id: "Q191168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://cs.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=22994976",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
};

export const otherClaims: Claims = {
  P1280: [
    {
      type: "statement",
      mainsnak: {
        snaktype: "value",
        property: "P1280",

        datavalue: {
          value: "7912035",
          type: "string",
        },
        datatype: "external-id",
      },
      qualifiers: {},
      "qualifiers-order": ["P1810"],
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      rank: "normal",
    },
  ],
  P101: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P101", // FIELD_OF_WORK

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 18362,
            id: "Q18362",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
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
};

const lottaClaims = {
  P1280: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1280",

        datavalue: {
          value: "7912035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      rank: "normal",
    },
  ],
  P1412: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1412",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1860,
            id: "Q1860",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$fe800b70-414d-3192-59de-94f16ee93233",
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

                datavalue: {
                  value: "119016075",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein (1879-1955), data.bnf.",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1412",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9964d33c-4674-aa6a-66d2-a0c261007e7e",
      rank: "preferred",
      references: [
        {
          snaks: {
            P1280: [
              {
                snaktype: "value",
                property: "P1280",

                datavalue: {
                  value: "7912035",
                  type: "string",
                },
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
                    "numeric-id": 16744133,
                    id: "Q16744133",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P1280", "P248"],
        },
      ],
    },
  ],
  P1321: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1321",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$35460528-4d70-e713-afa7-5494838f3696",
      rank: "normal",
    },
  ],
  P20: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P20",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P17: [
          {
            snaktype: "value",
            property: "P17",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 30,
                id: "Q30",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P131: [
          {
            snaktype: "value",
            property: "P131",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1408,
                id: "Q1408",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P17", "P131"],
      id: "q937$0C41B0BF-DB5D-49B3-A1BC-974CA2545A23",
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
                    time: "+2014-12-30T00:00:00Z",
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
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "http://www.einstein-bern.ch",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
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
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P958: [
              {
                snaktype: "value",
                property: "P958",

                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          "snaks-order": ["P248", "P958", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
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
          value: {
            "entity-type": "item",
            "numeric-id": 3012,
            id: "Q3012",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P131: [
          {
            snaktype: "value",
            property: "P131",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 159631,
                id: "Q159631",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P17: [
          {
            snaktype: "value",
            property: "P17",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 43287,
                id: "Q43287",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P131", "P17"],
      id: "q937$B3E7F30F-C43D-435D-9EA3-266983130FB1",
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
                    time: "+2014-12-10T00:00:00Z",
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
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
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
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P958: [
              {
                snaktype: "value",
                property: "P958",

                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          "snaks-order": ["P248", "P958", "P813"],
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
                    "numeric-id": 54917921,
                    id: "Q54917921",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P22: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P22",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 88665,
            id: "Q88665",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$35853C93-CDA0-4CFD-BB93-5332E87D1BC2",
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
  ...imageClaims,
  P69: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11942,
            id: "Q11942",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P512: [
          {
            snaktype: "value",
            property: "P512",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 787674,
                id: "Q787674",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P580: [
          {
            snaktype: "value",
            property: "P580",

            datavalue: {
              value: {
                time: "+1896-00-00T00:00:00Z",
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
                time: "+1900-00-00T00:00:00Z",
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
        P812: [
          {
            snaktype: "value",
            property: "P812",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 853077,
                id: "Q853077",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P512", "P580", "P582", "P812"],
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.library.ethz.ch/en/Resources/Digital-library/Einstein-Online/Einstein-s-Studies-at-the-Polytechnic-Institute-in-Zurich-1896-1900",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1876751,
            id: "Q1876751",
          },
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
                time: "+1888-00-00T00:00:00Z",
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
                time: "+1894-00-00T00:00:00Z",
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
      id: "Q937$bdd0de70-44e3-c7c5-8566-0389c0bd14e7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 435651,
            id: "Q435651",
          },
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
                time: "+1895-00-00T00:00:00Z",
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
        P512: [
          {
            snaktype: "value",
            property: "P512",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 694222,
                id: "Q694222",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1896-10-03T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1896-09-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
      },
      "qualifiers-order": ["P580", "P512", "P585", "P582"],
      id: "Q937$b2fb71ab-49ad-df08-7b3b-8bd09a55ae77",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P69",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 206702,
            id: "Q206702",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P812: [
          {
            snaktype: "value",
            property: "P812",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 413,
                id: "Q413",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1905-04-30T00:00:00Z",
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
        P512: [
          {
            snaktype: "value",
            property: "P512",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 849697,
                id: "Q849697",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P184: [
          {
            snaktype: "value",
            property: "P184",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 4175282,
                id: "Q4175282",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          {
            snaktype: "value",
            property: "P184",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 97154,
                id: "Q97154",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P1026: [
          {
            snaktype: "value",
            property: "P1026",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 51754009,
                id: "Q51754009",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
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
                    "numeric-id": 51754009,
                    id: "Q51754009",
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
  P40: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 123371,
            id: "Q123371",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$E06622DC-565F-4DCA-8AAF-FD27B149272A",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 118253,
            id: "Q118253",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$23EEE6B9-9930-44E1-99DF-98FC953F2A9F",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 468357,
            id: "Q468357",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$6F89DFD4-2E96-457E-BF94-7BC98185C8DD",
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
  P109: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P109",

        datavalue: {
          value: "Albert Einstein signature 1934.svg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "q937$5FA9ECBA-7403-4292-93C7-60119B5E029E",
      rank: "normal",
    },
  ],
  P103: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P103",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$AEC9F74F-E740-4E5B-AD61-5E6AE0388C7C",
      rank: "normal",
    },
  ],
  P166: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 808424,
            id: "Q808424",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1920-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$806C056A-5BBC-4BF5-A8E3-8100E68321AE",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1921-00-00T00:00:00Z",
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
        P2121: [
          {
            snaktype: "value",
            property: "P2121",

            datavalue: {
              value: {
                amount: "+121573",
                unit: "http://www.wikidata.org/entity/Q122922",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P6208: [
          {
            snaktype: "value",
            property: "P6208",

            datavalue: {
              value: {
                text: "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P6208",

            datavalue: {
              value: {
                text: "för hans förtjänster om den teoretiska fysiken, särskilt hans upptäckt av lagen för den fotoelektriska effekten",
                language: "sv",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2121", "P6208"],
      id: "q937$67E83EE7-ED3E-44D3-9989-9792CEC63F63",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.nobelprize.org/nobel_prizes/physics/laureates/1921/index.html",
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
                    time: "+2015-08-03T00:00:00Z",
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
            P123: [
              {
                snaktype: "value",
                property: "P123",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1781959,
                    id: "Q1781959",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P407: [
              {
                snaktype: "value",
                property: "P407",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1860,
                    id: "Q1860",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "The Nobel Prize in Physics 1921",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P123", "P407", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.nobelprize.org/nobel_prizes/about/amounts/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "The Nobel Prize amounts",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 753072,
            id: "Q753072",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1926-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$734E469F-1D50-4391-A16E-0E9C2F478D6B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1711648,
            id: "Q1711648",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1931-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$F95226FF-1F1D-4A08-B320-9D03DBD6293B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1419938,
            id: "Q1419938",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1921-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$000BA6F7-4B85-47CA-ACF6-89590095E5E4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 317038,
            id: "Q317038",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1929-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$70EC89C2-21BF-486F-A1A1-0EFC53D8F358",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3141777,
            id: "Q3141777",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1935-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$4325B997-108F-4715-931E-005AC54CEAFB",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 28003,
            id: "Q28003",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1925-01-01T00:00:00Z",
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
        P6208: [
          {
            snaktype: "value",
            property: "P6208",

            datavalue: {
              value: {
                text: "For his theory of relativity and his contributions to the quantum theory.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
      },
      "qualifiers-order": ["P585", "P6208"],
      id: "q937$FDB4C682-E267-4D26-8668-72EC724BCAB4",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://docs.google.com/spreadsheets/d/1dsunM9ukGLgaW3HdG9cvJ_QKd7pWjGI0qi_fCb1ROD4/pubhtml?gid=1336391689&single=true",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Award winners : Copley Medal",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P123: [
              {
                snaktype: "value",
                property: "P123",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 123885,
                    id: "Q123885",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P407: [
              {
                snaktype: "value",
                property: "P407",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1860,
                    id: "Q1860",
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
                    time: "+2018-12-30T00:00:00Z",
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
          "snaks-order": ["P854", "P1476", "P123", "P407", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 15056034,
            id: "Q15056034",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$73C644B6-22F2-4AE9-9C42-0C3AAA545004",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1522873,
            id: "Q1522873",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1934-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$F4BB8E43-FF0A-4FD9-8F49-D64E385A0C1C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25287226,
            id: "Q25287226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$e9700a38-4bc4-0be6-f494-09494f09bb04",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 28861731,
            id: "Q28861731",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1949-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$24c2aaa7-4417-8642-9e39-61d25e275787",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www3.huji.ac.il/htbin/hon_doc/doc_search.pl?search",
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
                    time: "+2017-03-06T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "The Hebrew University awards honorary degrees",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 42309226,
            id: "Q42309226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d2dcd59a-4529-1c8c-85b4-8b2ce182f8b2",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 50621171,
            id: "Q50621171",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1923-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$2323D34A-12CA-41D9-8B48-A6AF21145A5B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14906020,
            id: "Q14906020",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1921-05-05T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$7D740CE6-4FEC-4C62-9672-F5484E7426B7",
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
                    "numeric-id": 111806251,
                    id: "Q111806251",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P304: [
              {
                snaktype: "value",
                property: "P304",

                datavalue: {
                  value: "110",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P304"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63315195,
            id: "Q63315195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1942-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$2870b88e-4ae5-3ec2-52d0-4d20cc7f10c8",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121359767,
            id: "Q121359767",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2009-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$A307E274-1A71-4231-A723-127A27967F1B",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.carnegie.org/awards/great-immigrants/2009-great-immigrants/",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156478,
            id: "Q156478",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$8951b01c-43ef-2921-df1a-35540e924f43",
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
                    "numeric-id": 58251,
                    id: "Q58251",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value: "https://az.wikipedia.org/?oldid=7441143",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 125121451,
            id: "Q125121451",
          },
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
                time: "+1924-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$1D4DBBB0-E023-4F6C-9B88-4C38DB0CC289",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.royalsociety.org.nz/who-we-are/our-people/our-fellows/all-honorary-fellows/",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126418747,
            id: "Q126418747",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1928-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$65aa4447-439c-0e46-3c61-717c07fa290e",
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
                    "numeric-id": 105750302,
                    id: "Q105750302",
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
                    time: "+1934-00-00T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Liste des docteurs honoris causa de l'Université de Paris de 1918 à 1933 inclus",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P304: [
              {
                snaktype: "value",
                property: "P304",

                datavalue: {
                  value: "90-95",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P478: [
              {
                snaktype: "value",
                property: "P478",

                datavalue: {
                  value: "9",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P433: [
              {
                snaktype: "value",
                property: "P433",

                datavalue: {
                  value: "1",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://gallica.bnf.fr/ark:/12148/bpt6k93885z/f95.item",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": [
            "P248",
            "P577",
            "P1476",
            "P304",
            "P478",
            "P433",
            "P854",
          ],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14705795,
            id: "Q14705795",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2008-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$69c0e08d-46f8-6373-d58d-9b96315999f7",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://njhalloffame.org/hall-of-famers/2008-inductees/albert-einstein/",
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
  P214: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P214",

        datavalue: {
          value: "75121530",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$B7F821E9-5E5C-4D51-A153-4CA8A47B6941",
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
        {
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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
          value: {
            "entity-type": "item",
            "numeric-id": 19350898,
            id: "Q19350898",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P101: [
          {
            snaktype: "value",
            property: "P101",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 43514,
                id: "Q43514",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          {
            snaktype: "value",
            property: "P101",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1144457,
                id: "Q1144457",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P101"],
      id: "q937$6B608722-6D2C-49C5-BF35-52B04756A748",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16389557,
            id: "Q16389557",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$A7B3AD70-40BE-47D2-B39D-1C8A00014F4C",
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
                    "numeric-id": 48952,
                    id: "Q48952",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 205375,
            id: "Q205375",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FB7CA2E9-67D5-474B-BF78-FC78DDD78C88",
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
                    "numeric-id": 48952,
                    id: "Q48952",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3745071,
            id: "Q3745071",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FA010268-D5E2-486D-AEAC-2D1542189E95",
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
                    "numeric-id": 48952,
                    id: "Q48952",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1231865,
            id: "Q1231865",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$6B2F6BAF-1162-462C-BC46-2EE85484A6DF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1622272,
            id: "Q1622272",
          },
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
                time: "+1909-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$64608042-4792-8de0-2fe1-a3d45d17b6fc",
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 169470,
            id: "Q169470",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$CD15AE8D-589B-4A06-B136-D181FE5FCF08",
      rank: "preferred",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.nytimes.com/1993/11/25/obituaries/zhou-peiyuan-is-dead-educator-scientist-91.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Zhou Peiyuan Is Dead; Educator-Scientist, 91",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.nytimes.com/1995/10/23/theater/theater-review-a-fantasy-meeting-of-minds.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "THEATER REVIEW;A Fantasy Meeting of Minds",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",

                datavalue: {
                  value: "16734",
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
                    time: "+2021-04-01T00:00:00Z",
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
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4964182,
            id: "Q4964182",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$62F61C96-F754-4389-A0BC-8BBC37C4242A",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/13528165.2012.728445",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "The Speed of Broken Light: A meditation on duration and performance by Ted Hiebert",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/09515081003690418",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Neutral monism reconsidered by Erik C. Banks",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 36180,
            id: "Q36180",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$57118ACC-3565-418C-A41E-8E040C128A78",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.smh.com.au/news/book-reviews/einstein-his-life-and-universe/2007/06/22/1182019350450.html?page=fullpage",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Einstein: his life and universe",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://bleacherreport.com/articles/2172365-modern-day-einstein-smashes-flaming-golf-ball-sets-pants-on-fire",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Modern-Day Einstein Smashes Flaming Golf Ball, Sets Pants on Fire",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 901,
            id: "Q901",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$DFEF5489-5E9C-43BD-9A82-C63F9B74C7B2",
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
                    "numeric-id": 4834894,
                    id: "Q4834894",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P827: [
              {
                snaktype: "value",
                property: "P827",

                datavalue: {
                  value: "p00kwcp5",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Special Relativity and how it all began",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P827", "P1476"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 170790,
            id: "Q170790",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$F1AF73AB-29CA-43CD-BB66-DFDFEB455A32",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.bbc.co.uk/programmes/b00srz5b/episodes/player",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "A brief history of mathematics Episodes",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.bbc.co.uk/norfolk/kids/science/az_alberteinstein.shtml",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "A-Z for Norfolk Science, A:Albert Einstein",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2896489,
            id: "Q2896489",
          },
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
                time: "+1901-00-00T00:00:00Z",
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
                time: "+1906-00-00T00:00:00Z",
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
      id: "Q937$623c4508-4c8d-6ae1-530f-9591770822de",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121594,
            id: "Q121594",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1932: [
          {
            snaktype: "value",
            property: "P1932",

            datavalue: {
              value: "Universitäts-Professor",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      id: "Q937$075AFDBC-7E85-428C-A407-4B45211B3C28",
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
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
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
                    time: "+2021-01-06T00:00:00Z",
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
            P1932: [
              {
                snaktype: "value",
                property: "P1932",

                datavalue: {
                  value: "Universitäts-Professor",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813", "P1932"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16003550,
            id: "Q16003550",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5D381634-7466-4919-A345-CFBA7A2A5F5B",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P269: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P269",

        datavalue: {
          value: "026849186",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$14E9B302-D7A0-488D-BB48-DE1A285827A6",
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
  P268: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P268",

        datavalue: {
          value: "119016075",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$D0E13400-F973-43AA-BD39-466EC0C257FF",
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
  P373: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P373",

        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "q937$2F332903-133D-4CA0-AD24-8B4292C2BF89",
      rank: "normal",
    },
  ],
  P244: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P244",

        datavalue: {
          value: "n79022889",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$9BA2796D-01EE-4037-9910-029BA945CABA",
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
            P248: [
              {
                snaktype: "value",
                property: "P248",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P463: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 123885,
            id: "Q123885",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$642B1EBB-AED3-455E-9A3C-B4D8B2664031",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 329464,
            id: "Q329464",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7451E5A0-6E6E-4A82-848B-CE55019A96CD",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 543804,
            id: "Q543804",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$882DAFA0-5B20-4620-A4DF-B51A0C556ADF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 338432,
            id: "Q338432",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$552717B0-4610-4F96-A70F-56354F68ED41",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 466089,
            id: "Q466089",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$78190F69-14B5-4EF5-86AA-3EE6990850F0",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 684415,
            id: "Q684415",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$023CD9AD-8957-4662-A45F-40D69693D7BA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 414188,
            id: "Q414188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$D3C196C2-1C80-4FDB-BBC1-E3105C9C811F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2370801,
            id: "Q2370801",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$0C556605-6B7E-4184-83EC-E95289F6D62A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188771,
            id: "Q188771",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1E3374B7-2511-4A2B-8791-8088B171C0DC",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 191583,
            id: "Q191583",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$613DBC15-8BF9-4C25-B5E1-B12F510C4BF3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 253439,
            id: "Q253439",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$08567CBB-2DE3-4CCD-B10A-72E04E7AA468",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 463303,
            id: "Q463303",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$74DCC2BF-C874-4BE6-8A6E-5A1A65279ED6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4397938,
            id: "Q4397938",
          },
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
                time: "+1922-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$F1E10DFB-1C54-474A-BB4C-FEC6FD2DFABF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2095524,
            id: "Q2095524",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$D0DAD5E7-6E01-4F03-928B-8684D26364DA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3603946,
            id: "Q3603946",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$57ABD98B-0DD1-40D6-9B21-A41B86AC9ABB",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2497232,
            id: "Q2497232",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2a97ea20-4b54-a2f7-b2aa-682efb715bc2",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.dichistoriasaude.coc.fiocruz.br/iah/pt/verbetes/acadbrci.htm",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "http://www.abc.org.br/membro/albert-einstein/",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 270794,
            id: "Q270794",
          },
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
                time: "+1922-00-00T00:00:00Z",
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
        P2868: [
          {
            snaktype: "value",
            property: "P2868",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 61664704,
                id: "Q61664704",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      id: "Q937$d4cf1f6d-4a4b-992e-4d16-e7db8976dc98",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 270794,
            id: "Q270794",
          },
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
                time: "+1942-00-00T00:00:00Z",
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
        P2868: [
          {
            snaktype: "value",
            property: "P2868",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 63315195,
                id: "Q63315195",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      id: "Q937$b304cb4c-4594-d3dd-6d10-22602a5238c5",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2945826,
            id: "Q2945826",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$fb68e164-4300-788d-b577-2b38bc419789",
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
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://fr.wikipedia.org/w/index.php?title=Centre_international_de_synth%C3%A8se&oldid=159820946",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P434: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P434",

        datavalue: {
          value: "c98c325e-7277-46e8-8b44-e3517f3e041a",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$E0DFBCB9-E69E-4469-A420-60B33E530DC1",
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
  P569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P569",

        datavalue: {
          value: {
            time: "+1879-03-14T00:00:00Z",
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
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
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
                    time: "+2014-04-09T00:00:00Z",
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
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
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

                datavalue: {
                  value: "119016075",
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
                    "numeric-id": 547473,
                    id: "Q547473",
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
                    time: "+2017-08-22T00:00:00Z",
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

                datavalue: {
                  value: "w69k499r",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 1165538,
                    id: "Q1165538",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3222: [
              {
                snaktype: "value",
                property: "P3222",

                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
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

                datavalue: {
                  value: "314",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 2629164,
                    id: "Q2629164",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1233: [
              {
                snaktype: "value",
                property: "P1233",

                datavalue: {
                  value: "99141",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
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
                    "numeric-id": 15706812,
                    id: "Q15706812",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2639: [
              {
                snaktype: "value",
                property: "P2639",

                datavalue: {
                  value: "4533e35f16964c939b82033bb6259e32",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
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
                    "numeric-id": 2728291,
                    id: "Q2728291",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6234: [
              {
                snaktype: "value",
                property: "P6234",

                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
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
                    "numeric-id": 6023365,
                    id: "Q6023365",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P863: [
              {
                snaktype: "value",
                property: "P863",

                datavalue: {
                  value: "thinker/2958",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P863", "P1810", "P813"],
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
                    "numeric-id": 21491701,
                    id: "Q21491701",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2454: [
              {
                snaktype: "value",
                property: "P2454",

                datavalue: {
                  value: "PE00000116",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
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

                datavalue: {
                  value: "einstein-albert",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 746368,
                    id: "Q746368",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4342: [
              {
                snaktype: "value",
                property: "P4342",

                datavalue: {
                  value: "Albert_Einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
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
                    "numeric-id": 2664168,
                    id: "Q2664168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1296: [
              {
                snaktype: "value",
                property: "P1296",

                datavalue: {
                  value: "0023623",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
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
                    "numeric-id": 98769076,
                    id: "Q98769076",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8094: [
              {
                snaktype: "value",
                property: "P8094",

                datavalue: {
                  value: "einsteina",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
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
                    "numeric-id": 83365652,
                    id: "Q83365652",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7929: [
              {
                snaktype: "value",
                property: "P7929",

                datavalue: {
                  value: "p=albert;n=einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
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
                    "numeric-id": 1307356,
                    id: "Q1307356",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8854: [
              {
                snaktype: "value",
                property: "P8854",

                datavalue: {
                  value: "18467",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
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

                datavalue: {
                  value: "56686",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",

                datavalue: {
                  value: "16734",
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
                    time: "+2021-04-01T00:00:00Z",
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
          "snaks-order": ["P248", "P6844", "P813"],
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
                    "numeric-id": 55740543,
                    id: "Q55740543",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2383: [
              {
                snaktype: "value",
                property: "P2383",

                datavalue: {
                  value: "117243",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
        },
        {
          snaks: {
            P5375: [
              {
                snaktype: "value",
                property: "P5375",

                datavalue: {
                  value: "5923",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 105958830,
                    id: "Q105958830",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P5375", "P1810", "P248"],
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
                    "numeric-id": 107343683,
                    id: "Q107343683",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1284: [
              {
                snaktype: "value",
                property: "P1284",

                datavalue: {
                  value: "00000000666",
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
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
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
            time: "+1955-04-18T00:00:00Z",
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
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
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
                    time: "+2014-04-09T00:00:00Z",
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
            P958: [
              {
                snaktype: "value",
                property: "P958",

                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17378135,
                    id: "Q17378135",
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
                    time: "+2015-09-28T00:00:00Z",
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
          "snaks-order": ["P958", "P248", "P813"],
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

                datavalue: {
                  value: "119016075",
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
                    "numeric-id": 547473,
                    id: "Q547473",
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
                    time: "+2017-08-22T00:00:00Z",
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

                datavalue: {
                  value: "w69k499r",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 1165538,
                    id: "Q1165538",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3222: [
              {
                snaktype: "value",
                property: "P3222",

                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
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

                datavalue: {
                  value: "314",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 2629164,
                    id: "Q2629164",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1233: [
              {
                snaktype: "value",
                property: "P1233",

                datavalue: {
                  value: "99141",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
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
                    "numeric-id": 15706812,
                    id: "Q15706812",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2639: [
              {
                snaktype: "value",
                property: "P2639",

                datavalue: {
                  value: "4533e35f16964c939b82033bb6259e32",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
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
                    "numeric-id": 2728291,
                    id: "Q2728291",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6234: [
              {
                snaktype: "value",
                property: "P6234",

                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
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
                    "numeric-id": 6023365,
                    id: "Q6023365",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P863: [
              {
                snaktype: "value",
                property: "P863",

                datavalue: {
                  value: "thinker/2958",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P863", "P1810", "P813"],
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
                    "numeric-id": 21491701,
                    id: "Q21491701",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2454: [
              {
                snaktype: "value",
                property: "P2454",

                datavalue: {
                  value: "PE00000116",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
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

                datavalue: {
                  value: "einstein-albert",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
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
                    "numeric-id": 746368,
                    id: "Q746368",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4342: [
              {
                snaktype: "value",
                property: "P4342",

                datavalue: {
                  value: "Albert_Einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
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
                    "numeric-id": 2664168,
                    id: "Q2664168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1296: [
              {
                snaktype: "value",
                property: "P1296",

                datavalue: {
                  value: "0023623",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
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
                    "numeric-id": 98769076,
                    id: "Q98769076",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8094: [
              {
                snaktype: "value",
                property: "P8094",

                datavalue: {
                  value: "einsteina",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
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
                    "numeric-id": 83365652,
                    id: "Q83365652",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7929: [
              {
                snaktype: "value",
                property: "P7929",

                datavalue: {
                  value: "p=albert;n=einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
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
                    "numeric-id": 1307356,
                    id: "Q1307356",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8854: [
              {
                snaktype: "value",
                property: "P8854",

                datavalue: {
                  value: "18467",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
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

                datavalue: {
                  value: "56686",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",

                datavalue: {
                  value: "16734",
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
                    time: "+2021-04-01T00:00:00Z",
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
          "snaks-order": ["P248", "P6844", "P813"],
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
                    "numeric-id": 55740543,
                    id: "Q55740543",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2383: [
              {
                snaktype: "value",
                property: "P2383",

                datavalue: {
                  value: "117243",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
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
                    "numeric-id": 107343683,
                    id: "Q107343683",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1284: [
              {
                snaktype: "value",
                property: "P1284",

                datavalue: {
                  value: "00000000666",
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
            P1810: [
              {
                snaktype: "value",
                property: "P1810",

                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
        },
      ],
    },
  ],
  P349: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P349",

        datavalue: {
          value: "00438728",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$F926A784-7C6D-48EB-A49B-E096AEC46FCD",
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
  P549: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P549",

        datavalue: {
          value: "53269",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$74D92D81-EE56-4941-AA45-C85494191269",
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
  P485: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 675617,
            id: "Q675617",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$bfa38bb1-4a58-28da-4662-7123ebe46b5e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 22095877,
            id: "Q22095877",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P973: [
          {
            snaktype: "value",
            property: "P973",

            datavalue: {
              value: "http://www.albert-einstein.org/.index3.html",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P973"],
      id: "Q937$02527dba-46c3-5a8e-076f-102b61f64b7c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14708020,
            id: "Q14708020",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P973: [
          {
            snaktype: "value",
            property: "P973",

            datavalue: {
              value: "https://finding-aids.lib.unc.edu/03048/",
              type: "string",
            },
            datatype: "url",
          },
        ],
        P217: [
          {
            snaktype: "value",
            property: "P217",

            datavalue: {
              value: "3048-z",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein Letter, undated.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P973", "P217", "P1810"],
      id: "Q937$2891A7AE-59CC-4516-B92B-8D2BB8CFA6F3",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://finding-aids.lib.unc.edu/03048/",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 39934978,
            id: "Q39934978",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P217: [
          {
            snaktype: "value",
            property: "P217",

            datavalue: {
              value: "Sammelbestand_Einstein_Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P217"],
      id: "Q937$F3A2D721-A412-416F-8307-9B04F5D0EFCA",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://vls.hsa.ethz.ch/client/link/de/archiv/einheit/b9b4178f95254672b981174aaee8f06b",
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
                    time: "+2025-01-15T00:00:00Z",
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
  P910: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P910",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7213562,
            id: "Q7213562",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d415d195-405e-41b3-18e0-7222736f0659",
      rank: "normal",
    },
  ],
  P31: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P31",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 5,
            id: "Q5",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$ED5C61AE-EA02-4E78-932B-FF21A34714EB",
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

                datavalue: {
                  value: "119016075",
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P691: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P691",

        datavalue: {
          value: "jn19990002019",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$677E4BC8-3AC3-4FE7-996F-86F794F6A9E6",
      rank: "normal",
    },
  ],
  P409: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P409",

        datavalue: {
          value: "36582360",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A42E665D-E820-42D7-BEF1-7E06A8F4F7AA",
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
  P906: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P906",

        datavalue: {
          value: "184709",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8DEE4AFA-8D09-4431-A651-1E48CCF61F9C",
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
                    "numeric-id": 877583,
                    id: "Q877583",
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
  P245: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P245",

        datavalue: {
          value: "500240971",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F735494D-7107-40C3-B9DE-75F9595E70BB",
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
  P1005: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1005",

        datavalue: {
          value: "26339",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BABC7A6D-354E-49D9-9D6F-B575794A0546",
      rank: "normal",
    },
  ],
  P1006: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1006",

        datavalue: {
          value: "068350767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$356672EF-41CD-4BBA-8010-A4D704268DAB",
      rank: "normal",
    },
  ],
  P646: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P646",

        datavalue: {
          value: "/m/0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E34CCE18-850C-4A3F-88D4-B62FB5BD3E0B",
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
  P184: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P184",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4175282,
            id: "Q4175282",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P3831: [
          {
            snaktype: "value",
            property: "P3831",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 26236695,
                id: "Q26236695",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1905-00-00T00:00:00Z",
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
      "qualifiers-order": ["P3831", "P585"],
      id: "Q937$99734d53-47c3-cc4b-580e-784486517d39",
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
                    "numeric-id": 829984,
                    id: "Q829984",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P549: [
              {
                snaktype: "value",
                property: "P549",

                datavalue: {
                  value: "53269",
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
                    time: "+2019-12-15T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P184",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 97154,
            id: "Q97154",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P3831: [
          {
            snaktype: "value",
            property: "P3831",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 26236691,
                id: "Q26236691",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P3831"],
      id: "Q937$e3d28962-43ab-c2d8-e4d6-8284b893dff9",
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
                    "numeric-id": 829984,
                    id: "Q829984",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P549: [
              {
                snaktype: "value",
                property: "P549",

                datavalue: {
                  value: "53269",
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
                    time: "+2019-12-15T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P184",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 116635,
            id: "Q116635",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$61A00029-3304-45D0-AF63-38B5696AAAF5",
      rank: "normal",
      references: [
        {
          snaks: {
            P3452: [
              {
                snaktype: "value",
                property: "P3452",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 116635,
                    id: "Q116635",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P3452"],
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
          value: {
            "entity-type": "item",
            "numeric-id": 116635,
            id: "Q116635",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$670c8276-4457-cb31-a7ed-94749ac6b86a",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1066",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57246,
            id: "Q57246",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1af7745f-44d9-46e2-672e-49e04b5132f3",
      rank: "normal",
    },
  ],
  P1017: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1017",

        datavalue: {
          value: "ADV10181679",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DFEE8D9A-C5F7-4A1C-B6EB-76754C1CF3B5",
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P396: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P396",

        datavalue: {
          value: "CFIV035853",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$A6CF3E97-B780-449A-92D9-7550A687AFD4",
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P1015: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1015",

        datavalue: {
          value: "90053072",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$02C20F8E-58BD-4CD1-95A1-C45BF8D3B3A0",
      rank: "normal",
    },
  ],
  P950: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P950",

        datavalue: {
          value: "XX834035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8E2AC50E-695D-43E4-80EB-96BD2B5A5CF5",
      rank: "normal",
    },
  ],
  P1207: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1207",

        datavalue: {
          value: "n95300836",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BBCB193F-56B9-450A-AC4F-99072EDBDE8B",
      rank: "normal",
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
            "numeric-id": 577011,
            id: "Q577011",
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

            datavalue: {
              value: "1",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1545"],
      id: "Q937$AED4F087-0294-4FD7-9507-A6171EAA3F27",
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
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
                    time: "+2021-01-06T00:00:00Z",
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
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
    },
  ],
  P1273: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1273",

        datavalue: {
          value: "a10077078",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E4036E0D-45C7-4D62-908D-2AABC971099B",
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

                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P214"],
        },
      ],
    },
  ],
  P998: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",

        datavalue: {
          value: "Science/Physics/History/People/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$22A8DE0D-649A-4F71-B6EC-80C767F50CDC",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",

        datavalue: {
          value:
            "World/Français/Sciences/Physique/Histoire/Personnages_historiques/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 150,
                id: "Q150",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$1C3C9040-A752-47F6-9382-2F9557682E78",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",

        datavalue: {
          value:
            "World/Deutsch/Wissenschaft/Naturwissenschaften/Physik/Personen/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$A8F18655-B3A0-4EC9-AA0B-8597A4AC8D1E",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",

        datavalue: {
          value:
            "World/Español/Ciencia_y_tecnología/Física/Historia/Biografías/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1321,
                id: "Q1321",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$48BB41BA-D982-4E6D-9E78-96DDBB73A5D8",
      rank: "normal",
    },
  ],
  P1368: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1368",

        datavalue: {
          value: "000027126",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$11AE3A27-3175-442B-8FA3-3E88930EE59E",
      rank: "normal",
    },
  ],
  P1375: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1375",

        datavalue: {
          value: "000012537",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4E346517-ABD7-49CC-8DF3-F4E6A469888A",
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
            "numeric-id": 17329836,
            id: "Q17329836",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P958: [
          {
            snaktype: "value",
            property: "P958",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2699: [
          {
            snaktype: "value",
            property: "P2699",

            datavalue: {
              value:
                "http://www.larousse.fr/encyclopedie/personnage/Albert_Einstein/117783",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P958", "P2699"],
      id: "Q937$0AD0FBFC-0D40-45D6-B4DE-06B4F3662737",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 17378135,
            id: "Q17378135",
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

            datavalue: {
              value: "29 : Чаган — Экс-ле-Бен",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",

            datavalue: {
              value: {
                time: "+1978-00-00T00:00:00Z",
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
        P958: [
          {
            snaktype: "value",
            property: "P958",

            datavalue: {
              value: "Эйнштейн Альберт",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",

            datavalue: {
              value: "578-579",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P478", "P577", "P958", "P304"],
      id: "Q937$589BB4AF-5A39-461E-B548-683810223683",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 51955019,
            id: "Q51955019",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$17D1B970-3D2D-415A-B6DC-3CEE7CAF42BF",
      rank: "normal",
      references: [
        {
          snaks: {
            P958: [
              {
                snaktype: "value",
                property: "P958",

                datavalue: {
                  value: "Einstein, Albert 1879-1955",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digitale.beic.it/primo_library/libweb/action/search.do?fn=search&vid=BEIC&vl%283134987UI0%29=creator&vl%28freeText0%29=Einstein%20Albert",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P958", "P854"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 67311526,
            id: "Q67311526",
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
              value:
                "https://www.obalkyknih.cz/view_auth?auth_id=jn19990002019",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      id: "Q937$545DCA7E-43A7-4A0B-A134-46F57FDCEAB4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 15987490,
            id: "Q15987490",
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
                "numeric-id": 83471893,
                id: "Q83471893",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q937$845e3868-46dc-9343-5403-82766ca1189d",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 99413897,
            id: "Q99413897",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert, 1879-1955",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2699: [
          {
            snaktype: "value",
            property: "P2699",

            datavalue: {
              value: "https://www.medvik.cz/link/jn19990002019",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2699"],
      id: "Q937$F4EBD78B-B56C-47C0-BCB6-64D7744A5CAE",
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
                    "numeric-id": 99413897,
                    id: "Q99413897",
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
                    time: "+2020-10-09T00:00:00Z",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 104698881,
            id: "Q104698881",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$E1D45EE3-8151-4678-9AC1-78270248436B",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1932: [
              {
                snaktype: "value",
                property: "P1932",

                datavalue: {
                  value: "Einstein Albert (1879)",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P854", "P1932"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 642074,
            id: "Q642074",
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
              value: "https://hls-dhs-dss.ch/de/articles/028814",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      id: "Q937$eee7f584-4e64-e65f-3f00-643dc6e88bc7",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19047539,
            id: "Q19047539",
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
                "numeric-id": 123946574,
                id: "Q123946574",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q937$D3C9CA0E-6DC7-4494-BA5C-D0CEEB23607A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 20968284,
            id: "Q20968284",
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

            datavalue: {
              value: "48",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",

            datavalue: {
              value: "341-344",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P478", "P304"],
      id: "Q937$8A454B4F-BCFE-4D9F-B9B2-DDA2F12B9177",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126178049,
            id: "Q126178049",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P304: [
          {
            snaktype: "value",
            property: "P304",

            datavalue: {
              value: "308",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P304"],
      id: "Q937$4B613577-6015-4420-9B89-8A548043769F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126740695,
            id: "Q126740695",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$B7BC8CA1-2862-492B-8DC1-6594D2E3B557",
      rank: "normal",
    },
  ],
  P1430: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1430",

        datavalue: {
          value: "3242",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FA86602E-794B-4A4D-BBB1-16A709340B1A",
      rank: "normal",
    },
  ],
  P1472: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1472",

        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "Q937$09962D5F-3198-4288-A956-38A7F1FE002F",
      rank: "normal",
    },
  ],
  P1563: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1563",

        datavalue: {
          value: "Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$75E589D7-EC23-4180-B465-BFFBC5E9BA1E",
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
                    "numeric-id": 11921,
                    id: "Q11921",
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
  P345: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P345",

        datavalue: {
          value: "nm0251868",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$aca1fb0d-4a60-93ee-95d9-f59f0f376b19",
      rank: "normal",
    },
  ],
  P108: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 685539,
            id: "Q685539",
          },
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
                time: "+1902-06-16T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      id: "Q937$681079d2-4cea-399f-f9aa-132bf91bfe53",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Sieben Jahre «Schusterhandwerk»",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 31519,
            id: "Q31519",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$01cdae6a-47ca-930b-e6ed-63cca4af0b22",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 206702,
            id: "Q206702",
          },
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
                time: "+1909-00-00T00:00:00Z",
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
                time: "+1911-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$43226229-45b1-8629-863d-327885eaf9ef",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Sieben Jahre «Schusterhandwerk»",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1729754,
            id: "Q1729754",
          },
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
                time: "+1911-01-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$d2b77642-4d2f-9c44-de71-7557d470d11e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11942,
            id: "Q11942",
          },
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
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1914-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$204dda8b-4ec7-8928-ca7c-901dbb243068",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 708038,
            id: "Q708038",
          },
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
                time: "+1917-00-00T00:00:00Z",
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
                time: "+1933-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1162163,
                id: "Q1162163",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$35baeeb5-4bc3-4e0e-5bed-fbdafbb89183",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 21578,
            id: "Q21578",
          },
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
                time: "+1933-00-00T00:00:00Z",
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
                time: "+1955-00-00T00:00:00Z",
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
      id: "Q937$79c11d97-4915-3e26-830c-4c99be4e4b7f",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein und das IGE",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156598,
            id: "Q156598",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$83E63163-A6DE-4579-BB7F-B80E7DC196B8",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 659080,
            id: "Q659080",
          },
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
                time: "+1908-00-00T00:00:00Z",
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
                time: "+1909-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 37226,
                id: "Q37226",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$33ce60f7-4629-0ab4-38d9-701633f118da",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 819187,
            id: "Q819187",
          },
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
                time: "+1916-00-00T00:00:00Z",
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
                time: "+1918-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 30461,
                id: "Q30461",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$48e2be89-4926-b28f-cbfa-f7a70c2409cd",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 152087,
            id: "Q152087",
          },
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
                time: "+1914-00-00T00:00:00Z",
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
                time: "+1933-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$d622ea39-43bd-b60c-0d60-23069d205a79",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 329464,
            id: "Q329464",
          },
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
                time: "+1914-00-00T00:00:00Z",
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
                time: "+1933-00-00T00:00:00Z",
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
      id: "Q937$dd224d46-4f2e-76a3-1646-d0786a513ff3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 635642,
            id: "Q635642",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2cb650b8-497c-aebc-c6cf-8703dd24b3f2",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156598,
            id: "Q156598",
          },
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
                time: "+1920-09-21T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1946-07-13T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 875424,
                id: "Q875424",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P361: [
          {
            snaktype: "value",
            property: "P361",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 61666665,
                id: "Q61666665",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39", "P361"],
      id: "Q937$12315011-4D00-4857-933A-9BC6DF949F86",
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 70,
            id: "Q70",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d0dc2648-441c-24b2-6f89-3eccd9a85643",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 168756,
            id: "Q168756",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FE32FC62-32EB-49E2-ABB2-37E0EC99C054",
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
                    time: "+2019-07-03T00:00:00Z",
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
            P3452: [
              {
                snaktype: "value",
                property: "P3452",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 6375970,
                    id: "Q6375970",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
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
          "snaks-order": ["P813", "P3452", "P143"],
        },
      ],
    },
  ],
  P1284: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1284",

        datavalue: {
          value: "00000000666",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F95587F0-3E98-4777-BE3A-9D26AF0B002F",
      rank: "normal",
    },
  ],
  P723: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P723",

        datavalue: {
          value: "eins001",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7E75EF73-C1D0-4660-9C74-1CCCA07B55EB",
      rank: "normal",
    },
  ],
  P1711: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1711",

        datavalue: {
          value: "9689",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$801D4FA4-741A-4620-B0C0-AEFCEE6FF4E9",
      rank: "normal",
    },
  ],
  P1741: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1741",

        datavalue: {
          value: "96461",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0E73A074-C7FE-4667-AE6A-8C9262C59AED",
      rank: "normal",
    },
  ],
  P1263: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1263",

        datavalue: {
          value: "302/000022236",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$04B517EF-5DC1-4E45-96F1-3212AC9AB13D",
      rank: "normal",
    },
  ],
  P1801: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Einstein deska.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$BB6B6F48-0DF8-42ED-A5DD-FA520DD03694",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value:
            "8839 - Milano - Via Bigli - Palazzo Olivazzi - Lapide Albert Einstein - Foto Giovanni Dall'Orto - 14-Apr-2007.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$AA2939E2-DC6C-4780-ABF4-F29F92A5342C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Home Albert Einstein 1895 Memorial.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$39A5B7FD-C35E-471E-B0FB-2CB9467C2D45",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Einstein-barrakka.JPG",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$02B500D6-8628-4BEE-8EFB-796598225D26",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Albert Einstein - Andräschule Salzburg.PNG",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$BB5EEB7D-9E0C-4515-89A4-3474642CA8CA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "05w Denkmal Albert Einstein.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$F1EB94E4-EBF0-40BD-A704-BCE87BDB4CB7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Einstein Plaque.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$8FE38029-D7F3-4DEC-99D5-B5D9F1E7EB79",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",

        datavalue: {
          value: "Archenhold-Sternwarte, 642-748.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$1726bd73-414f-742e-d831-0550b3ac3b99",
      rank: "normal",
    },
  ],
  P937: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 70,
            id: "Q70",
          },
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
                time: "+1902-06-16T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      id: "Q937$862B872E-0986-4E1F-BCB5-67EA892B0E21",
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
                    time: "+2015-04-02T00:00:00Z",
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
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1085,
            id: "Q1085",
          },
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
                time: "+1911-01-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      id: "Q937$B42B39CD-B046-4D84-AF15-C6FC03B1CBFF",
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
                    time: "+2015-04-02T00:00:00Z",
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
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
          },
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
                time: "+1909-00-00T00:00:00Z",
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
                time: "+1911-00-00T00:00:00Z",
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
      id: "Q937$1DBF6E45-7D71-496F-AADE-ABB4FB5F074F",
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
                    time: "+2015-04-02T00:00:00Z",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 64,
            id: "Q64",
          },
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
                time: "+1914-04-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1933-00-00T00:00:00Z",
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
      id: "Q937$5FEDB28F-5810-490E-9258-301C36E95BB6",
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
                    time: "+2015-04-02T00:00:00Z",
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
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 464344,
            id: "Q464344",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$af167d49-49ce-e4e5-7167-5a6ce897952e",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$280ea2e9-4613-29a2-9eaf-b5150af990c0",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://en.wikipedia.org/wiki/Institute_for_Advanced_Study",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
          },
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
                time: "+1912-10-01T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1914-00-00T00:00:00Z",
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
      id: "Q937$26125040-4339-417b-cd07-1f0722f2f35d",
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
                    time: "+2015-04-02T00:00:00Z",
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
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P1816: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1816",

        datavalue: {
          value: "mp73025",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6DF10E5B-DCB2-4EA4-90E3-0A66A3463134",
      rank: "normal",
    },
  ],
  P1819: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1819",

        datavalue: {
          value: "I00482340",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D18EC269-EBC8-4E29-91B3-E0FFA0F42756",
      rank: "normal",
    },
  ],
  P1938: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1938",

        datavalue: {
          value: "1630",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D0978887-68BE-473F-B3E6-A9FCF3C896C8",
      rank: "normal",
    },
  ],
  P973: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",

        datavalue: {
          value: "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$11b5e7a8-4c1e-f48a-ced0-c1707226db35",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",

        datavalue: {
          value: "https://www.ige.ch/de/ueber-uns/einstein.html",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$37f0d024-415d-a0e6-d9b9-28a0e963191f",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",

        datavalue: {
          value: "http://www.digiporta.net/index.php?id=553550365",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$63DAA43E-48B6-4654-B493-928738178FBE",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",

        datavalue: {
          value: "http://www.digiporta.net/index.php?id=568612883",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$EC12FBB9-05FE-4987-9BEE-6C82F2B4412F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",

        datavalue: {
          value: "http://www.digiporta.net/index.php?id=707892219",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$9F63BB27-5275-4FDC-AD23-456899EEF925",
      rank: "normal",
    },
  ],
  P551: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1309294,
            id: "Q1309294",
          },
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
                time: "+1929-00-00T00:00:00Z",
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
                time: "+1932-00-00T00:00:00Z",
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
        P131: [
          {
            snaktype: "value",
            property: "P131",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 625403,
                id: "Q625403",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P131"],
      id: "Q937$2bcc3000-4b64-0562-be8c-ad8225e41752",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 390003,
            id: "Q390003",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P131: [
          {
            snaktype: "value",
            property: "P131",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 70,
                id: "Q70",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P580: [
          {
            snaktype: "value",
            property: "P580",

            datavalue: {
              value: {
                time: "+1903-10-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1905-05-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
        P669: [
          {
            snaktype: "value",
            property: "P669",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 680298,
                id: "Q680298",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P670: [
          {
            snaktype: "value",
            property: "P670",

            datavalue: {
              value: "49",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P131", "P580", "P582", "P669", "P670"],
      id: "Q937$576078b8-437c-7b9e-ad1b-4ac16439d20a",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1726,
            id: "Q1726",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3B8DA1A3-81A3-4A42-AA52-B83DE77FF254",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$68B67BB3-2268-4CE5-B968-0F2AAC9272A7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 942842,
            id: "Q942842",
          },
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
                time: "+1911-01-01T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$891EA76A-93E7-49FC-A9D1-2784E999DA72",
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
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
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
                    time: "+2021-01-06T00:00:00Z",
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
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9009,
            id: "Q9009",
          },
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
                time: "+1901-09-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
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
                time: "+1902-01-00T00:00:00Z",
                timezone: 0,
                before: 0,
                after: 0,
                precision: 10,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              },
              type: "time",
            },
            datatype: "time",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      id: "Q937$61f1859b-4722-e623-53dd-8ad8b58836d8",
      rank: "normal",
    },
  ],
  P227: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P227",

        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5780ABCF-2F30-4613-B043-1FB2C8482C7D",
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
                    "numeric-id": 15156406,
                    id: "Q15156406",
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P2021: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2021",

        datavalue: {
          value: {
            amount: "+2",
            unit: "1",
          },
          type: "quantity",
        },
        datatype: "quantity",
      },
      type: "statement",
      id: "Q937$DA60BC41-F680-461A-A3A7-9D675CEEF2B8",
      rank: "normal",
    },
  ],
  P1953: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1953",

        datavalue: {
          value: "430935",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$78067182-14BA-4B6A-AC4D-B9748388D10C",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2015-08-06T00:00:00Z",
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
  P734: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P734",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16834800,
            id: "Q16834800",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$148f07c2-4670-5dda-0c03-151cbd56e4c2",
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
            P213: [
              {
                snaktype: "value",
                property: "P213",

                datavalue: {
                  value: "0000000077040933",
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
                    time: "+2015-10-16T00:00:00Z",
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
          "snaks-order": ["P248", "P213", "P813"],
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
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
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
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
                    time: "+2021-01-06T00:00:00Z",
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
          "snaks-order": ["P248", "P854", "P813"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P270: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P270",

        datavalue: {
          value: "n2004370668",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EC244A6E-7F96-46D3-A0A1-0010EB63DDF7",
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
                    "numeric-id": 30239,
                    id: "Q30239",
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
  P1048: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1048",

        datavalue: {
          value: "369710",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3B48841C-6CC9-4213-90B2-74532E90D1B9",
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
                    "numeric-id": 30239,
                    id: "Q30239",
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
  P1213: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1213",

        datavalue: {
          value: "000124193",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1F5EE4D6-597D-4B1C-A59D-0FF3954D378E",
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
                    "numeric-id": 30239,
                    id: "Q30239",
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
  P535: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P535",

        datavalue: {
          value: "314",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$21ffa00d-486e-5d1a-43bf-afcb604a6057",
      rank: "normal",
    },
  ],
  P1233: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1233",

        datavalue: {
          value: "99141",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$84234072-22E0-4D22-8639-CEF328126AA0",
      rank: "normal",
    },
  ],
  P648: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P648",

        datavalue: {
          value: "OL3175986A",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ae858c3b-4935-e68a-f3d6-89608a55d451",
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
            "numeric-id": 87554,
            id: "Q87554",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$72DE4D46-3D7E-49F3-9787-BA064C56C343",
      rank: "normal",
    },
  ],
  P2163: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2163",

        datavalue: {
          value: "32023",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$69e5db09-44d7-fa1e-5a07-4c29e593cdda",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P2163",

        datavalue: {
          value: "460651",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9362F75B-0695-4160-963E-79B22A633C4D",
      rank: "normal",
    },
  ],
  P2188: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2188",

        datavalue: {
          value: "157",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7d2bb948-46f5-07cb-f9de-1388d92eeb23",
      rank: "normal",
    },
  ],
  P1556: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1556",

        datavalue: {
          value: "einstein.albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D777AF1-C32C-42A9-97E0-44C4AB87873D",
      rank: "normal",
    },
  ],
  P1315: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1315",

        datavalue: {
          value: "382451",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C1166544-7625-4021-97FF-1102833C1CEB",
      rank: "normal",
    },
  ],
  P935: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P935",

        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "Q937$4182BA1C-DA1E-4B66-B6B4-37DEBDA09457",
      rank: "normal",
    },
  ],
  P443: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P443",

        datavalue: {
          value: "De-Albert Einstein-Pronuciation.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$0aeda9f5-4815-84b9-3711-37cbc130e726",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P443",

        datavalue: {
          value: "LL-Q34239 (kok)-Fredericknoronha-Albert Einstein.wav",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 34239,
                id: "Q34239",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$a7c5b8f0-a9e4-410b-adb4-d901b227a203",
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
                    "numeric-id": 60024037,
                    id: "Q60024037",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P10369: [
              {
                snaktype: "value",
                property: "P10369",

                datavalue: {
                  value: "Q700784",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P10369"],
        },
      ],
    },
  ],
  P172: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P172",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7325,
            id: "Q7325",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$4AC1D270-BB85-42E6-9F2C-AF1A0A283399",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          "snaks-order": ["P143", "P813"],
        },
      ],
    },
  ],
  P2383: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2383",

        datavalue: {
          value: "117243",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3BAF146F-9543-4C23-9B5F-CE14ECC9980C",
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
            "numeric-id": 902624,
            id: "Q902624",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P518: [
          {
            snaktype: "value",
            property: "P518",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 2464312,
                id: "Q2464312",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P518"],
      id: "Q937$0fba0628-4ed9-f8bf-9088-1e2c53edd4fd",
      rank: "normal",
    },
  ],
  P1417: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1417",

        datavalue: {
          value: "biography/Albert-Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2093: [
          {
            snaktype: "value",
            property: "P2093",

            datavalue: {
              value: "Michio Kaku",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2093"],
      id: "Q937$008FDB12-84E2-41DB-AF21-81A2F79B59F4",
      rank: "normal",
    },
  ],
  P2600: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2600",

        datavalue: {
          value: "4481345450320047133",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8a5deb97-4595-eafb-8409-69b6f1508d75",
      rank: "normal",
    },
  ],
  P2639: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2639",

        datavalue: {
          value: "4533e35f16964c939b82033bb6259e32",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4F6B79EC-D4B1-42E9-80AD-E35ADDD26022",
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
                    time: "+2016-04-01T00:00:00Z",
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
  P1871: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1871",

        datavalue: {
          value: "cnp01496856",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P2241: [
          {
            snaktype: "value",
            property: "P2241",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 41755623,
                id: "Q41755623",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P2241"],
      id: "Q937$80E4F5AC-092F-4881-9B9F-522FCFDF2A25",
      rank: "deprecated",
    },
  ],
  P1003: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1003",

        datavalue: {
          value: "000074139",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$807FF339-0105-4263-8A7A-75A6FFC26533",
      rank: "normal",
    },
  ],
  P2930: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2930",

        datavalue: {
          value: "A.Einstein.1",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$81839751-F897-4276-88EC-1051CD7CB0BF",
      rank: "normal",
    },
  ],
  P2435: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2435",

        datavalue: {
          value: "184328",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6015a64d-4eb4-53c9-b26d-0c4357fbf171",
      rank: "normal",
    },
  ],
  P1899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1899",

        datavalue: {
          value: "1035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9FF11DBB-5751-4C5A-8407-2A7C85434699",
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
  P2959: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2959",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 21200226,
            id: "Q21200226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$12409B26-3B9E-4B59-8FA0-145A0250C4B0",
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
                    "numeric-id": 1975217,
                    id: "Q1975217",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P2959",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25696257,
            id: "Q25696257",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2ac0f5fb-45f9-00b4-9fa6-fd857911f10d",
      rank: "normal",
    },
  ],
  P1296: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1296",

        datavalue: {
          value: "0023623",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C63834A2-D913-49E0-84EC-8E08261E0E6E",
      rank: "normal",
    },
  ],
  P863: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P863",

        datavalue: {
          value: "thinker/2958",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1AA4B8FE-DFE3-45ED-93FB-3E6106EE9520",
      rank: "normal",
    },
  ],
  P3221: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3221",

        datavalue: {
          value: "person/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D95DCAE0-C2AE-400C-85A1-2C7AC889B1EB",
      rank: "normal",
    },
  ],
  P989: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P989",

        datavalue: {
          value: "Hy-Ալբերտ Այնշտայն (Albert Einstein).ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 8785,
                id: "Q8785",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$8b5a15c8-47cb-7529-df61-298660957813",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P989",

        datavalue: {
          value: "De-Albert Einstein.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2005-06-19T00:00:00Z",
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
        P2047: [
          {
            snaktype: "value",
            property: "P2047",

            datavalue: {
              value: {
                amount: "+37.5",
                unit: "http://www.wikidata.org/entity/Q7727",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P407", "P585", "P2047"],
      id: "Q937$ebd8e6e1-4966-ab2a-c10f-fceeea0a3c14",
      rank: "normal",
    },
  ],
  P1411: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1910-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$833F4AB8-5DB6-4C8E-A2B0-E9C41B45F459",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1912-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$10C6F278-B75A-41CE-89D5-BF73F1B467F2",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1913-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$089C39EF-EB95-49B8-B93A-89EB7188C6C7",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1914-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$814F8262-A8B2-45AE-B864-665CB88775CA",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1916-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$04A00051-217B-4EF2-871B-E683A50F7D77",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1917-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$09AB59F9-6D58-4243-A79B-F23D9E0C2991",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1918-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$BC8F6218-9064-4CEC-AFE3-4B7EE9F8167D",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1919-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$C92E9866-8ACD-4515-B5CA-A84373A7D9E6",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1920-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$A2287F64-F005-477F-A66B-AC3E744EDCFB",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1921-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$E79C45D8-C10C-49A4-AAE4-1066FDE0F86E",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1922-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$24981E15-A007-4F8D-A2FC-99BAB12EF1D7",
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
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",

                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
  ],
  P3348: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3348",

        datavalue: {
          value: "76370",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ab650001-4dec-9156-3b6a-74a182370a16",
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
            "numeric-id": 216738,
            id: "Q216738",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3f80df56-48c3-ac02-3336-da112aa4a7a5",
      rank: "normal",
    },
  ],
  P3430: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3430",

        datavalue: {
          value: "w63c6p77",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert, 1879-1955",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$D2E2EBCC-543C-40A4-B801-30DE95E705B6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P3430",

        datavalue: {
          value: "w69k499r",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F587C328-3A96-4A33-B9C0-29FA98B53607",
      rank: "normal",
    },
  ],
  P101: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 18362,
            id: "Q18362",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
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
  P2454: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2454",

        datavalue: {
          value: "PE00000116",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$32E97C2E-E7CF-4DCD-883C-668FC609B6DA",
      rank: "normal",
    },
  ],
  P3417: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3417",

        datavalue: {
          value: "Albert-Einstein-physicist",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7D2FC670-D645-4590-8330-A4603D17743B",
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
                    "numeric-id": 51711,
                    id: "Q51711",
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
  P949: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P949",

        datavalue: {
          value: "000042773",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$91097cfd-420f-24b0-e767-c41bfcea85dd",
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
            "numeric-id": 11455,
            id: "Q11455",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$f09b6157-49b5-d3b7-f638-6c38e461680c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11452,
            id: "Q11452",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2d7d09a6-470d-307c-b4d8-11f94cc737f1",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 83213,
            id: "Q83213",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3f710f06-4d66-4cdf-59b0-b57faed28cc9",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 43514,
            id: "Q43514",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$91bab259-4bcb-82f7-095a-fd310314ae41",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 56100717,
            id: "Q56100717",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$c3b59239-449d-8473-2f9e-dbc3a46c8971",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 35875,
            id: "Q35875",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1f3e9c3f-4a10-bcc1-840b-106489f92702",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 122894,
            id: "Q122894",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3d0b3a84-4bbb-7909-c87e-010fd0716d03",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 273711,
            id: "Q273711",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$b60d007c-4247-e360-fd0f-c463fc89c70e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 944,
            id: "Q944",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$27f4cff0-4ba8-7f23-d09d-30b24dd095a6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1080745,
            id: "Q1080745",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5d6988b2-494d-032b-5daa-bcb43830d503",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 853656,
            id: "Q853656",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$360bbb34-467d-ca45-e877-1a94f134a616",
      rank: "normal",
    },
  ],
  P3762: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3762",

        datavalue: {
          value: "22128",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4E114584-DAB6-4098-81F3-A540519CFE3F",
      rank: "normal",
    },
  ],
  P2381: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2381",

        datavalue: {
          value: "3611",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$904ad087-403d-f047-b8dd-51e108dd8a69",
      rank: "normal",
    },
  ],
  P509: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P509",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2256736,
            id: "Q2256736",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9550FD9C-92DF-4276-9194-471D4CF613A5",
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
  P3965: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3965",

        datavalue: {
          value: "41865",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$47C7DD6F-77FD-4105-9041-2814BE6D9F6D",
      rank: "normal",
    },
  ],
  P3987: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3987",

        datavalue: {
          value: "690",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C59B62B9-E533-4828-AAE2-BFF7FED417EF",
      rank: "normal",
    },
  ],
  P3360: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3360",

        datavalue: {
          value: "2728",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$52ff5483-4c36-2dbe-0fcb-9073db31a470",
      rank: "normal",
    },
  ],
  P3413: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3413",

        datavalue: {
          value: "3232",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$74409430-0C27-43F0-ACF3-B9FCA15AC9BD",
      rank: "normal",
    },
  ],
  P3222: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3222",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5A3F0CF9-0196-424B-9021-93A51B3D2D89",
      rank: "normal",
    },
  ],
  P1153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1153",

        datavalue: {
          value: "22988279600",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b95d23c2-4002-b6c9-def1-1af0448ef2be",
      rank: "normal",
    },
  ],
  P4116: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4116",

        datavalue: {
          value: "P0520433729",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e89a9a41-435e-1bc8-4fb2-ccf469f1b53a",
      rank: "normal",
    },
  ],
  P2889: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2889",

        datavalue: {
          value: "LZNC-TDG",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c70f45fa-4a44-0ac9-2891-a3f1127afdd1",
      rank: "normal",
    },
  ],
  P4159: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4159",

        datavalue: {
          value: "Albert_Einstein_(1)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$01f12da8-4a0e-5f45-fbc4-6e50e1c1c56a",
      rank: "normal",
    },
  ],
  P4193: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4193",

        datavalue: {
          value: "Albert_Einstein_(1879-1955)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$72f435dd-479c-998c-423a-16cd2d1242e9",
      rank: "normal",
    },
  ],
  P1607: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1607",

        datavalue: {
          value: "278727",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$489B6E8A-C84E-41DD-BBE2-DB438B7A8A49",
      rank: "normal",
    },
  ],
  P4228: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4228",

        datavalue: {
          value: "P000386b",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7A8C06F9-83B7-491D-ABD4-BCD7751143E6",
      rank: "normal",
    },
  ],
  P4293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4293",

        datavalue: {
          value: "pe/004590",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P3740: [
          {
            snaktype: "value",
            property: "P3740",

            datavalue: {
              value: {
                amount: "+404",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P5592: [
          {
            snaktype: "value",
            property: "P5592",

            datavalue: {
              value: {
                amount: "+184",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P3740", "P5592", "P1810"],
      id: "Q937$C0F91968-3C63-4EA2-B99F-C148A16A6BEE",
      rank: "normal",
    },
  ],
  P4389: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4389",

        datavalue: {
          value: "cp37054",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$af88e3d6-477f-d534-4e84-be8426e2556e",
      rank: "normal",
    },
  ],
  P3630: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3630",

        datavalue: {
          value: "2827",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BBA18DA8-A1FC-4F8B-BC95-21A8AE533D38",
      rank: "normal",
    },
  ],
  P4431: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4431",

        datavalue: {
          value: "albert-einsteins-124th-birthday",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b7633923-4b7c-258e-54a5-aa56b797167e",
      rank: "normal",
    },
  ],
  P3029: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3029",

        datavalue: {
          value: "F51776",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$47C7DC9A-641A-4A7D-96CC-F25E422F6211",
      rank: "normal",
    },
  ],
  P3569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3569",

        datavalue: {
          value: "natuurkunde-scheikunde-en-sterrenkunde/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$712A7500-1C0F-40AE-AF07-017B524A0838",
      rank: "normal",
    },
  ],
  P4200: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4200",

        datavalue: {
          value: "54914",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9F83DB47-06FB-4319-8EB3-F8752CDA4169",
      rank: "normal",
    },
  ],
  P1977: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1977",

        datavalue: {
          value: "145134",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6530A781-2B28-482A-BB82-03EF307BDB0D",
      rank: "normal",
    },
  ],
  P4553: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4553",

        datavalue: {
          value: "22021",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$92C291C6-60D3-4F59-A9B4-DDD457D3FC4D",
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
                    "numeric-id": 28054658,
                    id: "Q28054658",
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
  P1960: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1960",

        datavalue: {
          value: "qc6CJjYAAAAJ",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4836fee8-41e0-495a-6e21-3405e9340e2d",
      rank: "normal",
    },
  ],
  P4590: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4590",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3F1776CA-D1FE-433D-997F-C27598DBDFCE",
      rank: "normal",
    },
  ],
  P3219: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3219",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D38C3E4-6A71-45E5-A848-8704C0664932",
      rank: "normal",
    },
  ],
  P4629: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4629",

        datavalue: {
          value: "Einstein, Albert, 1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D84A7A3-CE81-4F95-A2D0-5D4DA76F9487",
      rank: "normal",
    },
  ],
  P990: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P990",

        datavalue: {
          value: "03 ALBERT EINSTEIN.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1943-00-00T00:00:00Z",
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
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P585", "P407"],
      id: "Q937$d28dfcfb-4df9-39b0-68df-db41dc8f363e",
      rank: "normal",
    },
  ],
  P2924: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2924",

        datavalue: {
          value: "4940471",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "ЭЙНШТЕЙН",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2241: [
          {
            snaktype: "value",
            property: "P2241",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 123562959,
                id: "Q123562959",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2241"],
      id: "Q937$0dc81f47-4407-a5f0-e6e0-13efd7acba86",
      rank: "deprecated",
    },
  ],
  P1225: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1225",

        datavalue: {
          value: "10582637",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$04A90133-EA44-45AC-A728-4A1C08ABB9F6",
      rank: "normal",
    },
  ],
  P1807: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1807",

        datavalue: {
          value: "4887",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E93A0E8E-3BAF-407E-A3C3-29F698D57A87",
      rank: "normal",
    },
  ],
  P3154: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3154",

        datavalue: {
          value: "einstalb",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DE361415-6DD3-4221-AE82-35739977F729",
      rank: "normal",
    },
  ],
  P4862: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4862",

        datavalue: {
          value: "B000AP7JOU",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AD7A82A0-111D-41F2-B039-2DED52DB4844",
      rank: "normal",
    },
  ],
  P512: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P512",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19693354,
            id: "Q19693354",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1906-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$e400e96b-4501-7967-8e75-bf98d25b8daf",
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
  P737: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 991,
            id: "Q991",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3C1C425C-62DD-4233-B5F1-D2498C003D09",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57246,
            id: "Q57246",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$84ED556F-B8FA-460D-93A0-90D5024B158A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 35802,
            id: "Q35802",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$EE46A452-C11E-4AE7-963A-8FF7FB6F6D5C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1001,
            id: "Q1001",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$19EF14C2-681A-433D-8A75-3A2EEA8F8EF5",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38193,
            id: "Q38193",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$C6E7234B-92BC-4592-BA74-8F03870FE891",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 41688,
            id: "Q41688",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$43BC7AAD-82D2-4948-962C-52FAE1EFB24F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19185,
            id: "Q19185",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9E49F68A-83BB-4442-9486-8E4F40593D6F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 935,
            id: "Q935",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$E4607642-194C-4331-BB6F-BBE8A4CE2710",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7322195,
            id: "Q7322195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FABE514E-23CC-4C6C-8D82-BF3E2F64C7F3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 37160,
            id: "Q37160",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$4C978955-7004-4A30-8761-95A4572597D0",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25820,
            id: "Q25820",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$79A1E4A3-E4FA-4EDA-A94D-DFCAC70A10A2",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 42299,
            id: "Q42299",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$059F1D35-CB89-490B-B3F9-44E25FC91BB4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57193,
            id: "Q57193",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$54302CD2-5FC0-4B2C-A1E4-8F1D76F949F7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9095,
            id: "Q9095",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$BE15FFD8-6E89-45B2-8713-68FA1436BA78",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 200639,
            id: "Q200639",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FEB22D24-5E00-4E88-BF6C-4572C2AE5957",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 310794,
            id: "Q310794",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$390CEB92-E676-4123-9ECD-4C06D20A72AF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 355245,
            id: "Q355245",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$60C51596-943C-4A87-89CF-7C91EC4DA189",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 93996,
            id: "Q93996",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7D6F2F4A-8A25-475F-B29F-A489707ACCC1",
      rank: "normal",
    },
  ],
  P4823: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4823",

        datavalue: {
          value: "1300477",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$376DA0ED-B241-4786-B793-8875CBECFA14",
      rank: "normal",
    },
  ],
  P5008: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 5460604,
            id: "Q5460604",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$8A9B623F-5BD4-4D2F-BA1B-ADF17EDEB839",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 103505599,
            id: "Q103505599",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5be9c404-4a23-875a-bd7a-85e295c46960",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 6173448,
            id: "Q6173448",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2022-10-31T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$255D1010-AEBD-4545-97B7-5AC8D0542D04",
      rank: "normal",
    },
  ],
  P5068: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5068",

        datavalue: {
          value: "1916687",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$19853111-80CE-4E5A-86B0-D25E9FC6B60F",
      rank: "normal",
    },
  ],
  P1187: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1187",

        datavalue: {
          value: "A028454",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B427CBB4-7940-4FB6-9A3F-A724845C8DB7",
      rank: "normal",
    },
  ],
  P5125: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5125",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 48835067,
            id: "Q48835067",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$241D2F15-A24A-44A3-9DF0-0E432AEACAD9",
      rank: "normal",
    },
  ],
  P4789: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4789",

        datavalue: {
          value: "U236915",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ffdd77cc-47ba-c22a-6d42-11e2eec07284",
      rank: "normal",
    },
  ],
  P4955: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4955",

        datavalue: {
          value: "62280",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5bec5aab-487a-0b48-1d07-13a73084d657",
      rank: "normal",
    },
  ],
  P5019: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5019",

        datavalue: {
          value: "einstein-albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a39f6585-4bb7-ba15-4a25-40538ac061c7",
      rank: "normal",
    },
  ],
  P5370: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5370",

        datavalue: {
          value: "48276",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$150F4760-0F90-463C-A487-1F5B1C084C09",
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
                    "numeric-id": 28054658,
                    id: "Q28054658",
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
  P2605: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2605",

        datavalue: {
          value: "52943",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86E40C3F-9175-447E-9C9A-1B878EB68A3D",
      rank: "normal",
    },
  ],
  P271: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P271",

        datavalue: {
          value: "DA00708434",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D1CF45C9-1A07-4B0A-B76D-D730D5CBD3D6",
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

                datavalue: {
                  value: "1140563741718602752",
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
                    time: "+2023-02-17T00:00:00Z",
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
  P2734: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2734",

        datavalue: {
          value: "EinsteinAlbert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0F039528-3A31-411C-A26C-4735CFA46A92",
      rank: "normal",
    },
  ],
  P5375: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5375",

        datavalue: {
          value: "5923",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FB23247D-8139-4EED-B6FC-03BE051E319A",
      rank: "normal",
    },
  ],
  P5441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5441",

        datavalue: {
          value: "Einstein,_Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E7A1995D-D92D-4D82-A1B9-8B96C12C6E0D",
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
                    "numeric-id": 28054658,
                    id: "Q28054658",
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
  P140: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7066,
            id: "Q7066",
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
                "numeric-id": 7311409,
                id: "Q7311409",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P1310: [
          {
            snaktype: "value",
            property: "P1310",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 937,
                id: "Q937",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805", "P1310"],
      id: "Q937$a7471c5f-03f0-4342-87a4-4c532f8db1ce",
      rank: "deprecated",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          "snaks-order": ["P143", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 288928,
            id: "Q288928",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P3680: [
          {
            snaktype: "value",
            property: "P3680",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 937,
                id: "Q937",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P3680"],
      id: "Q937$0624c045-4731-1792-d116-ade653e359e3",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://farm3.static.flickr.com/2687/4496554935_0b573db853_o.jpg",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Letter to M. Berkowitz, 25 October 1950",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P50: [
              {
                snaktype: "value",
                property: "P50",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 937,
                    id: "Q937",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P854", "P1476", "P50"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9268,
            id: "Q9268",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1891-00-00T00:00:00Z",
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
      "qualifiers-order": ["P582"],
      id: "Q937$3dfedb25-4d1a-954c-3b1e-e2ce2f5c08a3",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://archive.org/details/EinsteinAutobiography/page/n1",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P50: [
              {
                snaktype: "value",
                property: "P50",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 937,
                    id: "Q937",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein: Notes for an Autobiography",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",

                datavalue: {
                  value: {
                    time: "+1949-00-00T00:00:00Z",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2019-03-07T00:00:00Z",
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
          "snaks-order": ["P854", "P50", "P1476", "P577", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 728455,
            id: "Q728455",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$41e48a33-49ad-5d99-b8ac-eb093e1778b0",
      rank: "preferred",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://he.wikipedia.org/wiki/%D7%90%D7%9C%D7%91%D7%A8%D7%98_%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Brian, Dennis (1996), Einstein: A Life, New York: John Wiley & Sons, p. 127, ISBN 0-471-11459-6",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
  ],
  P1580: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1580",

        datavalue: {
          value: "a1279550",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$855CFEFF-77AF-4670-B7D8-F94D0FCCCB59",
      rank: "normal",
    },
  ],
  P5731: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5731",

        datavalue: {
          value: "86877",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$965E36F3-192E-4B3A-85BF-84D638EA5110",
      rank: "normal",
    },
  ],
  P5587: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5587",

        datavalue: {
          value: "fcrtts5z33mrjqc",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A92CD88A-2244-409D-938F-5A21C9A7F5B4",
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
                    time: "+2018-03-26T00:00:00Z",
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
  P5776: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5776",

        datavalue: {
          value: "53f5b414dabfae472ef80501",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C9969499-43F7-4EA4-A75D-E106A7C9E6D1",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Arnet_Miner_author_ID&oldid=739822897",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P5021: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5021",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1051792,
            id: "Q1051792",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P5022: [
          {
            snaktype: "value",
            property: "P5022",

            datavalue: {
              value: {
                amount: "+160",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P5022"],
      id: "Q937$e5c2c22e-45ce-915d-900b-9466dbaa22be",
      rank: "normal",
    },
  ],
  P1150: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1150",

        datavalue: {
          value: "BF 5620",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$48935E07-C567-4839-BF88-39C8734FAAFD",
      rank: "normal",
    },
  ],
  P2963: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2963",

        datavalue: {
          value: "9810",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2020-09-28T00:00:00Z",
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
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P3744: [
          {
            snaktype: "value",
            property: "P3744",

            datavalue: {
              value: {
                amount: "+8457",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P585", "P1810", "P3744"],
      id: "Q937$f657504a-4114-3037-35c2-9176d72639c4",
      rank: "normal",
    },
  ],
  P4342: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4342",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P4390: [
          {
            snaktype: "value",
            property: "P4390",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 39893449,
                id: "Q39893449",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P4390"],
      id: "Q937$A81C7B19-9CE3-4A73-AFD0-E81F5F93E542",
      rank: "normal",
    },
  ],
  P5882: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5882",

        datavalue: {
          value: "M00000061906",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C475904E-6F9D-4FC4-B593-F6012D2D331F",
      rank: "normal",
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
      id: "Q937$BA154D92-7A34-4E9F-A2CD-F7B750D24EFA",
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

                datavalue: {
                  value: "119016075",
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",

                datavalue: {
                  value: "1215",
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
                    time: "+2019-06-19T00:00:00Z",
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
          "snaks-order": ["P248", "P2861", "P813"],
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
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

                datavalue: {
                  value: "118529579",
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
                    time: "+2024-07-09T00:00:00Z",
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
  P6173: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6173",

        datavalue: {
          value: "4450",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9792B121-2E20-4F62-8C6C-27A6EF9BC74E",
      rank: "normal",
    },
  ],
  P1441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1441",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 26963166,
            id: "Q26963166",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$C41A7482-FAFC-420D-BB22-C0A4AC175404",
      rank: "normal",
    },
  ],
  P6234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6234",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D6BCE945-D473-4B85-B95F-81ACB7BBD38D",
      rank: "normal",
    },
  ],
  P803: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P803",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25339110,
            id: "Q25339110",
          },
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
                time: "+1909-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$dc7412cb-4045-1e15-9e33-b1aad4381b02",
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
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value: "https://ru.wikipedia.org/?oldid=96910806",
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
                    time: "+2018-12-20T00:00:00Z",
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
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P803",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 414528,
            id: "Q414528",
          },
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
                time: "+1913-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$2aa71e9e-48de-f589-acb2-293861e69c0a",
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
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value: "https://ru.wikipedia.org/?oldid=96910806",
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
                    time: "+2018-12-20T00:00:00Z",
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
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
    },
  ],
  P6231: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6231",

        datavalue: {
          value: "80919",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4D273B23-4084-462A-A802-D6ADB1373FF0",
      rank: "normal",
    },
  ],
  P5905: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5905",

        datavalue: {
          value: "4005-49115",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AA392540-5FCC-4F1C-B0EA-982F8F7AAC94",
      rank: "normal",
    },
  ],
  P5247: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5247",

        datavalue: {
          value: "3005-791",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C17B03A0-1D77-40EB-BF55-A80ABB79B411",
      rank: "normal",
    },
  ],
  P5508: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5508",

        datavalue: {
          value: "56488",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$042BC0B3-6A40-4AF2-BB53-3E9EA16C6313",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://www.archinform.net/service/wd_aiarch.php",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 265049,
                    id: "Q265049",
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
                    time: "+2019-02-28T00:00:00Z",
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
          "snaks-order": ["P854", "P248", "P813"],
        },
      ],
    },
  ],
  P6551: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6551",

        datavalue: {
          value: "11507030",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DE2C26E2-A97E-4826-B668-CF4B3F83398F",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Physics_History_Network_ID&oldid=870387729",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P6573: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6573",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3B4790D4-7F3A-44FB-8CAB-6DEB414C3488",
      rank: "normal",
    },
  ],
  P6564: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6564",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e28f7508-4f6b-d487-6e35-b0691a419508",
      rank: "normal",
    },
  ],
  P102: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P102",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 328195,
            id: "Q328195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
      "qualifiers-order": ["P582"],
      id: "Q937$ca224046-4efe-9975-ca45-59c9618cbc14",
      rank: "normal",
    },
  ],
  P6578: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6578",

        datavalue: {
          value: "65B24EFADE9787FD",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$39544CAA-A410-4E78-9165-53C9187977DD",
      rank: "normal",
    },
  ],
  P1344: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1344",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63430342,
            id: "Q63430342",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$568678a8-49ea-2e5c-d8a6-fe848fefbb00",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1344",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63430346,
            id: "Q63430346",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$dbfdf1ba-4664-7995-c8e9-031fa478cccc",
      rank: "normal",
    },
  ],
  P6363: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6363",

        datavalue: {
          value: "http://data.thenextweb.com/tnw/entity/albert_einstein",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      id: "Q937$b614b508-4fb2-543f-13b6-54860f700c55",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://thenextweb.com/vocabulary/albert-einstein/",
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
  P6770: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6770",

        datavalue: {
          value: "68115.011",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f580b9e9-4b05-84ad-b70c-b749908b7e52",
      rank: "normal",
    },
  ],
  P5739: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5739",

        datavalue: {
          value: "25090",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F21985DE-EF54-4B06-8C78-ED463C0E34B1",
      rank: "normal",
    },
  ],
  P6844: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6844",

        datavalue: {
          value: "16734",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$99AF1BEE-F7AE-4FF3-AA9A-C049F23EF7DE",
      rank: "normal",
    },
  ],
  P5421: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5421",

        datavalue: {
          value: "66492",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$21F243E5-98DC-416F-9A41-09E9BFEF06BF",
      rank: "normal",
    },
  ],
  P6984: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6984",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$370EE5A9-4CC7-4A5C-9859-264FD090FC30",
      rank: "normal",
    },
  ],
  P7031: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7031",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1065: [
          {
            snaktype: "value",
            property: "P1065",

            datavalue: {
              value:
                "http://web.archive.org/web/20190707180834/https://penguin.co.in/author/albert-einstein/",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P1065"],
      id: "Q937$57164D10-E675-4731-AC46-99B93405E884",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Penguin_India_author_ID&oldid=980750962",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P6886: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6886",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1860,
            id: "Q1860",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9CB89033-CCEB-475F-871C-F6A87637BCCC",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6886",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3bd38978-44b4-7cde-ea6e-cb9181b107a6",
      rank: "preferred",
    },
  ],
  P7142: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7142",

        datavalue: {
          value: "15296",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2E941FA2-3FEB-47DB-8113-6DAE8B2AA600",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Poincaré_Papers_person_ID&oldid=992642893",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
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
            "numeric-id": 4357787,
            id: "Q4357787",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7c2193c0-4c6d-8884-4bf9-9d86dfdc7db6",
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
  P7029: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7029",

        datavalue: {
          value: "770128355",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6B8DBA50-B148-49FF-96B9-27165F49B67E",
      rank: "normal",
    },
  ],
  P1196: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1196",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3739104,
            id: "Q3739104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$14c593c6-45e4-be23-d902-13247421bf0a",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.history.com/news/9-things-you-may-not-know-about-albert-einstein",
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
                    time: "+2019-01-04T00:00:00Z",
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
  P1258: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1258",

        datavalue: {
          value: "celebrity/albert_einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$83607b46-4f7a-7788-a6e7-d25d20ab9985",
      rank: "normal",
    },
  ],
  P2604: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2604",

        datavalue: {
          value: "231298",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$98e7e569-402c-74e7-1dff-bde11bd88644",
      rank: "normal",
    },
  ],
  P5033: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5033",

        datavalue: {
          value: "308021",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b34bc648-4b47-0af6-f481-7fdc1e14a28e",
      rank: "normal",
    },
  ],
  P1266: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1266",

        datavalue: {
          value: "36179",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$97c563a5-43aa-af0f-74d8-31bf52a6614b",
      rank: "normal",
    },
  ],
  P5534: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5534",

        datavalue: {
          value: "243732",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c3e98470-44af-4b0c-c90e-164e51cc76b0",
      rank: "normal",
    },
  ],
  P4515: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4515",

        datavalue: {
          value: "10287261",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7c632375-4dc8-7071-90ce-b35f0d4577a3",
      rank: "normal",
    },
  ],
  P3845: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3845",

        datavalue: {
          value: "218603",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b5eb905c-45a3-775b-c7b6-5fd9ac8e33eb",
      rank: "normal",
    },
  ],
  P2638: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2638",

        datavalue: {
          value: "people/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5a6bf0f5-420f-b900-13bd-fd07d6923a7a",
      rank: "normal",
    },
  ],
  P4985: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4985",

        datavalue: {
          value: "1317625",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$d1239124-403c-36d6-aadf-1a5b0a386ffa",
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
                    "numeric-id": 20828898,
                    id: "Q20828898",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P345: [
              {
                snaktype: "value",
                property: "P345",

                datavalue: {
                  value: "nm0251868",
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
                    time: "+2021-05-28T00:00:00Z",
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
          "snaks-order": ["P248", "P345", "P813"],
        },
      ],
    },
  ],
  P4438: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4438",

        datavalue: {
          value: "4ce2bb404fc06",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1bd3734d-4650-c00b-058f-5d883a4d10ec",
      rank: "normal",
    },
  ],
  P6119: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6119",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0c7aa06c-4a57-3016-b94f-a7cae8bef68d",
      rank: "normal",
    },
  ],
  P5284: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5284",

        datavalue: {
          value: "1032566",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e936b18b-477c-220b-4f80-2ab71e170d9c",
      rank: "normal",
    },
  ],
  P6441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6441",

        datavalue: {
          value: "4559238",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$91c72921-4120-5fae-c5d6-faab73381f99",
      rank: "normal",
    },
  ],
  P5340: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5340",

        datavalue: {
          value: "9130",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e8a48e91-4d70-19c5-0304-00e35058d33b",
      rank: "normal",
    },
  ],
  P5254: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5254",

        datavalue: {
          value: "184106",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$35233a3e-4a0d-7bca-16b1-280a43c806ed",
      rank: "normal",
    },
  ],
  P2168: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2168",

        datavalue: {
          value: "404958",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e0c7b540-40d5-e514-8c55-fee743664c97",
      rank: "normal",
    },
  ],
  P7311: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7311",

        datavalue: {
          value: "1428",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4DE960BC-2BA5-4544-9904-9AD82C68703D",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Aozora_Bunko_author_ID&oldid=1014305535",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P4839: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4839",

        datavalue: {
          value: 'Entity["Person", "AlbertEinstein::6tb7g"]',
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a8214f92-42e5-7821-64b1-7f6394da21df",
      rank: "normal",
    },
  ],
  P1038: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1038",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 55594631,
            id: "Q55594631",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1039: [
          {
            snaktype: "value",
            property: "P1039",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 12051531,
                id: "Q12051531",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      id: "Q937$7ac1a440-4882-073c-f966-036bda6cd821",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://stolpersteine-fuer-ulm.de/familie/lina-einstein/",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P1038",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 68761,
            id: "Q68761",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1039: [
          {
            snaktype: "value",
            property: "P1039",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 12051531,
                id: "Q12051531",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      id: "Q937$5d09ed7c-4c6a-5bbb-9106-6653fd49269e",
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
  P5306: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5306",

        datavalue: {
          value: "2504",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D22B2137-D8DB-4748-8757-DBB84063F410",
      rank: "normal",
    },
  ],
  P5380: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5380",

        datavalue: {
          value: "20001817",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$756c73f0-4bfb-ce8b-cda5-cd74dfb9a947",
      rank: "normal",
    },
  ],
  P5034: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5034",

        datavalue: {
          value: "KAC200103196",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$eda6548c-5e83-498c-b9f7-4498eff87da2",
      rank: "normal",
    },
  ],
  P1559: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1559",

        datavalue: {
          value: {
            text: "Albert Einstein",
            language: "de",
          },
          type: "monolingualtext",
        },
        datatype: "monolingualtext",
      },
      type: "statement",
      id: "Q937$8d177df5-4c89-0773-a9da-69d6f20e7073",
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
  P902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P902",

        datavalue: {
          value: "028814",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C454C727-7E87-4322-8BCD-3E020B5D0667",
      rank: "normal",
    },
  ],
  P7400: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7400",

        datavalue: {
          value: "einsteinalbert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$d9a7e636-4aa4-7df8-c950-7f2d690878e5",
      rank: "normal",
    },
  ],
  P7671: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7671",

        datavalue: {
          value: "2975999",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AF617748-484A-4C6B-83C6-A10A8DC04BC3",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Semion_author_ID&oldid=1069382242",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P5390: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5390",

        datavalue: {
          value: "classiques/einstein_albert/einstein_albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$851FB34C-BD6E-45FF-9777-807977CC9C5A",
      rank: "normal",
    },
  ],
  P7709: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7709",

        datavalue: {
          value: "712a47ec-8348-4530-88cc-ce7fca822027",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c3e5ab2f-4ecc-3001-a085-8834ffc35ae2",
      rank: "normal",
    },
  ],
  P7775: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7775",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$79CE2C54-3B8E-44F9-9D35-793AD704A580",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P7775",

        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$76A198B2-2957-4E39-9A2C-7EF0CD95CFA9",
      rank: "normal",
    },
  ],
  P7902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7902",

        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7C2DF352-91AA-47A6-B24A-C6F88176CB38",
      rank: "normal",
    },
  ],
  P4104: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4104",

        datavalue: {
          value: "58992",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$27a6fb2f-44d7-fc7e-bfb1-7eb14d7be835",
      rank: "normal",
    },
  ],
  P7993: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7993",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",

            datavalue: {
              value: {
                time: "+2009-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P577"],
      id: "Q937$807FED95-54CF-4FBF-811F-B60B01D966E4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P7993",

        datavalue: {
          value: "albert-einstein_res-fdb8f22c-a041-11e1-9b2f-d5ce3506d72e",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",

            datavalue: {
              value: {
                time: "+2009-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P577"],
      id: "Q937$4DB4315A-E220-4044-9F00-AE157D8D51C2",
      rank: "normal",
    },
  ],
  P8024: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8024",

        datavalue: {
          value: "26",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CBA2C6AB-2E4E-4BB2-BA5C-5FD1CB449C8E",
      rank: "normal",
    },
  ],
  P6900: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6900",

        datavalue: {
          value: "アルバート・アインシュタイン",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0baaed97-4638-a17a-7ed1-bddc70cc344a",
      rank: "normal",
    },
  ],
  P3365: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3365",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$28cfab3f-44ba-be5e-f459-97557c198e25",
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
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",

                datavalue: {
                  value: "3852",
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
                    time: "+2021-02-13T00:00:00Z",
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
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P4223: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4223",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "EINSTEIN, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2093: [
          {
            snaktype: "value",
            property: "P2093",

            datavalue: {
              value: "Roberto Marcolongo",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",

            datavalue: {
              value: {
                time: "+1932-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P2093", "P577"],
      id: "Q937$600820ce-42de-be10-1b3e-3fc4787624b4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P4223",

        datavalue: {
          value: "albert-einstein_res-b649b13f-87e7-11dc-8e9d-0016357eee51",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "EINSTEIN, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",

            datavalue: {
              value: {
                time: "+1961-01-01T00:00:00Z",
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
        P478: [
          {
            snaktype: "value",
            property: "P478",

            datavalue: {
              value: "III Appendice",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P577", "P478"],
      id: "Q937$4c06f85d-4ff4-41cf-e406-4c6455b7095d",
      rank: "normal",
    },
  ],
  P7865: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7865",

        datavalue: {
          value: "95a5yja38danygu695b5yc1k6mw3acr",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E2076805-F94F-463F-8623-E71BE6E7502F",
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
                    time: "+2020-04-09T00:00:00Z",
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
  P4666: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4666",

        datavalue: {
          value: "441757",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7595FB9E-2B77-4533-BFAD-63F127634CD5",
      rank: "normal",
    },
  ],
  P3280: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3280",

        datavalue: {
          value: "0000007639",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86E32CD2-D9CF-404E-AAC7-955AB7E6AA48",
      rank: "normal",
    },
  ],
  P3846: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3846",

        datavalue: {
          value: "87097968275423",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B773B3CA-FAA6-49E5-8162-6BBBC54F9A05",
      rank: "normal",
    },
  ],
  P7369: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7369",

        datavalue: {
          value: "000007200",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B25E67BE-D08C-42FF-AAE5-5D94B4EC6DD8",
      rank: "normal",
    },
  ],
  P6394: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6394",

        datavalue: {
          value: "a11159522",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1AED4BED-B64B-4670-AF23-7923C649B862",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6394",

        datavalue: {
          value: "a11206068",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6BEF8D2E-B88F-4547-9413-73EAE793AD33",
      rank: "normal",
    },
  ],
  P4619: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4619",

        datavalue: {
          value: "000584933",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$472291AE-DA08-41EE-88E0-CC49B41F42BF",
      rank: "normal",
    },
  ],
  P8179: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8179",

        datavalue: {
          value: "ncf10161360",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EB363600-D012-45D0-85FC-4E5B1459776B",
      rank: "normal",
    },
  ],
  P3065: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3065",

        datavalue: {
          value: "02-A003212458",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D84B5B5C-0504-48F4-A231-D41149A1EC72",
      rank: "normal",
    },
  ],
  P7293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7293",

        datavalue: {
          value: "9810646540205606",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B8F74728-F158-4092-9C57-B4EC0723C7DF",
      rank: "normal",
    },
  ],
  P8189: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8189",

        datavalue: {
          value: "987007260607605171",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$744D8D46-1EB3-4787-BC7F-D942DD29C082",
      rank: "normal",
    },
  ],
  P1670: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1670",

        datavalue: {
          value: "0053C3375",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1fbbf23d-412e-528a-fb55-400e25b1cddc",
      rank: "normal",
    },
  ],
  P1695: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1695",

        datavalue: {
          value: "a0000001178767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$df7a80c8-4e99-96c2-c3d1-ccda76c0c23e",
      rank: "normal",
    },
  ],
  P1890: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1890",

        datavalue: {
          value: "000034649",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c6da5575-4272-9d9e-8f71-38f641be7e38",
      rank: "normal",
    },
  ],
  P1424: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1424",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 8092556,
            id: "Q8092556",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1f07106e-4edd-0321-48f6-872bde3b4445",
      rank: "normal",
    },
  ],
  P1309: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1309",

        datavalue: {
          value: "vtls000837931",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$867FFAEA-6AEE-4D34-AC06-41DD78A795FC",
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
          },
          "snaks-order": ["P248"],
        },
      ],
    },
  ],
  P6683: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6683",

        datavalue: {
          value: "120272",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3CDAA0C0-229C-4F61-95E1-AE43E909D5BD",
      rank: "normal",
    },
  ],
  P8234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8234",

        datavalue: {
          value: "28026",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8724DB70-40E5-41D2-8261-CCDE0BB14936",
      rank: "normal",
    },
  ],
  P7699: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7699",

        datavalue: {
          value: "LNB:V*13679;=BM",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DAB3B3EB-AC81-4A6F-BC18-8B1D8C1B4F12",
      rank: "normal",
    },
  ],
  P6262: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6262",

        datavalue: {
          value: "cardguide:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P9675: [
          {
            snaktype: "value",
            property: "P9675",

            datavalue: {
              value: "5995",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      id: "Q937$DAAE4BB5-B2E0-4C1F-8FCE-F606D694B4DB",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://cardguide.fandom.com/wiki/Albert_Einstein",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",

                datavalue: {
                  value: {
                    text: "Albert Einstein | CardGuide Wiki | Fandom",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",

                datavalue: {
                  value: {
                    time: "+2020-06-08T00:00:00Z",
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
          "snaks-order": ["P854", "P1476", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6262",

        datavalue: {
          value: "disney:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P9675: [
          {
            snaktype: "value",
            property: "P9675",

            datavalue: {
              value: "114971",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      id: "Q937$E80756D8-02BF-44D3-B525-7AD30A3F5513",
      rank: "normal",
    },
  ],
  P5504: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5504",

        datavalue: {
          value: "people/41024053",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$f430141c-4f89-75fb-766a-b573b010f483",
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

                datavalue: {
                  value: "75121530",
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
                    time: "+2020-06-26T00:00:00Z",
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
  P39: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P39",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121594,
            id: "Q121594",
          },
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
                time: "+1911-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$ba274185-377e-4c3d-8bb3-a2d513791797",
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
                    "numeric-id": 181163,
                    id: "Q181163",
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
  P8408: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8408",

        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4ADDBC48-37FC-442E-AABC-DD9B8FDE7AA4",
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
                    "numeric-id": 64139102,
                    id: "Q64139102",
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
                    time: "+2020-07-09T00:00:00Z",
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
  P8034: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8034",

        datavalue: {
          value: "495/91752",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FF54D31D-3687-48FF-91B9-06CEC42B492E",
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                snaktype: "value",
                property: "P214",

                datavalue: {
                  value: "75121530",
                  type: "string",
                },
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
                    time: "+2020-07-16T00:00:00Z",
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
  P2013: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2013",

        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$3D398342-180C-4F67-9FF9-D49C5BE452FC",
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
                    "numeric-id": 200180,
                    id: "Q200180",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://vi.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=63192473",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P8496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8496",

        datavalue: {
          value: "einstein-albert-1879-1955-physicist",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6719B0DA-9474-4C3E-8E27-0C8DE8C24505",
      rank: "normal",
    },
  ],
  P4215: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4215",

        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F37C4D5A-9664-411D-A9E5-2F6B90793598",
      rank: "normal",
    },
  ],
  P6821: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6821",

        datavalue: {
          value: "alvin-person:12189",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7FC9D5FB-D866-4E63-B15C-F97BC2DD1F77",
      rank: "normal",
    },
  ],
  P7700: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7700",

        datavalue: {
          value: "vtls005532100",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$37febba9-4c6c-4e10-6d43-eddc57689409",
      rank: "normal",
    },
  ],
  P5063: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5063",

        datavalue: {
          value: "i95022",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7DD29328-1548-4831-9A94-149D499248E2",
      rank: "normal",
    },
  ],
  P8094: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8094",

        datavalue: {
          value: "einsteina",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$44BE11AF-DB85-4252-8144-5C66C514ABFC",
      rank: "normal",
    },
  ],
  P7929: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7929",

        datavalue: {
          value: "p=albert;n=einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B7D44895-C4F7-491B-B4F5-E3BBD7C82E34",
      rank: "normal",
    },
  ],
  P4613: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4613",

        datavalue: {
          value: "42829",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BF45D317-C93D-4563-9F34-1C6E56F8E4AF",
      rank: "normal",
    },
  ],
  P8750: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8750",

        datavalue: {
          value: "45533",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5900A0C2-F977-47C8-A5DB-5DBB2E6B850D",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P8750",

        datavalue: {
          value: "88532",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C8CA01AC-AA39-4EB8-9A3A-D8B9E485442F",
      rank: "normal",
    },
  ],
  P8795: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8795",

        datavalue: {
          value: "26519",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D5BBC800-DEEB-4D16-ADBB-DB2DB55D261D",
      rank: "normal",
    },
  ],
  P8854: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8854",

        datavalue: {
          value: "18467",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8F0C16BA-D304-497D-8480-B80F40830074",
      rank: "normal",
    },
  ],
  P8849: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8849",

        datavalue: {
          value: "6024037",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$43D6E755-BFFE-4608-AFE1-FD5C41632FF9",
      rank: "normal",
    },
  ],
  P8851: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8851",

        datavalue: {
          value: "487527",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$06F18BE5-F960-4584-B061-ED1A6237ED59",
      rank: "normal",
    },
  ],
  P8899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8899",

        datavalue: {
          value: "Einstein,-Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7D4F29B8-F7B0-45C3-9D5F-510917BEAD33",
      rank: "normal",
    },
  ],
  P8349: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8349",

        datavalue: {
          value: "56686",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ED67FC70-DDC8-44A0-B3DE-D7A473CE2DA3",
      rank: "normal",
    },
  ],
  P8914: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8914",

        datavalue: {
          value: "19535",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BEE69EBB-3194-474D-B051-A8889BA3ABDC",
      rank: "normal",
    },
  ],
  P8947: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8947",

        datavalue: {
          value: "189487",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D628BCCB-E1D9-4F9C-9167-0AF176BF865A",
      rank: "normal",
    },
  ],
  P8852: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8852",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7963760,
            id: "Q7963760",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$EBD005CA-FDCB-4CEF-97BB-A27D8EBFA8DE",
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
                    "numeric-id": 10000,
                    id: "Q10000",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://nl.wikipedia.org/w/index.php?title=Walrussnor&oldid=57409503",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P6706: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6706",

        datavalue: {
          value: "Einstein,+Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$F97A8BAA-FE33-4057-B29A-FC18EC625202",
      rank: "normal",
    },
  ],
  P9037: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9037",

        datavalue: {
          value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$44883DD8-9DF1-41A8-9953-E3E33DFC0196",
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
                    "numeric-id": 63411600,
                    id: "Q63411600",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P9037: [
              {
                snaktype: "value",
                property: "P9037",

                datavalue: {
                  value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P691: [
              {
                snaktype: "value",
                property: "P691",

                datavalue: {
                  value: "jn19990002019",
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
                    time: "+2020-12-22T00:00:00Z",
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
          "snaks-order": ["P248", "P9037", "P691", "P813"],
        },
      ],
    },
  ],
  P1438: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1438",

        datavalue: {
          value: "15027",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e12b279c-460f-ebd6-4f89-11b95064a9f6",
      rank: "normal",
    },
  ],
  P3388: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3388",

        datavalue: {
          value: "47850",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$819DC0C6-0222-4C1F-8E3F-425182A2C1A1",
      rank: "normal",
    },
  ],
  P7842: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7842",

        datavalue: {
          value: "11782",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$7E70202A-FB93-4DA1-BB9A-6124C6C0518A",
      rank: "normal",
      references: [
        {
          snaks: {
            P5508: [
              {
                snaktype: "value",
                property: "P5508",

                datavalue: {
                  value: "56488",
                  type: "string",
                },
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
                    "numeric-id": 265049,
                    id: "Q265049",
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
                    time: "+2024-01-25T00:00:00Z",
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
          "snaks-order": ["P5508", "P248", "P813"],
        },
      ],
    },
  ],
  P8814: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8814",

        datavalue: {
          value: "10974490-n",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C0FF6744-2083-47DA-93FC-A7B5B69613F7",
      rank: "normal",
    },
  ],
  P7796: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7796",

        datavalue: {
          value: "3852",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CEEF7B2A-E90F-4C31-B87E-365E0021B27B",
      rank: "normal",
    },
  ],
  P9160: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9160",

        datavalue: {
          value: "46208",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2C959AF8-FC1C-46FE-A6F2-8CF1D5AA6E20",
      rank: "normal",
    },
  ],
  P8885: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8885",

        datavalue: {
          value: "알베르트 아인슈타인",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4d7c1fcb-428f-fb92-6f70-23de7ef59d40",
      rank: "normal",
    },
  ],
  P9178: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9178",

        datavalue: {
          value: "5803",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D89DB3CD-A83B-4C20-BB2F-1E891841A971",
      rank: "normal",
    },
  ],
  P9251: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9251",

        datavalue: {
          value: "87094",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$027005A2-93BD-48B8-98AA-674379E67FA2",
      rank: "normal",
    },
  ],
  P8902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8902",

        datavalue: {
          value: "people/75109",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$85AB27FC-A542-4376-9A76-A9D89EDA5F0F",
      rank: "normal",
    },
  ],
  P9287: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9287",

        datavalue: {
          value: "3914",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1BF6177F-17B3-422A-B720-7F99872D8CB1",
      rank: "normal",
    },
  ],
  P9044: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9044",

        datavalue: {
          value: "5140127",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$07DC86C5-CA50-4990-AE48-2C08BE1636E8",
      rank: "normal",
    },
  ],
  P9141: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9141",

        datavalue: {
          value: "1986",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$15BC47E0-1963-4626-AD51-79324310FE6D",
      rank: "normal",
    },
  ],
  P5617: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5617",

        datavalue: {
          value: "albert-einstein-307",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F13F3BDB-5A77-4459-87C6-744846159E8B",
      rank: "normal",
    },
  ],
  P7666: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7666",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$445E4546-99B3-457B-835C-C0CF7C9B7D4C",
      rank: "normal",
    },
  ],
  P9482: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9482",

        datavalue: {
          value: "einstein-albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$90F90B63-EB05-467E-B9E3-CC68887BAFCF",
      rank: "normal",
    },
  ],
  P9352: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9352",

        datavalue: {
          value: "239143",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7FFC1FF7-BA07-4831-B89A-D10244262623",
      rank: "normal",
    },
  ],
  P9522: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9522",

        datavalue: {
          value: "4619",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5995B68F-510F-49B8-B4EB-3E9A63405967",
      rank: "normal",
    },
  ],
  P9171: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9171",

        datavalue: {
          value: "107626",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$4f8d35a4-4e99-caff-1f72-e1dfc1b494df",
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

                datavalue: {
                  value: "75121530",
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
                    time: "+2021-05-23T00:00:00Z",
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
  P9626: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9626",

        datavalue: {
          value: "404",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$779C4E13-058F-4F52-B25D-CECABBB395B0",
      rank: "normal",
    },
  ],
  P8313: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8313",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$EEBCB244-81E2-47B8-B35B-EE350F16061D",
      rank: "normal",
    },
  ],
  P2477: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2477",

        datavalue: {
          value: "P1KG24319",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$89cf7fdc-4d5c-d628-1f13-a327af57d40d",
      rank: "normal",
    },
  ],
  P947: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P947",

        datavalue: {
          value: "000021094",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$54f115b8-4e47-d4a5-091c-b9c5bea91faa",
      rank: "normal",
    },
  ],
  P5361: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5361",

        datavalue: {
          value: "EinsteinAlbert1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9316e0f8-4a2b-c1a8-aa39-503ef3dba99b",
      rank: "normal",
    },
  ],
  P7305: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7305",

        datavalue: {
          value: "3896872",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$27C79EBC-F9B1-491A-8B2B-EB270163DF44",
      rank: "normal",
    },
  ],
  P7512: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7512",

        datavalue: {
          value: "database_article/einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$133000B6-81B0-47B4-9B36-9D3D14B8D0B1",
      rank: "normal",
    },
  ],
  P9807: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9807",

        datavalue: {
          value: "163490",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$12C12F18-54B7-4B96-B7D8-A913A58B05DF",
      rank: "normal",
    },
  ],
  P8168: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8168",

        datavalue: {
          value: "Q224273",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C8FAB0D9-5988-4263-90D5-46A47F723E81",
      rank: "normal",
    },
  ],
  P9918: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9918",

        datavalue: {
          value: "PE00004870",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EE3FCBD6-275F-4B2E-8BF2-4D251CB5051C",
      rank: "normal",
    },
  ],
  P9984: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9984",

        datavalue: {
          value: "981058511756306706",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$25DA9494-3E3C-4F53-BC1B-E0821F2AC05A",
      rank: "normal",
    },
  ],
  P10069: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10069",

        datavalue: {
          value: "49324",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$614F5C33-8249-436B-ADCC-4CCA5D1F1445",
      rank: "normal",
    },
  ],
  P10242: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10242",

        datavalue: {
          value: "01682/eu_e_0736/e0736",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1932: [
          {
            snaktype: "value",
            property: "P1932",

            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      id: "Q937$B1341B66-13D3-43A4-8D3A-AEFB93F49981",
      rank: "normal",
    },
  ],
  P7982: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7982",

        datavalue: {
          value: "17257",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$39387E5B-4A4D-4B38-A1DD-7C1B3A9978A9",
      rank: "normal",
    },
  ],
  P9863: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9863",

        datavalue: {
          value: "આઇન્સ્ટાઇન-આલ્બર્ટ",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$88f3c591-4a71-ea2d-277f-b4177b6f6fd4",
      rank: "normal",
    },
  ],
  P10297: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10297",

        datavalue: {
          value: "m0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7c5a2eff-4378-d934-f4d4-b7fce1a75171",
      rank: "normal",
    },
  ],
  P6698: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6698",

        datavalue: {
          value: "アルベルト・アインシュタイン",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A645911A-A6C1-4B36-87C4-75F14FBCD9C9",
      rank: "normal",
    },
  ],
  P9247: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9247",

        datavalue: {
          value: "8399",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A48AE670-0012-4524-828C-35B7B9916FF7",
      rank: "normal",
    },
  ],
  P10227: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10227",

        datavalue: {
          value: "vtls000086385",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$901ac528-4e29-9c58-156a-6b792417f2dd",
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

                datavalue: {
                  value: "75121530",
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
                    time: "+2022-03-05T00:00:00Z",
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
  P701: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P701",

        datavalue: {
          value: "P20204",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$118400BE-4662-4F54-B90E-909A41749C54",
      rank: "normal",
    },
  ],
  P8238: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8238",

        datavalue: {
          value: "7901",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E2EF0D5A-559E-4BC3-AA7E-AF3568CF3793",
      rank: "normal",
    },
  ],
  P10553: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10553",

        datavalue: {
          value: "142045950",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DC5C0034-8B57-4289-AE2C-C5D9B0190B95",
      rank: "normal",
    },
  ],
  P10757: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10757",

        datavalue: {
          value: "395",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$65b22a89-4cce-1421-62e5-389b629dbf26",
      rank: "normal",
    },
  ],
  P10565: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",

        datavalue: {
          value: "123649",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "爱因斯坦，A.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$7dc4b696-4246-5d4d-a056-e269be655515",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",

        datavalue: {
          value: "520858",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9456DEBA-00A4-4F2A-89C4-735AA8277A1F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",

        datavalue: {
          value: "633756",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D9095A5E-8027-46D7-8047-C6E01B683531",
      rank: "normal",
    },
  ],
  P9594: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9594",

        datavalue: {
          value: "6437",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$08FF31BD-5BA4-4E65-8CAE-C3C1FCAF4A9C",
      rank: "normal",
    },
  ],
  P8980: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8980",

        datavalue: {
          value: "000215897",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$03715100-4655-6c49-741b-ac89961d809a",
      rank: "normal",
    },
  ],
  P10299: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10299",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5715b495-4bfa-27ac-08f8-9f78ebd90082",
      rank: "normal",
    },
  ],
  P3390: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3390",

        datavalue: {
          value: "NLB-ar101917",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b06a9af6-41b2-550f-baf1-74270088cb87",
      rank: "normal",
    },
  ],
  P10861: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10861",

        datavalue: {
          value: "013217540103.39",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86f35674-4459-8de2-d7a3-b1ac6de8ae8a",
      rank: "normal",
    },
  ],
  P10899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10899",

        datavalue: {
          value: "882211",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6a2b7d78-430c-1ed7-79b0-73293af31b58",
      rank: "normal",
    },
  ],
  P4012: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4012",

        datavalue: {
          value: "50702974",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4cfba186-48f1-155d-fbb6-0a5acf2f7dbe",
      rank: "normal",
    },
  ],
  P6385: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6385",

        datavalue: {
          value: "nauka_i_tehnika/fizika/ENSHTEN_ALBERT.html",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1af447c5-42ab-afdb-0359-c7809beaea15",
      rank: "normal",
    },
  ],
  P7502: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7502",

        datavalue: {
          value: "Albert_Einstein-N6Y",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$98754DCC-2DEF-4986-B91F-D3537227E367",
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
                    "numeric-id": 71016606,
                    id: "Q71016606",
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
                    time: "+2022-09-10T00:00:00Z",
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
  P3909: [
    {
      mainsnak: {
        snaktype: "somevalue",
        property: "P3909",

        datatype: "monolingualtext",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$d42de8c6-41af-4967-8792-4a6686c6461d",
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
                    time: "+2022-10-01T00:00:00Z",
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
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://historyanswers.com/what-were-albert-einsteins-last-words/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P813", "P854"],
        },
      ],
    },
  ],
  P9212: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9212",

        datavalue: {
          value: "401",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7247C4EA-0B24-4EAC-A471-0783E55662DD",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P9212",

        datavalue: {
          value: "6443",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E48A075F-5C69-4454-9D54-0B12A949CEAC",
      rank: "normal",
    },
  ],
  P10141: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10141",

        datavalue: {
          value: "156358",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$18d12b8d-4bda-bc95-5310-ef1eb8fc1f5e",
      rank: "normal",
    },
  ],
  P11120: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11120",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$67929d93-4c92-0edd-65eb-e4a730ba190a",
      rank: "normal",
    },
  ],
  P6921: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6921",

        datavalue: {
          value: "12767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3AF2C788-CC51-4FB1-980E-1F6B002DD30D",
      rank: "normal",
    },
  ],
  P11155: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11155",

        datavalue: {
          value: "81943",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$709A0C9B-9E40-4C8D-8C42-73EACC67A06F",
      rank: "normal",
    },
  ],
  P11194: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11194",

        datavalue: {
          value: "people/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2DDF78BD-28E7-4C08-B3E7-F57A01116229",
      rank: "normal",
    },
  ],
  P11249: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11249",

        datavalue: {
          value: "14115549",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0C404BCD-9CA7-4A27-98A3-59991DEA5B05",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/KBR_Catalogue_ID_for_writers",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P11239: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11239",

        datavalue: {
          value: "0008824347",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EE6BF046-A28B-4FA4-8900-F9E9F31D22FB",
      rank: "normal",
    },
  ],
  P10302: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10302",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6ad5ded0-e941-42f0-8e44-bfe11baa4c81",
      rank: "normal",
    },
  ],
  P1185: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1185",

        datavalue: {
          value: "303260",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f291e938-8bad-404d-a99b-5bc6d6828566",
      rank: "normal",
    },
  ],
  P1026: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1026",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 51754009,
            id: "Q51754009",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+1905-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$c7c208b8-41b5-6617-14b8-f09f03ca8123",
      rank: "normal",
    },
  ],
  P11496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11496",

        datavalue: {
          value: "1140563741718602752",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9C7521F8-F6BB-44A9-A38B-D4B63CF7F44E",
      rank: "normal",
    },
  ],
  P2607: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2607",

        datavalue: {
          value: "43021f4f-4fda-4b32-bbf0-f2601181e32d",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$840BA23E-C0D8-4F58-A718-3730C7328AC1",
      rank: "normal",
    },
  ],
  P11686: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11686",

        datavalue: {
          value: "981058511756306706",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$599A7A02-8D71-47BC-9D6C-AD100862BA58",
      rank: "normal",
    },
  ],
  P11683: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11683",

        datavalue: {
          value: "albert-ejnshtejn",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$51B7CB8E-74B8-47E9-9398-CB403560FD90",
      rank: "normal",
    },
  ],
  P11196: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11196",

        datavalue: {
          value: "爱因斯坦",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P3740: [
          {
            snaktype: "value",
            property: "P3740",

            datavalue: {
              value: {
                amount: "+247103",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",

            datavalue: {
              value: {
                time: "+2023-03-20T00:00:00Z",
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
      "qualifiers-order": ["P3740", "P585"],
      id: "Q937$372FC8C7-27B2-45B8-96E1-5E6F2F5171D6",
      rank: "normal",
    },
  ],
  P11514: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11514",

        datavalue: {
          value: "einshtein-al-bert-3ec899",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E39D6BE6-F743-4F62-88D1-DA76461A3A25",
      rank: "normal",
    },
  ],
  P8568: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8568",

        datavalue: {
          value: "albert-einstein-table-of-contents",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ED91F6E6-8AAC-4732-B3F4-0EACA83EC898",
      rank: "normal",
    },
  ],
  P4272: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4272",

        datavalue: {
          value: "Einstein, Albert, 1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c89e4b67-4f3b-5ba7-bbf1-aafe7cf34e4a",
      rank: "normal",
    },
  ],
  P10832: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10832",

        datavalue: {
          value: "E39PBJkhFRgHDtmhvmC6JdfXh3",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5a751d54-44ae-b82e-5416-c290a328bbaa",
      rank: "normal",
    },
  ],
  P213: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P213",

        datavalue: {
          value: "000000012281955X",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$013D02A7-5EDB-4F4F-B73E-CA4DC7BD4C78",
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

                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "https://viaf.org/hosted/xa/2367/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P854"],
        },
      ],
    },
  ],
  P1617: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1617",

        datavalue: {
          value: "4cca21c2-6416-4207-922c-b32de7400474",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0E087876-C35D-4A88-888B-A604E210827F",
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
                    "numeric-id": 18336371,
                    id: "Q18336371",
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
  P27: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 159631,
            id: "Q159631",
          },
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
                time: "+1879-03-14T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1896-01-28T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "1",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "q937$1D589815-A913-4559-94B0-7751C8D4E5FC",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
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
                    "numeric-id": 1420342,
                    id: "Q1420342",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P888: [
              {
                snaktype: "value",
                property: "P888",

                datavalue: {
                  value: "795378",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P888"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 223050,
            id: "Q223050",
          },
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
                time: "+1896-01-28T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1901-02-21T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "2",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$08f8c47d-4967-1f71-d553-c520c754bb67",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 39,
            id: "Q39",
          },
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
                time: "+1901-02-21T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "3",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      id: "Q937$448fdca3-47f1-606c-a42a-f0282cd42a35",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 533534,
            id: "Q533534",
          },
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
                time: "+1911-04-01T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1912-09-30T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "4",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$432f73a4-47a0-0126-1e69-7fa1d3a4a464",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 41304,
            id: "Q41304",
          },
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
                time: "+1918-00-00T00:00:00Z",
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
                time: "+1933-00-00T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "5",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$0f8b506b-4d1d-e6df-9d86-59cd38512251",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value: "http://www.einsteinsommerhaus.de/index.php?id=539",
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
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 183,
            id: "Q183",
          },
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
                time: "+1933-01-30T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1933-03-28T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "6",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$6b477f22-4d7d-2931-c80a-fb99ebda87ca",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://newspapers.ushmm.org/events/albert-einstein-quits-germany-renounces-citizenship",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 30,
            id: "Q30",
          },
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
                time: "+1940-10-01T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",

            datavalue: {
              value: "7",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      id: "Q937$a3f8227b-43bb-9766-6fb0-80aabaaf0eb2",
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",

                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
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
  P11870: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11870",

        datavalue: {
          value: "1404",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C6EA136F-9608-49C2-8119-FCB0EE7AAA1A",
      rank: "normal",
    },
  ],
  P11180: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11180",

        datavalue: {
          value: "10590",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6927D2FF-2E73-4595-8903-03037104504C",
      rank: "normal",
    },
  ],
  P9371: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9371",

        datavalue: {
          value: "166026621",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D1D726DB-7EBF-41CC-8B8A-168DA5C478EE",
      rank: "normal",
    },
  ],
  P10780: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10780",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 150,
                id: "Q150",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$1EB8E30E-E656-4F1B-9ADB-67FF9579A5D6",
      rank: "normal",
    },
  ],
  P3847: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3847",

        datavalue: {
          value: "person:albert_einstein_(1879-1955)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$73BE7AD2-5E1B-4A62-99A3-5D837284A570",
      rank: "normal",
    },
  ],
  P6327: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6327",

        datavalue: {
          value: "1024300",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E6E064A3-BE21-41D6-98D0-31C28BBA605F",
      rank: "normal",
    },
  ],
  P10916: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10916",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$de37924c-469d-5607-2ecf-458f0f97fa3f",
      rank: "normal",
    },
  ],
  P10234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10234",

        datavalue: {
          value: "albert_einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$469367a5-4595-f4d4-1f0d-938d3f7e95b6",
      rank: "normal",
    },
  ],
  P7763: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7763",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 71887839,
            id: "Q71887839",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1001: [
          {
            snaktype: "value",
            property: "P1001",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 29870196,
                id: "Q29870196",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1001"],
      id: "Q937$c8356648-4f54-beb2-d251-72848bfd8a46",
      rank: "normal",
    },
  ],
  P7356: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7356",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7DCBC3E1-2E13-4749-9502-717DAB6C12DF",
      rank: "normal",
    },
  ],
  P2949: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2949",

        datavalue: {
          value: "Einstein-1",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Prof. Dr. Albert Einstein (14 Mar 1879 - 18 Apr 1955)",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$BF398634-1AB2-438B-A66B-A9ED13F5C9B0",
      rank: "normal",
    },
  ],
  P12098: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12098",

        datavalue: {
          value: "855374",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AD4C743A-6BF8-4B60-8EE2-DEA685000158",
      rank: "normal",
    },
  ],
  P1050: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1050",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 132971,
            id: "Q132971",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$BB5824E0-B74F-4F93-A14C-CE802E0F9CB5",
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
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://en.wikipedia.org/w/index.php?title=List_of_people_with_dyslexia&oldid=1189241542",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P6058: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",

        datavalue: {
          value: "personnage/Albert_Einstein/117783",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7d6c691b-4251-b154-c181-aed334d67fdf",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",

        datavalue: {
          value: "images/Albert_Einstein/1005145",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f41b47fb-4ca8-9ad8-ee7b-03cba9337a8c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",

        datavalue: {
          value: "images/Albert_Einstein/1314172",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f1dd3449-495e-4e13-6a74-6c5b6291bb55",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",

        datavalue: {
          value: "sons/Albert_Einstein_février_1950/1102228",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1a9c9931-47c1-b991-64ce-e8cb000d420e",
      rank: "normal",
    },
  ],
  P12086: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12086",

        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B937678D-E069-4973-83A8-DCD557715D05",
      rank: "normal",
    },
  ],
  P11394: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11394",

        datavalue: {
          value: "aor/einstein/index",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7f9996bd-418b-a088-d1ce-cc9b57be0351",
      rank: "normal",
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
            "numeric-id": 8487137,
            id: "Q8487137",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3C788EB3-919A-4F3B-994C-1743A563FECE",
      rank: "normal",
    },
  ],
  P12385: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12385",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$70b72fa7-3aa0-42db-ab27-5721962aa70e",
      rank: "normal",
    },
  ],
  P7726: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7726",

        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$40983654-4ee6-04aa-40e2-1de052ebd20c",
      rank: "normal",
    },
  ],
  P11386: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11386",

        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$750C57A8-C600-4166-8FA3-593DE87E2245",
      rank: "normal",
    },
  ],
  P1889: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1889",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 124606656,
            id: "Q124606656",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$62187850-586F-4C97-84B5-C0FE9765A060",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1889",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 124500735,
            id: "Q124500735",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2684A3AA-2CA9-4BAE-87BB-5AB870B6D8D5",
      rank: "normal",
    },
  ],
  P12458: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12458",

        datavalue: {
          value: "264639",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "Einstein, Albert, 1879-1955.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$E9FD5427-2D42-4CB1-8714-59F404F2275A",
      rank: "normal",
      references: [
        {
          snaks: {
            P3452: [
              {
                snaktype: "value",
                property: "P3452",

                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 124605379,
                    id: "Q124605379",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P3452"],
        },
      ],
    },
  ],
  P12483: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12483",

        datavalue: {
          value: "11237",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3E99B226-D3B6-4819-9D24-62151AB73ACA",
      rank: "normal",
    },
  ],
  P4359: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4359",

        datavalue: {
          value: "alberteinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a3eb602f-4dd7-2e0a-1943-ecbe87f738fc",
      rank: "normal",
    },
  ],
  P12153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12153",

        datavalue: {
          value: "650988260",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5f4db2e5-42cf-e474-c43a-1e2a15ef3990",
      rank: "normal",
    },
  ],
  P496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P496",

        datavalue: {
          value: "0000-0001-9183-9538",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$749b20a0-45f3-363d-fb0b-29356b9b6da8",
      rank: "normal",
    },
  ],
  P2732: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2732",

        datavalue: {
          value: "1638902",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6577f3d6-444d-b869-4cb1-fad569b5bf7a",
      rank: "normal",
    },
  ],
  P185: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P185",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 153238,
            id: "Q153238",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$69D2AFE4-D430-4B01-8138-E38CF21B928D",
      rank: "normal",
    },
  ],
  P12582: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12582",

        datavalue: {
          value: "20110803095744712",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$63E112EF-7936-4F50-8F66-C28DA4CE293C",
      rank: "normal",
    },
  ],
  P12597: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12597",

        datavalue: {
          value: "14634",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F941CD61-9078-47F5-837E-B2CF0236C2F2",
      rank: "normal",
    },
  ],
  P26: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P26",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 76346,
            id: "Q76346",
          },
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
                time: "+1903-01-16T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",

            datavalue: {
              value: {
                time: "+1919-02-14T00:00:00Z",
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
        P2842: [
          {
            snaktype: "value",
            property: "P2842",

            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 70,
                id: "Q70",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P2842"],
      id: "q937$C6422D5D-6B13-4626-AEE3-60A30E0C2C85",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P26",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 68761,
            id: "Q68761",
          },
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
                time: "+1919-01-01T00:00:00Z",
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
                time: "+1936-12-20T00:00:00Z",
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
      "qualifiers-order": ["P580", "P582"],
      id: "q937$881C4FA7-075C-4D48-8182-77D69CA6309C",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P793: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P793",

        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 115784320,
            id: "Q115784320",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$0908221D-AE75-4794-97C9-10CA1E858129",
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",

                datavalue: {
                  value: "118529579",
                  type: "string",
                },
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
                    "numeric-id": 23833686,
                    id: "Q23833686",
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
                    time: "+2024-05-03T00:00:00Z",
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
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P12674: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12674",

        datavalue: {
          value: "Q95055",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$85A23411-4ADE-4334-B962-CAE8AA2D4149",
      rank: "normal",
    },
  ],
  P6214: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6214",

        datavalue: {
          value: "jmb-pers-118058",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$66B7287B-FBB9-4F14-8235-25EEEEEAAA64",
      rank: "normal",
    },
  ],
  P12800: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "en:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3445205E-0782-4CF6-9D75-145D7BE7166C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "it:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9B057674-A2D6-48C0-9781-AB464C9EBD5B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "es:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ADC97A7F-19CA-41BA-AFF1-2BD00C4FFA64",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "eu:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$441AAC37-A617-4DB8-8C9E-EB24D2C53E98",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "ca:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$174A978F-C237-4F40-8DEF-6F98E749B12C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",

        datavalue: {
          value: "fr:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CFE21E78-4B32-4611-AB3E-E91B2F7CA981",
      rank: "normal",
    },
  ],
  P12836: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12836",

        datavalue: {
          value: "27238306",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",

            datavalue: {
              value: "阿尔伯特·爱因斯坦 Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$732C5E98-200F-4944-8978-5110BFBECCFE",
      rank: "normal",
    },
  ],
  P12871: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12871",

        datavalue: {
          value: "0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f18cf655-4231-9e57-7105-91e8d52baad5",
      rank: "normal",
    },
  ],
  P12502: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12502",

        datavalue: {
          value: "14611",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$454CB7FB-E3E0-4FCD-B53A-85212C60722D",
      rank: "normal",
    },
  ],
  P2861: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2861",

        datavalue: {
          value: "1215",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BC2EAF7E-879B-4BCD-A364-1F57BCDD5646",
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
                    "numeric-id": 23667505,
                    id: "Q23667505",
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
  P12975: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12975",

        datavalue: {
          value: "2607",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7349c362-ac2a-46e6-b9ba-8e55dcc520c0",
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",

                datavalue: {
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/Lexikon_der_Mathematik_entry_ID",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P13030: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13030",

        datavalue: {
          value: "person/2493",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2583B1EF-2FC2-4F7A-891D-7B4668E83FB2",
      rank: "normal",
    },
  ],
  P9964: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9964",

        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$838df6a2-433f-61d9-442f-e86e33203112",
      rank: "normal",
    },
  ],
  P13049: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13049",

        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8BE290EF-BA0E-4795-B38A-C1963B157611",
      rank: "normal",
    },
  ],
  P10704: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10704",

        datavalue: {
          value: "1955.0005",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D7F44115-3E07-4991-9481-9DD97634555A",
      rank: "normal",
    },
  ],
  P13146: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13146",

        datavalue: {
          value:
            "Albert Einstein writing on a blackboard in Pasadena (1931).jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$f363a24c-46e1-3712-66b6-e455ff8e1053",
      rank: "normal",
    },
  ],
  P13022: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13022",

        datavalue: {
          value: "19857",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A3B8B824-35FA-401A-A7F4-69B2CD27F15D",
      rank: "normal",
    },
  ],
  P13153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13153",

        datavalue: {
          value: "5698",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$82a82f75-4bec-3e40-3538-424efa2918ab",
      rank: "normal",
    },
  ],
  P13019: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13019",

        datavalue: {
          value: "87761",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D909F5C2-4686-4D3E-BE02-2709AA4C976B",
      rank: "normal",
    },
  ],
  P10608: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10608",

        datavalue: {
          value: "agent/gnd_118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$081B24E1-6DFC-42AD-8991-CE992F602DB9",
      rank: "normal",
    },
  ],
  P13051: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13051",

        datavalue: {
          value: "34419",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$380F1F6D-03C1-4998-8B94-7721C28348F6",
      rank: "normal",
    },
  ],
  P13166: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13166",

        datavalue: {
          value: "144964",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8DA39E16-4D5B-4E6E-BAE2-715ADC9BFF2D",
      rank: "normal",
    },
  ],
  P13183: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13183",

        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C3AA622F-BE01-4CC6-9877-77908BD2E6F9",
      rank: "normal",
    },
  ],
  P10387: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10387",

        datavalue: {
          value: "8278",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2F8EE879-4C25-4F37-91E3-BFE4CD3D8CCC",
      rank: "normal",
    },
  ],
  P11818: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11818",

        datavalue: {
          value: "esjiljveqvqreqe",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$157844C7-8B05-4D2A-946A-A37C30274CAA",
      rank: "normal",
    },
  ],
  P6640: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6640",

        datavalue: {
          value: "92811",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9DC95600-8D86-42D7-83F2-38B2B9595FD5",
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
                    "numeric-id": 465,
                    id: "Q465",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P11797"],
        },
      ],
    },
  ],
};

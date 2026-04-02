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
          datatype: "wikibase-item",
          datavalue: {
            type: "wikibase-entityid",
            value: {
              "entity-type": "item",
              id: "Q19938912",
              "numeric-id": 19938912,
            },
          },

          property: "P248",
          snaktype: "value",
        },
      ],
      P268: [
        {
          datatype: "external-id",
          datavalue: {
            type: "string",
            value: "119016075",
          },

          property: "P268",
          snaktype: "value",
        },
      ],
      P813: [
        {
          datatype: "time",
          datavalue: {
            type: "time",
            value: {
              after: 0,
              before: 0,
              calendarmodel: "http://www.wikidata.org/entity/Q1985727",
              precision: 11,
              time: "+2015-10-10T00:00:00Z",
              timezone: 0,
            },
          },

          property: "P813",
          snaktype: "value",
        },
      ],
      P1476: [
        {
          datatype: "monolingualtext",
          datavalue: {
            type: "monolingualtext",
            value: {
              language: "en",
              text: "Albert Einstein (1879-1955), data.bnf.",
            },
          },

          property: "P1476",
          snaktype: "value",
        },
      ],
    },
    "snaks-order": ["P248", "P268", "P813", "P1476"],
  },
  {
    snaks: {
      P854: [
        {
          datatype: "url",
          datavalue: {
            type: "string",
            value: "https://www.ige.ch/de/ueber-uns/einstein.html",
          },

          property: "P854",
          snaktype: "value",
        },
      ],
    },
    "snaks-order": ["P854"],
  },
  {
    snaks: {
      P854: [
        {
          datatype: "url",
          datavalue: {
            type: "string",
            value:
              "https://www.library.ethz.ch/en/Resources/Digital-library/Einstein-Online/Einstein-s-Studies-at-the-Polytechnic-Institute-in-Zurich-1896-1900",
          },

          property: "P854",
          snaktype: "value",
        },
      ],
    },
    "snaks-order": ["P854"],
  },
];

export const schoolClaims: Claims = {
  P69: [
    {
      // qualifiers,
      // "qualifiers-order": ["P512", "P580", "P582", "P812"],
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q11942",
            "numeric-id": 11942,
          },
        },

        property: "P69",
        snaktype: "value",
      },
      rank: "normal",
      references,
      type: "statement",
    },
    {
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q206702",
            "numeric-id": 206702,
          },
        },

        property: "P69",
        snaktype: "value",
      },

      "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
      rank: "normal",
      type: "statement",
    },
  ],
};

export const fieldClaims: Claims = {
  P101: [
    {
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q10001",
          },
        },

        property: "P101",
        snaktype: "value",
      },

      rank: "normal",
      references: [],
      type: "statement",
    },
    {
      id: "Q937$bdd0de70-44e3-c7c5-8566-0389c0bd14e7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q10002",
          },
        },

        property: "P101",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$b2fb71ab-49ad-df08-7b3b-8bd09a55ae77",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q10004",
          },
        },

        property: "P101",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q10003",
          },
        },

        property: "P101",
        snaktype: "value",
      },
      rank: "normal",
      references: [],
      type: "statement",
    },
  ],
};

export const lifeDateClaims: Claims = {
  P569: [
    {
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
      mainsnak: {
        datatype: "time",
        datavalue: {
          type: "time",
          value: {
            after: 0,
            before: 0,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
            precision: 11,
            time: "+1879-03-14T00:00:00Z",
            timezone: 0,
          },
        },

        property: "P569",
        snaktype: "value",
      },
      rank: "normal",
      references,
      type: "statement",
    },
  ],
  P570: [
    {
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
      mainsnak: {
        datatype: "time",
        datavalue: {
          type: "time",
          value: {
            after: 0,
            before: 0,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
            precision: 11,
            time: "+1955-04-18T00:00:00Z",
            timezone: 0,
          },
        },

        property: "P570", // DATE_OF_DEATH
        snaktype: "value",
      },
      rank: "normal",
      references,
      type: "statement",
    },
  ],
};

export const humanClaims: Claims = {
  P31: [
    {
      id: "Q937$00000000-0000-0000-0000-00000000000B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q5",
          },
        },
        property: "P31",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
};

export const imageClaims: Claims = {
  P18: [
    {
      id: "q937$B471B8E0-E688-4793-8E30-24C8389A8061",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Albert Einstein Head.jpg",
        },

        property: "P18",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1947-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P2096: [
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "es",
                text: "Albert Einstein en 1947",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "en",
                text: "Albert Einstein in 1947.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "nb",
                text: "Albert Einstein i 1947.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "nn",
                text: "Albert Einstein i 1947.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "ar",
                text: "ألبرت أينشتاين في عام 1947",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "tok",
                text: "jan Ape Ansan li lon tenpo sike nanpa 1947.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P2096", "P585"],
      rank: "preferred",
      type: "statement",
    },
    {
      id: "Q937$88B58F47-3339-46E1-A0AD-478709700441",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Einstein 1921 by F Schmutzer - restoration.jpg",
        },

        property: "P18",
        snaktype: "value",
      },
      qualifiers: {
        P276: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1741",
                "numeric-id": 1741,
              },
            },

            property: "P276",
            snaktype: "value",
          },
        ],
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1921-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P2096: [
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "en",
                text: "Albert Einstein during a lecture in Vienna in 1921.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "nb",
                text: "Albert Einstein under en forelesning i Wien i 1921.",
              },
            },

            property: "P2096",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "nn",
                text: "Albert Einstein under ei forelesing i Wien i 1921.",
              },
            },
            property: "P2096",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2096", "P276"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q191168",
                    "numeric-id": 191168,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://cs.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=22994976",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
  ],
};

export const otherClaims: Claims = {
  P101: [
    {
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q18362",
            "numeric-id": 18362,
          },
        },

        property: "P101", // FIELD_OF_WORK
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1280: [
    {
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "7912035",
        },

        property: "P1280",
        snaktype: "value",
      },
      qualifiers: {},
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
};

const lottaClaims = {
  P19: [
    {
      id: "q937$B3E7F30F-C43D-435D-9EA3-266983130FB1",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q3012",
            "numeric-id": 3012,
          },
        },

        property: "P19",
        snaktype: "value",
      },
      qualifiers: {
        P17: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q43287",
                "numeric-id": 43287,
              },
            },

            property: "P17",
            snaktype: "value",
          },
        ],
        P131: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q159631",
                "numeric-id": 159631,
              },
            },

            property: "P131",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P131", "P17"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2014-12-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q17378135",
                    "numeric-id": 17378135,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-09-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P958: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Эйнштейн Альберт",
                },

                property: "P958",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P958", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54917921",
                    "numeric-id": 54917921,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P20: [
    {
      id: "q937$0C41B0BF-DB5D-49B3-A1BC-974CA2545A23",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q138518",
            "numeric-id": 138518,
          },
        },

        property: "P20",
        snaktype: "value",
      },
      qualifiers: {
        P17: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q30",
                "numeric-id": 30,
              },
            },

            property: "P17",
            snaktype: "value",
          },
        ],
        P131: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1408",
                "numeric-id": 1408,
              },
            },

            property: "P131",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P17", "P131"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2014-12-30T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "http://www.einstein-bern.ch",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q17378135",
                    "numeric-id": 17378135,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-09-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P958: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Эйнштейн Альберт",
                },

                property: "P958",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P958", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P22: [
    {
      id: "q937$35853C93-CDA0-4CFD-BB93-5332E87D1BC2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q88665",
            "numeric-id": 88665,
          },
        },

        property: "P22",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1280: [
    {
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "7912035",
        },

        property: "P1280",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P1321: [
    {
      id: "Q937$35460528-4d70-e713-afa7-5494838f3696",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q72",
            "numeric-id": 72,
          },
        },

        property: "P1321",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1412: [
    {
      id: "Q937$fe800b70-414d-3192-59de-94f16ee93233",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1860",
            "numeric-id": 1860,
          },
        },

        property: "P1412",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q19938912",
                    "numeric-id": 19938912,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P268: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "119016075",
                },

                property: "P268",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Albert Einstein (1879-1955), data.bnf.",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$9964d33c-4674-aa6a-66d2-a0c261007e7e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q188",
            "numeric-id": 188,
          },
        },

        property: "P1412",
        snaktype: "value",
      },
      rank: "preferred",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q16744133",
                    "numeric-id": 16744133,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1280: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "7912035",
                },

                property: "P1280",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P1280", "P248"],
        },
      ],
      type: "statement",
    },
  ],
  ...imageClaims,
  P21: [
    {
      id: "Q937$BA154D92-7A34-4E9F-A2CD-F7B750D24EFA",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q6581097",
            "numeric-id": 6581097,
          },
        },

        property: "P21",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q19938912",
                    "numeric-id": 19938912,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P268: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "119016075",
                },

                property: "P268",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-07-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P25: [
    {
      id: "Q937$7c2193c0-4c6d-8884-4bf9-9d86dfdc7db6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q4357787",
            "numeric-id": 4357787,
          },
        },

        property: "P25",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P26: [
    {
      id: "q937$C6422D5D-6B13-4626-AEE3-60A30E0C2C85",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q76346",
            "numeric-id": 76346,
          },
        },

        property: "P26",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1903-01-16T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1919-02-14T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P2842: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q70",
                "numeric-id": 70,
              },
            },

            property: "P2842",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P2842"],
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "q937$881C4FA7-075C-4D48-8182-77D69CA6309C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q68761",
            "numeric-id": 68761,
          },
        },

        property: "P26",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1919-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1936-12-20T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P27: [
    {
      id: "q937$1D589815-A913-4559-94B0-7751C8D4E5FC",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q159631",
            "numeric-id": 159631,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1879-03-14T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1896-01-28T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "1",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1420342",
                    "numeric-id": 1420342,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P888: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "795378",
                },

                property: "P888",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P888"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$08f8c47d-4967-1f71-d553-c520c754bb67",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q223050",
            "numeric-id": 223050,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1896-01-28T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1901-02-21T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "2",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$448fdca3-47f1-606c-a42a-f0282cd42a35",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q39",
            "numeric-id": 39,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1901-02-21T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "3",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$432f73a4-47a0-0126-1e69-7fa1d3a4a464",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q533534",
            "numeric-id": 533534,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1911-04-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1912-09-30T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "4",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$0f8b506b-4d1d-e6df-9d86-59cd38512251",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q41304",
            "numeric-id": 41304,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1918-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "5",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "http://www.einsteinsommerhaus.de/index.php?id=539",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$6b477f22-4d7d-2931-c80a-fb99ebda87ca",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q183",
            "numeric-id": 183,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1933-01-30T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1933-03-28T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "6",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://newspapers.ushmm.org/events/albert-einstein-quits-germany-renounces-citizenship",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$a3f8227b-43bb-9766-6fb0-80aabaaf0eb2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q30",
            "numeric-id": 30,
          },
        },

        property: "P27",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1940-10-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "7",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
  ],
  P31: [
    {
      id: "Q937$ED5C61AE-EA02-4E78-932B-FF21A34714EB",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q5",
            "numeric-id": 5,
          },
        },

        property: "P31",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q19938912",
                    "numeric-id": 19938912,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P268: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "119016075",
                },

                property: "P268",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P39: [
    {
      id: "Q937$ba274185-377e-4c3d-8bb3-a2d513791797",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q121594",
            "numeric-id": 121594,
          },
        },

        property: "P39",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1911-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q181163",
                    "numeric-id": 181163,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P40: [
    {
      id: "q937$E06622DC-565F-4DCA-8AAF-FD27B149272A",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q123371",
            "numeric-id": 123371,
          },
        },

        property: "P40",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "q937$23EEE6B9-9930-44E1-99DF-98FC953F2A9F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q118253",
            "numeric-id": 118253,
          },
        },

        property: "P40",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "q937$6F89DFD4-2E96-457E-BF94-7BC98185C8DD",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q468357",
            "numeric-id": 468357,
          },
        },

        property: "P40",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P69: [
    {
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q11942",
            "numeric-id": 11942,
          },
        },

        property: "P69",
        snaktype: "value",
      },
      qualifiers: {
        P512: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q787674",
                "numeric-id": 787674,
              },
            },

            property: "P512",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1896-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1900-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P812: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q853077",
                "numeric-id": 853077,
              },
            },

            property: "P812",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P512", "P580", "P582", "P812"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.library.ethz.ch/en/Resources/Digital-library/Einstein-Online/Einstein-s-Studies-at-the-Polytechnic-Institute-in-Zurich-1896-1900",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$bdd0de70-44e3-c7c5-8566-0389c0bd14e7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1876751",
            "numeric-id": 1876751,
          },
        },

        property: "P69",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1888-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1894-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$b2fb71ab-49ad-df08-7b3b-8bd09a55ae77",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q435651",
            "numeric-id": 435651,
          },
        },

        property: "P69",
        snaktype: "value",
      },
      qualifiers: {
        P512: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q694222",
                "numeric-id": 694222,
              },
            },

            property: "P512",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1895-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1896-09-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1896-10-03T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P512", "P585", "P582"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q206702",
            "numeric-id": 206702,
          },
        },

        property: "P69",
        snaktype: "value",
      },
      qualifiers: {
        P184: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q4175282",
                "numeric-id": 4175282,
              },
            },

            property: "P184",
            snaktype: "value",
          },
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q97154",
                "numeric-id": 97154,
              },
            },

            property: "P184",
            snaktype: "value",
          },
        ],
        P512: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q849697",
                "numeric-id": 849697,
              },
            },

            property: "P512",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1905-04-30T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P812: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q413",
                "numeric-id": 413,
              },
            },

            property: "P812",
            snaktype: "value",
          },
        ],
        P1026: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q51754009",
                "numeric-id": 51754009,
              },
            },

            property: "P1026",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q51754009",
                    "numeric-id": 51754009,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P101: [
    {
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q18362",
            "numeric-id": 18362,
          },
        },

        property: "P101",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P102: [
    {
      id: "Q937$ca224046-4efe-9975-ca45-59c9618cbc14",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q328195",
            "numeric-id": 328195,
          },
        },

        property: "P102",
        snaktype: "value",
      },
      qualifiers: {
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P582"],
      rank: "normal",
      type: "statement",
    },
  ],
  P103: [
    {
      id: "q937$AEC9F74F-E740-4E5B-AD61-5E6AE0388C7C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q188",
            "numeric-id": 188,
          },
        },

        property: "P103",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P106: [
    {
      id: "q937$6B608722-6D2C-49C5-BF35-52B04756A748",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q19350898",
            "numeric-id": 19350898,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      qualifiers: {
        P101: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q43514",
                "numeric-id": 43514,
              },
            },

            property: "P101",
            snaktype: "value",
          },
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1144457",
                "numeric-id": 1144457,
              },
            },

            property: "P101",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P101"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$A7B3AD70-40BE-47D2-B39D-1C8A00014F4C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q16389557",
            "numeric-id": 16389557,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48952",
                    "numeric-id": 48952,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$FB7CA2E9-67D5-474B-BF78-FC78DDD78C88",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q205375",
            "numeric-id": 205375,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48952",
                    "numeric-id": 48952,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$FA010268-D5E2-486D-AEAC-2D1542189E95",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q3745071",
            "numeric-id": 3745071,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48952",
                    "numeric-id": 48952,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$6B2F6BAF-1162-462C-BC46-2EE85484A6DF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1231865",
            "numeric-id": 1231865,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$64608042-4792-8de0-2fe1-a3d45d17b6fc",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1622272",
            "numeric-id": 1622272,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$CD15AE8D-589B-4A06-B136-D181FE5FCF08",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q169470",
            "numeric-id": 169470,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "preferred",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.nytimes.com/1993/11/25/obituaries/zhou-peiyuan-is-dead-educator-scientist-91.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Zhou Peiyuan Is Dead; Educator-Scientist, 91",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.nytimes.com/1995/10/23/theater/theater-review-a-fantasy-meeting-of-minds.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "THEATER REVIEW;A Fantasy Meeting of Minds",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q107456632",
                    "numeric-id": 107456632,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-04-01T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P6844: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "16734",
                },

                property: "P6844",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$62F61C96-F754-4389-A0BC-8BBC37C4242A",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q4964182",
            "numeric-id": 4964182,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/13528165.2012.728445",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "The Speed of Broken Light: A meditation on duration and performance by Ted Hiebert",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/09515081003690418",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Neutral monism reconsidered by Erik C. Banks",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$57118ACC-3565-418C-A41E-8E040C128A78",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q36180",
            "numeric-id": 36180,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.smh.com.au/news/book-reviews/einstein-his-life-and-universe/2007/06/22/1182019350450.html?page=fullpage",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Einstein: his life and universe",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://bleacherreport.com/articles/2172365-modern-day-einstein-smashes-flaming-golf-ball-sets-pants-on-fire",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Modern-Day Einstein Smashes Flaming Golf Ball, Sets Pants on Fire",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$DFEF5489-5E9C-43BD-9A82-C63F9B74C7B2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q901",
            "numeric-id": 901,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q4834894",
                    "numeric-id": 4834894,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P827: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "p00kwcp5",
                },

                property: "P827",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Special Relativity and how it all began",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P827", "P1476"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$F1AF73AB-29CA-43CD-BB66-DFDFEB455A32",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q170790",
            "numeric-id": 170790,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.bbc.co.uk/programmes/b00srz5b/episodes/player",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "A brief history of mathematics Episodes",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.bbc.co.uk/norfolk/kids/science/az_alberteinstein.shtml",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "A-Z for Norfolk Science, A:Albert Einstein",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$623c4508-4c8d-6ae1-530f-9591770822de",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2896489",
            "numeric-id": 2896489,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1901-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1906-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$075AFDBC-7E85-428C-A407-4B45211B3C28",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q121594",
            "numeric-id": 121594,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      qualifiers: {
        P1932: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Universitäts-Professor",
            },

            property: "P1932",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q104698881",
                    "numeric-id": 104698881,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-01-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1932: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Universitäts-Professor",
                },

                property: "P1932",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813", "P1932"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$5D381634-7466-4919-A345-CFBA7A2A5F5B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q16003550",
            "numeric-id": 16003550,
          },
        },

        property: "P106",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P108: [
    {
      id: "Q937$681079d2-4cea-399f-f9aa-132bf91bfe53",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q685539",
            "numeric-id": 685539,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1902-06-16T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "de",
                    text: "Sieben Jahre «Schusterhandwerk»",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$01cdae6a-47ca-930b-e6ed-63cca4af0b22",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q31519",
            "numeric-id": 31519,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$43226229-45b1-8629-863d-327885eaf9ef",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q206702",
            "numeric-id": 206702,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q121594",
                "numeric-id": 121594,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1911-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Sieben Jahre «Schusterhandwerk»",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$d2b77642-4d2f-9c44-de71-7557d470d11e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1729754",
            "numeric-id": 1729754,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q121594",
                "numeric-id": 121594,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1911-01-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$204dda8b-4ec7-8928-ca7c-901dbb243068",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q11942",
            "numeric-id": 11942,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q121594",
                "numeric-id": 121594,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1914-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$35baeeb5-4bc3-4e0e-5bed-fbdafbb89183",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q708038",
            "numeric-id": 708038,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1162163",
                "numeric-id": 1162163,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1917-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$79c11d97-4915-3e26-830c-4c99be4e4b7f",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q21578",
            "numeric-id": 21578,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1955-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "de",
                    text: "Albert Einstein und das IGE",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$83E63163-A6DE-4579-BB7F-B80E7DC196B8",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q156598",
            "numeric-id": 156598,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$33ce60f7-4629-0ab4-38d9-701633f118da",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q659080",
            "numeric-id": 659080,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q37226",
                "numeric-id": 37226,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1908-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$48e2be89-4926-b28f-cbfa-f7a70c2409cd",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q819187",
            "numeric-id": 819187,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q30461",
                "numeric-id": 30461,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1916-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1918-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$d622ea39-43bd-b60c-0d60-23069d205a79",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q152087",
            "numeric-id": 152087,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q121594",
                "numeric-id": 121594,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1914-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$dd224d46-4f2e-76a3-1646-d0786a513ff3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q329464",
            "numeric-id": 329464,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1914-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2cb650b8-497c-aebc-c6cf-8703dd24b3f2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q635642",
            "numeric-id": 635642,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$12315011-4D00-4857-933A-9BC6DF949F86",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q156598",
            "numeric-id": 156598,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      qualifiers: {
        P39: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q875424",
                "numeric-id": 875424,
              },
            },

            property: "P39",
            snaktype: "value",
          },
        ],
        P361: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q61666665",
                "numeric-id": 61666665,
              },
            },

            property: "P361",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1920-09-21T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1946-07-13T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39", "P361"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$d0dc2648-441c-24b2-6f89-3eccd9a85643",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q70",
            "numeric-id": 70,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$FE32FC62-32EB-49E2-ABB2-37E0EC99C054",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q168756",
            "numeric-id": 168756,
          },
        },

        property: "P108",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q11920",
                    "numeric-id": 11920,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-07-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P3452: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q6375970",
                    "numeric-id": 6375970,
                  },
                },

                property: "P3452",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P813", "P3452", "P143"],
        },
      ],
      type: "statement",
    },
  ],
  P109: [
    {
      id: "q937$5FA9ECBA-7403-4292-93C7-60119B5E029E",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Albert Einstein signature 1934.svg",
        },

        property: "P109",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P119: [
    {
      id: "Q937$0fba0628-4ed9-f8bf-9088-1e2c53edd4fd",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q902624",
            "numeric-id": 902624,
          },
        },

        property: "P119",
        snaktype: "value",
      },
      qualifiers: {
        P518: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q2464312",
                "numeric-id": 2464312,
              },
            },

            property: "P518",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P518"],
      rank: "normal",
      type: "statement",
    },
  ],
  P140: [
    {
      id: "Q937$a7471c5f-03f0-4342-87a4-4c532f8db1ce",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q7066",
            "numeric-id": 7066,
          },
        },

        property: "P140",
        snaktype: "value",
      },
      qualifiers: {
        P805: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q7311409",
                "numeric-id": 7311409,
              },
            },

            property: "P805",
            snaktype: "value",
          },
        ],
        P1310: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q937",
                "numeric-id": 937,
              },
            },

            property: "P1310",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P805", "P1310"],
      rank: "deprecated",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-12-20T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$0624c045-4731-1792-d116-ade653e359e3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q288928",
            "numeric-id": 288928,
          },
        },

        property: "P140",
        snaktype: "value",
      },
      qualifiers: {
        P3680: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q937",
                "numeric-id": 937,
              },
            },

            property: "P3680",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P3680"],
      rank: "normal",
      references: [
        {
          snaks: {
            P50: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q937",
                    "numeric-id": 937,
                  },
                },

                property: "P50",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://farm3.static.flickr.com/2687/4496554935_0b573db853_o.jpg",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Letter to M. Berkowitz, 25 October 1950",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476", "P50"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$3dfedb25-4d1a-954c-3b1e-e2ce2f5c08a3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q9268",
            "numeric-id": 9268,
          },
        },

        property: "P140",
        snaktype: "value",
      },
      qualifiers: {
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1891-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P50: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q937",
                    "numeric-id": 937,
                  },
                },

                property: "P50",
                snaktype: "value",
              },
            ],
            P577: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 9,
                    time: "+1949-00-00T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P577",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-03-07T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://archive.org/details/EinsteinAutobiography/page/n1",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Albert Einstein: Notes for an Autobiography",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P50", "P1476", "P577", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$41e48a33-49ad-5d99-b8ac-eb093e1778b0",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q728455",
            "numeric-id": 728455,
          },
        },

        property: "P140",
        snaktype: "value",
      },
      rank: "preferred",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://he.wikipedia.org/wiki/%D7%90%D7%9C%D7%91%D7%A8%D7%98_%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Brian, Dennis (1996), Einstein: A Life, New York: John Wiley & Sons, p. 127, ISBN 0-471-11459-6",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
  ],
  P166: [
    {
      id: "q937$806C056A-5BBC-4BF5-A8E3-8100E68321AE",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q808424",
            "numeric-id": 808424,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1920-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$67E83EE7-ED3E-44D3-9989-9792CEC63F63",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1921-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P2121: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+121573",
                unit: "http://www.wikidata.org/entity/Q122922",
              },
            },

            property: "P2121",
            snaktype: "value",
          },
        ],
        P6208: [
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "en",
                text: "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect",
              },
            },

            property: "P6208",
            snaktype: "value",
          },
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "sv",
                text: "för hans förtjänster om den teoretiska fysiken, särskilt hans upptäckt av lagen för den fotoelektriska effekten",
              },
            },

            property: "P6208",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2121", "P6208"],
      rank: "normal",
      references: [
        {
          snaks: {
            P123: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1781959",
                    "numeric-id": 1781959,
                  },
                },

                property: "P123",
                snaktype: "value",
              },
            ],
            P407: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1860",
                    "numeric-id": 1860,
                  },
                },

                property: "P407",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-08-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.nobelprize.org/nobel_prizes/physics/laureates/1921/index.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "The Nobel Prize in Physics 1921",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P123", "P407", "P1476"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.nobelprize.org/nobel_prizes/about/amounts/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "The Nobel Prize amounts",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "q937$734E469F-1D50-4391-A16E-0E9C2F478D6B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q753072",
            "numeric-id": 753072,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1926-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$F95226FF-1F1D-4A08-B320-9D03DBD6293B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1711648",
            "numeric-id": 1711648,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1931-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$000BA6F7-4B85-47CA-ACF6-89590095E5E4",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1419938",
            "numeric-id": 1419938,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1921-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$70EC89C2-21BF-486F-A1A1-0EFC53D8F358",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q317038",
            "numeric-id": 317038,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1929-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$4325B997-108F-4715-931E-005AC54CEAFB",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q3141777",
            "numeric-id": 3141777,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1935-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "q937$FDB4C682-E267-4D26-8668-72EC724BCAB4",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q28003",
            "numeric-id": 28003,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1925-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P6208: [
          {
            datatype: "monolingualtext",
            datavalue: {
              type: "monolingualtext",
              value: {
                language: "en",
                text: "For his theory of relativity and his contributions to the quantum theory.",
              },
            },

            property: "P6208",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585", "P6208"],
      rank: "normal",
      references: [
        {
          snaks: {
            P123: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q123885",
                    "numeric-id": 123885,
                  },
                },

                property: "P123",
                snaktype: "value",
              },
            ],
            P407: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1860",
                    "numeric-id": 1860,
                  },
                },

                property: "P407",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-12-30T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://docs.google.com/spreadsheets/d/1dsunM9ukGLgaW3HdG9cvJ_QKd7pWjGI0qi_fCb1ROD4/pubhtml?gid=1336391689&single=true",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Award winners : Copley Medal",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476", "P123", "P407", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$73C644B6-22F2-4AE9-9C42-0C3AAA545004",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q15056034",
            "numeric-id": 15056034,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$F4BB8E43-FF0A-4FD9-8F49-D64E385A0C1C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1522873",
            "numeric-id": 1522873,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1934-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$e9700a38-4bc4-0be6-f494-09494f09bb04",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q25287226",
            "numeric-id": 25287226,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$24c2aaa7-4417-8642-9e39-61d25e275787",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q28861731",
            "numeric-id": 28861731,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1949-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-03-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www3.huji.ac.il/htbin/hon_doc/doc_search.pl?search",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "The Hebrew University awards honorary degrees",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$d2dcd59a-4529-1c8c-85b4-8b2ce182f8b2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q42309226",
            "numeric-id": 42309226,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2323D34A-12CA-41D9-8B48-A6AF21145A5B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q50621171",
            "numeric-id": 50621171,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1923-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$7D740CE6-4FEC-4C62-9672-F5484E7426B7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q14906020",
            "numeric-id": 14906020,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1921-05-05T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q111806251",
                    "numeric-id": 111806251,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P304: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "110",
                },

                property: "P304",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P304"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$2870b88e-4ae5-3ec2-52d0-4d20cc7f10c8",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q63315195",
            "numeric-id": 63315195,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1942-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$A307E274-1A71-4231-A723-127A27967F1B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q121359767",
            "numeric-id": 121359767,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+2009-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.carnegie.org/awards/great-immigrants/2009-great-immigrants/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$8951b01c-43ef-2921-df1a-35540e924f43",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q156478",
            "numeric-id": 156478,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q58251",
                    "numeric-id": 58251,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://az.wikipedia.org/?oldid=7441143",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$1D4DBBB0-E023-4F6C-9B88-4C38DB0CC289",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q125121451",
            "numeric-id": 125121451,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1924-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.royalsociety.org.nz/who-we-are/our-people/our-fellows/all-honorary-fellows/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$65aa4447-439c-0e46-3c61-717c07fa290e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q126418747",
            "numeric-id": 126418747,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1928-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q105750302",
                    "numeric-id": 105750302,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P304: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "90-95",
                },

                property: "P304",
                snaktype: "value",
              },
            ],
            P433: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "1",
                },

                property: "P433",
                snaktype: "value",
              },
            ],
            P478: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "9",
                },

                property: "P478",
                snaktype: "value",
              },
            ],
            P577: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 9,
                    time: "+1934-00-00T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P577",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://gallica.bnf.fr/ark:/12148/bpt6k93885z/f95.item",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "fr",
                    text: "Liste des docteurs honoris causa de l'Université de Paris de 1918 à 1933 inclus",
                  },
                },

                property: "P1476",
                snaktype: "value",
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
      type: "statement",
    },
    {
      id: "Q937$69c0e08d-46f8-6373-d58d-9b96315999f7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q14705795",
            "numeric-id": 14705795,
          },
        },

        property: "P166",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+2008-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://njhalloffame.org/hall-of-famers/2008-inductees/albert-einstein/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
  ],
  P172: [
    {
      id: "Q937$4AC1D270-BB85-42E6-9F2C-AF1A0A283399",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q7325",
            "numeric-id": 7325,
          },
        },

        property: "P172",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-12-20T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P184: [
    {
      id: "Q937$99734d53-47c3-cc4b-580e-784486517d39",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q4175282",
            "numeric-id": 4175282,
          },
        },

        property: "P184",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1905-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P3831: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q26236695",
                "numeric-id": 26236695,
              },
            },

            property: "P3831",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P3831", "P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q829984",
                    "numeric-id": 829984,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P549: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "53269",
                },

                property: "P549",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-12-15T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "de",
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$e3d28962-43ab-c2d8-e4d6-8284b893dff9",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q97154",
            "numeric-id": 97154,
          },
        },

        property: "P184",
        snaktype: "value",
      },
      qualifiers: {
        P3831: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q26236691",
                "numeric-id": 26236691,
              },
            },

            property: "P3831",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P3831"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q829984",
                    "numeric-id": 829984,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P549: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "53269",
                },

                property: "P549",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-12-15T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "de",
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$61A00029-3304-45D0-AF63-38B5696AAAF5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q116635",
            "numeric-id": 116635,
          },
        },

        property: "P184",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P3452: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q116635",
                    "numeric-id": 116635,
                  },
                },

                property: "P3452",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P3452"],
        },
      ],
      type: "statement",
    },
  ],
  P185: [
    {
      id: "Q937$69D2AFE4-D430-4B01-8138-E38CF21B928D",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q153238",
            "numeric-id": 153238,
          },
        },

        property: "P185",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P213: [
    {
      id: "Q937$013D02A7-5EDB-4F4F-B73E-CA4DC7BD4C78",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000000012281955X",
        },

        property: "P213",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://viaf.org/hosted/xa/2367/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P854"],
        },
      ],
      type: "statement",
    },
  ],
  P214: [
    {
      id: "q937$B7F821E9-5E5C-4D51-A153-4CA8A47B6941",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "75121530",
        },

        property: "P214",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48183",
                    "numeric-id": 48183,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q8447",
                    "numeric-id": 8447,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P227: [
    {
      id: "Q937$5780ABCF-2F30-4613-B043-1FB2C8482C7D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "118529579",
        },

        property: "P227",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q15156406",
                    "numeric-id": 15156406,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P244: [
    {
      id: "q937$9BA2796D-01EE-4037-9910-029BA945CABA",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "n79022889",
        },

        property: "P244",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48183",
                    "numeric-id": 48183,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P245: [
    {
      id: "Q937$F735494D-7107-40C3-B9DE-75F9595E70BB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "500240971",
        },

        property: "P245",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P268: [
    {
      id: "q937$D0E13400-F973-43AA-BD39-466EC0C257FF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "119016075",
        },

        property: "P268",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q8447",
                    "numeric-id": 8447,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P269: [
    {
      id: "q937$14E9B302-D7A0-488D-BB48-DE1A285827A6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "026849186",
        },

        property: "P269",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q8447",
                    "numeric-id": 8447,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P270: [
    {
      id: "Q937$EC244A6E-7F96-46D3-A0A1-0010EB63DDF7",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "n2004370668",
        },

        property: "P270",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q30239",
                    "numeric-id": 30239,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P271: [
    {
      id: "Q937$D1CF45C9-1A07-4B0A-B76D-D730D5CBD3D6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "DA00708434",
        },

        property: "P271",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q115920372",
                    "numeric-id": 115920372,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2023-02-17T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P11496: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1140563741718602752",
                },

                property: "P11496",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P11496", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P345: [
    {
      id: "Q937$aca1fb0d-4a60-93ee-95d9-f59f0f376b19",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "nm0251868",
        },

        property: "P345",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P349: [
    {
      id: "q937$F926A784-7C6D-48EB-A49B-E096AEC46FCD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "00438728",
        },

        property: "P349",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48183",
                    "numeric-id": 48183,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P373: [
    {
      id: "q937$2F332903-133D-4CA0-AD24-8B4292C2BF89",
      mainsnak: {
        datatype: "string",
        datavalue: {
          type: "string",
          value: "Albert Einstein",
        },

        property: "P373",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P396: [
    {
      id: "Q937$A6CF3E97-B780-449A-92D9-7550A687AFD4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "CFIV035853",
        },

        property: "P396",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P409: [
    {
      id: "Q937$A42E665D-E820-42D7-BEF1-7E06A8F4F7AA",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "36582360",
        },

        property: "P409",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P434: [
    {
      id: "q937$E0DFBCB9-E69E-4469-A420-60B33E530DC1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "c98c325e-7277-46e8-8b44-e3517f3e041a",
        },

        property: "P434",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q14005",
                    "numeric-id": 14005,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P443: [
    {
      id: "Q937$0aeda9f5-4815-84b9-3711-37cbc130e726",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "De-Albert Einstein-Pronuciation.ogg",
        },

        property: "P443",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$a7c5b8f0-a9e4-410b-adb4-d901b227a203",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "LL-Q34239 (kok)-Fredericknoronha-Albert Einstein.wav",
        },

        property: "P443",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q34239",
                "numeric-id": 34239,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q60024037",
                    "numeric-id": 60024037,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P10369: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "Q700784",
                },

                property: "P10369",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P10369"],
        },
      ],
      type: "statement",
    },
  ],
  P463: [
    {
      id: "q937$642B1EBB-AED3-455E-9A3C-B4D8B2664031",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q123885",
            "numeric-id": 123885,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$7451E5A0-6E6E-4A82-848B-CE55019A96CD",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q329464",
            "numeric-id": 329464,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$882DAFA0-5B20-4620-A4DF-B51A0C556ADF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q543804",
            "numeric-id": 543804,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$552717B0-4610-4F96-A70F-56354F68ED41",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q338432",
            "numeric-id": 338432,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q11920",
                    "numeric-id": 11920,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$78190F69-14B5-4EF5-86AA-3EE6990850F0",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q466089",
            "numeric-id": 466089,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$023CD9AD-8957-4662-A45F-40D69693D7BA",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q684415",
            "numeric-id": 684415,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$D3C196C2-1C80-4FDB-BBC1-E3105C9C811F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q414188",
            "numeric-id": 414188,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$0C556605-6B7E-4184-83EC-E95289F6D62A",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2370801",
            "numeric-id": 2370801,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$1E3374B7-2511-4A2B-8791-8088B171C0DC",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q188771",
            "numeric-id": 188771,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$613DBC15-8BF9-4C25-B5E1-B12F510C4BF3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q191583",
            "numeric-id": 191583,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$08567CBB-2DE3-4CCD-B10A-72E04E7AA468",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q253439",
            "numeric-id": 253439,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$74DCC2BF-C874-4BE6-8A6E-5A1A65279ED6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q463303",
            "numeric-id": 463303,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$F1E10DFB-1C54-474A-BB4C-FEC6FD2DFABF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q4397938",
            "numeric-id": 4397938,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1922-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$D0DAD5E7-6E01-4F03-928B-8684D26364DA",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2095524",
            "numeric-id": 2095524,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$57ABD98B-0DD1-40D6-9B21-A41B86AC9ABB",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q3603946",
            "numeric-id": 3603946,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2a97ea20-4b54-a2f7-b2aa-682efb715bc2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2497232",
            "numeric-id": 2497232,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.dichistoriasaude.coc.fiocruz.br/iah/pt/verbetes/acadbrci.htm",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "http://www.abc.org.br/membro/albert-einstein/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$d4cf1f6d-4a4b-992e-4d16-e7db8976dc98",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q270794",
            "numeric-id": 270794,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1922-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P2868: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q61664704",
                "numeric-id": 61664704,
              },
            },

            property: "P2868",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$b304cb4c-4594-d3dd-6d10-22602a5238c5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q270794",
            "numeric-id": 270794,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1942-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P2868: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q63315195",
                "numeric-id": 63315195,
              },
            },

            property: "P2868",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$fb68e164-4300-788d-b577-2b38bc419789",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2945826",
            "numeric-id": 2945826,
          },
        },

        property: "P463",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q8447",
                    "numeric-id": 8447,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://fr.wikipedia.org/w/index.php?title=Centre_international_de_synth%C3%A8se&oldid=159820946",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P485: [
    {
      id: "q937$bfa38bb1-4a58-28da-4662-7123ebe46b5e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q675617",
            "numeric-id": 675617,
          },
        },

        property: "P485",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$02527dba-46c3-5a8e-076f-102b61f64b7c",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q22095877",
            "numeric-id": 22095877,
          },
        },

        property: "P485",
        snaktype: "value",
      },
      qualifiers: {
        P973: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value: "http://www.albert-einstein.org/.index3.html",
            },

            property: "P973",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P973"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2891A7AE-59CC-4516-B92B-8D2BB8CFA6F3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q14708020",
            "numeric-id": 14708020,
          },
        },

        property: "P485",
        snaktype: "value",
      },
      qualifiers: {
        P217: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "3048-z",
            },

            property: "P217",
            snaktype: "value",
          },
        ],
        P973: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value: "https://finding-aids.lib.unc.edu/03048/",
            },

            property: "P973",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein Letter, undated.",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P973", "P217", "P1810"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://finding-aids.lib.unc.edu/03048/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$F3A2D721-A412-416F-8307-9B04F5D0EFCA",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q39934978",
            "numeric-id": 39934978,
          },
        },

        property: "P485",
        snaktype: "value",
      },
      qualifiers: {
        P217: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Sammelbestand_Einstein_Albert",
            },

            property: "P217",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P217"],
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2025-01-15T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://vls.hsa.ethz.ch/client/link/de/archiv/einheit/b9b4178f95254672b981174aaee8f06b",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P496: [
    {
      id: "Q937$749b20a0-45f3-363d-fb0b-29356b9b6da8",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0000-0001-9183-9538",
        },

        property: "P496",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P509: [
    {
      id: "Q937$9550FD9C-92DF-4276-9194-471D4CF613A5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q2256736",
            "numeric-id": 2256736,
          },
        },

        property: "P509",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P512: [
    {
      id: "Q937$e400e96b-4501-7967-8e75-bf98d25b8daf",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q19693354",
            "numeric-id": 19693354,
          },
        },

        property: "P512",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1906-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P535: [
    {
      id: "Q937$21ffa00d-486e-5d1a-43bf-afcb604a6057",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "314",
        },

        property: "P535",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P549: [
    {
      id: "q937$74D92D81-EE56-4941-AA45-C85494191269",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "53269",
        },

        property: "P549",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q11920",
                    "numeric-id": 11920,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P551: [
    {
      id: "Q937$2bcc3000-4b64-0562-be8c-ad8225e41752",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1309294",
            "numeric-id": 1309294,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      qualifiers: {
        P131: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q625403",
                "numeric-id": 625403,
              },
            },

            property: "P131",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1929-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1932-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P131"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q8447",
                    "numeric-id": 8447,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$576078b8-437c-7b9e-ad1b-4ac16439d20a",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q390003",
            "numeric-id": 390003,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      qualifiers: {
        P131: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q70",
                "numeric-id": 70,
              },
            },

            property: "P131",
            snaktype: "value",
          },
        ],
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1903-10-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1905-05-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
        P669: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q680298",
                "numeric-id": 680298,
              },
            },

            property: "P669",
            snaktype: "value",
          },
        ],
        P670: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "49",
            },

            property: "P670",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P131", "P580", "P582", "P669", "P670"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$3B8DA1A3-81A3-4A42-AA52-B83DE77FF254",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1726",
            "numeric-id": 1726,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$68B67BB3-2268-4CE5-B968-0F2AAC9272A7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q138518",
            "numeric-id": 138518,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$891EA76A-93E7-49FC-A9D1-2784E999DA72",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q942842",
            "numeric-id": 942842,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1911-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q104698881",
                    "numeric-id": 104698881,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-01-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$61f1859b-4722-e623-53dd-8ad8b58836d8",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q9009",
            "numeric-id": 9009,
          },
        },

        property: "P551",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1901-09-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1902-01-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      type: "statement",
    },
  ],
  P569: [
    {
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
      mainsnak: {
        datatype: "time",
        datavalue: {
          type: "time",
          value: {
            after: 0,
            before: 0,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
            precision: 11,
            time: "+1879-03-14T00:00:00Z",
            timezone: 0,
          },
        },

        property: "P569",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2014-04-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q19938912",
                    "numeric-id": 19938912,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P268: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "119016075",
                },

                property: "P268",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q547473",
                    "numeric-id": 547473,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-08-22T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q29861311",
                    "numeric-id": 29861311,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P3430: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "w69k499r",
                },

                property: "P3430",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1165538",
                    "numeric-id": 1165538,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P3222: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "albert-einstein",
                },

                property: "P3222",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q63056",
                    "numeric-id": 63056,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P535: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "314",
                },

                property: "P535",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2629164",
                    "numeric-id": 2629164,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1233: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "99141",
                },

                property: "P1233",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q15706812",
                    "numeric-id": 15706812,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P2639: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "4533e35f16964c939b82033bb6259e32",
                },

                property: "P2639",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2728291",
                    "numeric-id": 2728291,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P6234: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "albert-einstein",
                },

                property: "P6234",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q6023365",
                    "numeric-id": 6023365,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P863: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "thinker/2958",
                },

                property: "P863",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P863", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q21491701",
                    "numeric-id": 21491701,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P2454: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "PE00000116",
                },

                property: "P2454",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q237227",
                    "numeric-id": 237227,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P5019: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "einstein-albert",
                },

                property: "P5019",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q746368",
                    "numeric-id": 746368,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P4342: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "Albert_Einstein",
                },

                property: "P4342",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2664168",
                    "numeric-id": 2664168,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1296: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "0023623",
                },

                property: "P1296",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q98769076",
                    "numeric-id": 98769076,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8094: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "einsteina",
                },

                property: "P8094",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q83365652",
                    "numeric-id": 83365652,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P7929: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "p=albert;n=einstein",
                },

                property: "P7929",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1307356",
                    "numeric-id": 1307356,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8854: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "18467",
                },

                property: "P8854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q3407324",
                    "numeric-id": 3407324,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8349: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "56686",
                },

                property: "P8349",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q107456632",
                    "numeric-id": 107456632,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-04-01T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P6844: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "16734",
                },

                property: "P6844",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q55740543",
                    "numeric-id": 55740543,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "fr",
                    text: "Albert Einstein",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
            P2383: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "117243",
                },

                property: "P2383",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q105958830",
                    "numeric-id": 105958830,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P5375: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "5923",
                },

                property: "P5375",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P5375", "P1810", "P248"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q107343683",
                    "numeric-id": 107343683,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1284: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "00000000666",
                },

                property: "P1284",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
        },
      ],
      type: "statement",
    },
  ],
  P570: [
    {
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
      mainsnak: {
        datatype: "time",
        datavalue: {
          type: "time",
          value: {
            after: 0,
            before: 0,
            calendarmodel: "http://www.wikidata.org/entity/Q1985727",
            precision: 11,
            time: "+1955-04-18T00:00:00Z",
            timezone: 0,
          },
        },

        property: "P570",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2014-04-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q17378135",
                    "numeric-id": 17378135,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-09-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P958: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Эйнштейн Альберт",
                },

                property: "P958",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P958", "P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q19938912",
                    "numeric-id": 19938912,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P268: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "119016075",
                },

                property: "P268",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q547473",
                    "numeric-id": 547473,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-08-22T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q29861311",
                    "numeric-id": 29861311,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P3430: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "w69k499r",
                },

                property: "P3430",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1165538",
                    "numeric-id": 1165538,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P3222: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "albert-einstein",
                },

                property: "P3222",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q63056",
                    "numeric-id": 63056,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P535: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "314",
                },

                property: "P535",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2629164",
                    "numeric-id": 2629164,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1233: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "99141",
                },

                property: "P1233",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q15706812",
                    "numeric-id": 15706812,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P2639: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "4533e35f16964c939b82033bb6259e32",
                },

                property: "P2639",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2728291",
                    "numeric-id": 2728291,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P6234: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "albert-einstein",
                },

                property: "P6234",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q6023365",
                    "numeric-id": 6023365,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P863: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "thinker/2958",
                },

                property: "P863",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P863", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q21491701",
                    "numeric-id": 21491701,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P2454: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "PE00000116",
                },

                property: "P2454",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q237227",
                    "numeric-id": 237227,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P5019: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "einstein-albert",
                },

                property: "P5019",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q746368",
                    "numeric-id": 746368,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P4342: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "Albert_Einstein",
                },

                property: "P4342",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q2664168",
                    "numeric-id": 2664168,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1296: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "0023623",
                },

                property: "P1296",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q98769076",
                    "numeric-id": 98769076,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8094: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "einsteina",
                },

                property: "P8094",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q83365652",
                    "numeric-id": 83365652,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P7929: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "p=albert;n=einstein",
                },

                property: "P7929",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1307356",
                    "numeric-id": 1307356,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8854: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "18467",
                },

                property: "P8854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q3407324",
                    "numeric-id": 3407324,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
            P8349: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "56686",
                },

                property: "P8349",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q107456632",
                    "numeric-id": 107456632,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-04-01T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P6844: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "16734",
                },

                property: "P6844",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q55740543",
                    "numeric-id": 55740543,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "fr",
                    text: "Albert Einstein",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
            P2383: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "117243",
                },

                property: "P2383",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q107343683",
                    "numeric-id": 107343683,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2017-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P1284: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "00000000666",
                },

                property: "P1284",
                snaktype: "value",
              },
            ],
            P1810: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Albert Einstein",
                },

                property: "P1810",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
        },
      ],
      type: "statement",
    },
  ],
  P646: [
    {
      id: "Q937$E34CCE18-850C-4A3F-88D4-B62FB5BD3E0B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "/m/0jcx",
        },

        property: "P646",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q15241312",
                    "numeric-id": 15241312,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P577: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2013-10-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P577",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P577"],
        },
      ],
      type: "statement",
    },
  ],
  P648: [
    {
      id: "Q937$ae858c3b-4935-e68a-f3d6-89608a55d451",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "OL3175986A",
        },

        property: "P648",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P691: [
    {
      id: "Q937$677E4BC8-3AC3-4FE7-996F-86F794F6A9E6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "jn19990002019",
        },

        property: "P691",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P701: [
    {
      id: "Q937$118400BE-4662-4F54-B90E-909A41749C54",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "P20204",
        },

        property: "P701",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P723: [
    {
      id: "Q937$7E75EF73-C1D0-4660-9C74-1CCCA07B55EB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "eins001",
        },

        property: "P723",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P734: [
    {
      id: "Q937$148f07c2-4670-5dda-0c03-151cbd56e4c2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q16834800",
            "numeric-id": 16834800,
          },
        },

        property: "P734",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P213: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "0000000077040933",
                },

                property: "P213",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q423048",
                    "numeric-id": 423048,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-10-16T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P213", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q104698881",
                    "numeric-id": 104698881,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-01-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P735: [
    {
      id: "Q937$AED4F087-0294-4FD7-9507-A6171EAA3F27",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q577011",
            "numeric-id": 577011,
          },
        },

        property: "P735",
        snaktype: "value",
      },
      qualifiers: {
        P1545: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "1",
            },

            property: "P1545",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1545"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-06-19T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P2861: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "1215",
                },

                property: "P2861",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q104698881",
                    "numeric-id": 104698881,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-01-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P737: [
    {
      id: "Q937$3C1C425C-62DD-4233-B5F1-D2498C003D09",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q991",
            "numeric-id": 991,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$84ED556F-B8FA-460D-93A0-90D5024B158A",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q57246",
            "numeric-id": 57246,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$EE46A452-C11E-4AE7-963A-8FF7FB6F6D5C",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q35802",
            "numeric-id": 35802,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$19EF14C2-681A-433D-8A75-3A2EEA8F8EF5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1001",
            "numeric-id": 1001,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$C6E7234B-92BC-4592-BA74-8F03870FE891",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38193",
            "numeric-id": 38193,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$43BC7AAD-82D2-4948-962C-52FAE1EFB24F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q41688",
            "numeric-id": 41688,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$9E49F68A-83BB-4442-9486-8E4F40593D6F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q19185",
            "numeric-id": 19185,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$E4607642-194C-4331-BB6F-BBE8A4CE2710",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q935",
            "numeric-id": 935,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$FABE514E-23CC-4C6C-8D82-BF3E2F64C7F3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q7322195",
            "numeric-id": 7322195,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$4C978955-7004-4A30-8761-95A4572597D0",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q37160",
            "numeric-id": 37160,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$79A1E4A3-E4FA-4EDA-A94D-DFCAC70A10A2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q25820",
            "numeric-id": 25820,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$059F1D35-CB89-490B-B3F9-44E25FC91BB4",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q42299",
            "numeric-id": 42299,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$54302CD2-5FC0-4B2C-A1E4-8F1D76F949F7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q57193",
            "numeric-id": 57193,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$BE15FFD8-6E89-45B2-8713-68FA1436BA78",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q9095",
            "numeric-id": 9095,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$FEB22D24-5E00-4E88-BF6C-4572C2AE5957",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q200639",
            "numeric-id": 200639,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$390CEB92-E676-4123-9ECD-4C06D20A72AF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q310794",
            "numeric-id": 310794,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$60C51596-943C-4A87-89CF-7C91EC4DA189",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q355245",
            "numeric-id": 355245,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$7D6F2F4A-8A25-475F-B29F-A489707ACCC1",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q93996",
            "numeric-id": 93996,
          },
        },

        property: "P737",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P793: [
    {
      id: "Q937$0908221D-AE75-4794-97C9-10CA1E858129",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q115784320",
            "numeric-id": 115784320,
          },
        },

        property: "P793",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P800: [
    {
      id: "Q937$f09b6157-49b5-d3b7-f638-6c38e461680c",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q11455",
            "numeric-id": 11455,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2d7d09a6-470d-307c-b4d8-11f94cc737f1",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q11452",
            "numeric-id": 11452,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$3f710f06-4d66-4cdf-59b0-b57faed28cc9",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q83213",
            "numeric-id": 83213,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$91bab259-4bcb-82f7-095a-fd310314ae41",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q43514",
            "numeric-id": 43514,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$c3b59239-449d-8473-2f9e-dbc3a46c8971",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q56100717",
            "numeric-id": 56100717,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$1f3e9c3f-4a10-bcc1-840b-106489f92702",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q35875",
            "numeric-id": 35875,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$3d0b3a84-4bbb-7909-c87e-010fd0716d03",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q122894",
            "numeric-id": 122894,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$b60d007c-4247-e360-fd0f-c463fc89c70e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q273711",
            "numeric-id": 273711,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$27f4cff0-4ba8-7f23-d09d-30b24dd095a6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q944",
            "numeric-id": 944,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$5d6988b2-494d-032b-5daa-bcb43830d503",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1080745",
            "numeric-id": 1080745,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$360bbb34-467d-ca45-e877-1a94f134a616",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q853656",
            "numeric-id": 853656,
          },
        },

        property: "P800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P802: [
    {
      id: "Q937$72DE4D46-3D7E-49F3-9787-BA064C56C343",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q87554",
            "numeric-id": 87554,
          },
        },

        property: "P802",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P803: [
    {
      id: "Q937$dc7412cb-4045-1e15-9e33-b1aad4381b02",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q25339110",
            "numeric-id": 25339110,
          },
        },

        property: "P803",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-12-20T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://ru.wikipedia.org/?oldid=96910806",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$2aa71e9e-48de-f589-acb2-293861e69c0a",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q414528",
            "numeric-id": 414528,
          },
        },

        property: "P803",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1913-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-12-20T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://ru.wikipedia.org/?oldid=96910806",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P863: [
    {
      id: "Q937$1AA4B8FE-DFE3-45ED-93FB-3E6106EE9520",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "thinker/2958",
        },

        property: "P863",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P902: [
    {
      id: "Q937$C454C727-7E87-4322-8BCD-3E020B5D0667",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "028814",
        },

        property: "P902",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P906: [
    {
      id: "Q937$8DEE4AFA-8D09-4431-A651-1E48CCF61F9C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "184709",
        },

        property: "P906",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q877583",
                    "numeric-id": 877583,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P910: [
    {
      id: "Q937$d415d195-405e-41b3-18e0-7222736f0659",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q7213562",
            "numeric-id": 7213562,
          },
        },

        property: "P910",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P935: [
    {
      id: "Q937$4182BA1C-DA1E-4B66-B6B4-37DEBDA09457",
      mainsnak: {
        datatype: "string",
        datavalue: {
          type: "string",
          value: "Albert Einstein",
        },

        property: "P935",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P937: [
    {
      id: "Q937$862B872E-0986-4E1F-BCB5-67EA892B0E21",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q70",
            "numeric-id": 70,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+1902-06-16T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-04-02T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$B42B39CD-B046-4D84-AF15-C6FC03B1CBFF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1085",
            "numeric-id": 1085,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1911-01-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1912-10-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-04-02T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$1DBF6E45-7D71-496F-AADE-ABB4FB5F074F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q72",
            "numeric-id": 72,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1909-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1911-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-04-02T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$5FEDB28F-5810-490E-9258-301C36E95BB6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q64",
            "numeric-id": 64,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1914-04-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1933-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-04-02T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$af167d49-49ce-e4e5-7167-5a6ce897952e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q464344",
            "numeric-id": 464344,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$280ea2e9-4613-29a2-9eaf-b5150af990c0",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q138518",
            "numeric-id": 138518,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://en.wikipedia.org/wiki/Institute_for_Advanced_Study",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$26125040-4339-417b-cd07-1f0722f2f35d",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q72",
            "numeric-id": 72,
          },
        },

        property: "P937",
        snaktype: "value",
      },
      qualifiers: {
        P580: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 10,
                time: "+1912-10-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P580",
            snaktype: "value",
          },
        ],
        P582: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1914-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P582",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-04-02T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          snaks: {
            P227: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "118529579",
                },

                property: "P227",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23833686",
                    "numeric-id": 23833686,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-05-03T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P947: [
    {
      id: "Q937$54f115b8-4e47-d4a5-091c-b9c5bea91faa",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000021094",
        },

        property: "P947",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P949: [
    {
      id: "Q937$91097cfd-420f-24b0-e767-c41bfcea85dd",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000042773",
        },

        property: "P949",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P950: [
    {
      id: "Q937$8E2AC50E-695D-43E4-80EB-96BD2B5A5CF5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "XX834035",
        },

        property: "P950",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P973: [
    {
      id: "Q937$11b5e7a8-4c1e-f48a-ced0-c1707226db35",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
        },

        property: "P973",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$37f0d024-415d-a0e6-d9b9-28a0e963191f",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "https://www.ige.ch/de/ueber-uns/einstein.html",
        },

        property: "P973",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$63DAA43E-48B6-4654-B493-928738178FBE",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "http://www.digiporta.net/index.php?id=553550365",
        },

        property: "P973",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$EC12FBB9-05FE-4987-9BEE-6C82F2B4412F",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "http://www.digiporta.net/index.php?id=568612883",
        },

        property: "P973",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$9F63BB27-5275-4FDC-AD23-456899EEF925",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "http://www.digiporta.net/index.php?id=707892219",
        },

        property: "P973",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
  ],
  P989: [
    {
      id: "Q937$8b5a15c8-47cb-7529-df61-298660957813",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Hy-Ալբերտ Այնշտայն (Albert Einstein).ogg",
        },

        property: "P989",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q8785",
                "numeric-id": 8785,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$ebd8e6e1-4966-ab2a-c10f-fceeea0a3c14",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "De-Albert Einstein.ogg",
        },

        property: "P989",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+2005-06-19T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P2047: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+37.5",
                unit: "http://www.wikidata.org/entity/Q7727",
              },
            },

            property: "P2047",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407", "P585", "P2047"],
      rank: "normal",
      type: "statement",
    },
  ],
  P990: [
    {
      id: "Q937$d28dfcfb-4df9-39b0-68df-db41dc8f363e",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "03 ALBERT EINSTEIN.ogg",
        },

        property: "P990",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1860",
                "numeric-id": 1860,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1943-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585", "P407"],
      rank: "normal",
      type: "statement",
    },
  ],
  P998: [
    {
      id: "Q937$22A8DE0D-649A-4F71-B6EC-80C767F50CDC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Science/Physics/History/People/Einstein,_Albert/",
        },

        property: "P998",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1860",
                "numeric-id": 1860,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "preferred",
      type: "statement",
    },
    {
      id: "Q937$1C3C9040-A752-47F6-9382-2F9557682E78",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value:
            "World/Français/Sciences/Physique/Histoire/Personnages_historiques/Einstein,_Albert/",
        },

        property: "P998",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q150",
                "numeric-id": 150,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$A8F18655-B3A0-4EC9-AA0B-8597A4AC8D1E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value:
            "World/Deutsch/Wissenschaft/Naturwissenschaften/Physik/Personen/Einstein,_Albert/",
        },

        property: "P998",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$48BB41BA-D982-4E6D-9E78-96DDBB73A5D8",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value:
            "World/Español/Ciencia_y_tecnología/Física/Historia/Biografías/Einstein,_Albert/",
        },

        property: "P998",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1321",
                "numeric-id": 1321,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
  ],
  P1003: [
    {
      id: "Q937$807FF339-0105-4263-8A7A-75A6FFC26533",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000074139",
        },

        property: "P1003",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1005: [
    {
      id: "Q937$BABC7A6D-354E-49D9-9D6F-B575794A0546",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "26339",
        },

        property: "P1005",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1006: [
    {
      id: "Q937$356672EF-41CD-4BBA-8010-A4D704268DAB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "068350767",
        },

        property: "P1006",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1015: [
    {
      id: "Q937$02C20F8E-58BD-4CD1-95A1-C45BF8D3B3A0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "90053072",
        },

        property: "P1015",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1017: [
    {
      id: "Q937$DFEE8D9A-C5F7-4A1C-B6EB-76754C1CF3B5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "ADV10181679",
        },

        property: "P1017",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P1026: [
    {
      id: "Q937$c7c208b8-41b5-6617-14b8-f09f03ca8123",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q51754009",
            "numeric-id": 51754009,
          },
        },

        property: "P1026",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1905-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
  ],
  P1038: [
    {
      id: "Q937$7ac1a440-4882-073c-f966-036bda6cd821",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q55594631",
            "numeric-id": 55594631,
          },
        },

        property: "P1038",
        snaktype: "value",
      },
      qualifiers: {
        P1039: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q12051531",
                "numeric-id": 12051531,
              },
            },

            property: "P1039",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://stolpersteine-fuer-ulm.de/familie/lina-einstein/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$5d09ed7c-4c6a-5bbb-9106-6653fd49269e",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q68761",
            "numeric-id": 68761,
          },
        },

        property: "P1038",
        snaktype: "value",
      },
      qualifiers: {
        P1039: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q12051531",
                "numeric-id": 12051531,
              },
            },

            property: "P1039",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q48183",
                    "numeric-id": 48183,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1048: [
    {
      id: "Q937$3B48841C-6CC9-4213-90B2-74532E90D1B9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "369710",
        },

        property: "P1048",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q30239",
                    "numeric-id": 30239,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1050: [
    {
      id: "Q937$BB5824E0-B74F-4F93-A14C-CE802E0F9CB5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q132971",
            "numeric-id": 132971,
          },
        },

        property: "P1050",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://en.wikipedia.org/w/index.php?title=List_of_people_with_dyslexia&oldid=1189241542",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P1066: [
    {
      id: "Q937$670c8276-4457-cb31-a7ed-94749ac6b86a",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q116635",
            "numeric-id": 116635,
          },
        },

        property: "P1066",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$1af7745f-44d9-46e2-672e-49e04b5132f3",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q57246",
            "numeric-id": 57246,
          },
        },

        property: "P1066",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1150: [
    {
      id: "Q937$48935E07-C567-4839-BF88-39C8734FAAFD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "BF 5620",
        },

        property: "P1150",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1153: [
    {
      id: "Q937$b95d23c2-4002-b6c9-def1-1af0448ef2be",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "22988279600",
        },

        property: "P1153",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1185: [
    {
      id: "Q937$f291e938-8bad-404d-a99b-5bc6d6828566",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "303260",
        },

        property: "P1185",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1187: [
    {
      id: "Q937$B427CBB4-7940-4FB6-9A3F-A724845C8DB7",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "A028454",
        },

        property: "P1187",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1196: [
    {
      id: "Q937$14c593c6-45e4-be23-d902-13247421bf0a",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q3739104",
            "numeric-id": 3739104,
          },
        },

        property: "P1196",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-01-04T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.history.com/news/9-things-you-may-not-know-about-albert-einstein",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P1207: [
    {
      id: "Q937$BBCB193F-56B9-450A-AC4F-99072EDBDE8B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "n95300836",
        },

        property: "P1207",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1213: [
    {
      id: "Q937$1F5EE4D6-597D-4B1C-A59D-0FF3954D378E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000124193",
        },

        property: "P1213",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q30239",
                    "numeric-id": 30239,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1225: [
    {
      id: "Q937$04A90133-EA44-45AC-A728-4A1C08ABB9F6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "10582637",
        },

        property: "P1225",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1233: [
    {
      id: "Q937$84234072-22E0-4D22-8639-CEF328126AA0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "99141",
        },

        property: "P1233",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1258: [
    {
      id: "Q937$83607b46-4f7a-7788-a6e7-d25d20ab9985",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "celebrity/albert_einstein",
        },

        property: "P1258",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1263: [
    {
      id: "Q937$04B517EF-5DC1-4E45-96F1-3212AC9AB13D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "302/000022236",
        },

        property: "P1263",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1266: [
    {
      id: "Q937$97c563a5-43aa-af0f-74d8-31bf52a6614b",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "36179",
        },

        property: "P1266",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1273: [
    {
      id: "Q937$E4036E0D-45C7-4D62-908D-2AABC971099B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a10077078",
        },

        property: "P1273",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P214"],
        },
      ],
      type: "statement",
    },
  ],
  P1284: [
    {
      id: "Q937$F95587F0-3E98-4777-BE3A-9D26AF0B002F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "00000000666",
        },

        property: "P1284",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1296: [
    {
      id: "Q937$C63834A2-D913-49E0-84EC-8E08261E0E6E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0023623",
        },

        property: "P1296",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1309: [
    {
      id: "Q937$867FFAEA-6AEE-4D34-AC06-41DD78A795FC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "vtls000837931",
        },

        property: "P1309",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P1315: [
    {
      id: "Q937$C1166544-7625-4021-97FF-1102833C1CEB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "382451",
        },

        property: "P1315",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1343: [
    {
      id: "Q937$0AD0FBFC-0D40-45D6-B4DE-06B4F3662737",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q17329836",
            "numeric-id": 17329836,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P958: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P958",
            snaktype: "value",
          },
        ],
        P2699: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value:
                "http://www.larousse.fr/encyclopedie/personnage/Albert_Einstein/117783",
            },

            property: "P2699",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P958", "P2699"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$589BB4AF-5A39-461E-B548-683810223683",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q17378135",
            "numeric-id": 17378135,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P304: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "578-579",
            },

            property: "P304",
            snaktype: "value",
          },
        ],
        P478: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "29 : Чаган — Экс-ле-Бен",
            },

            property: "P478",
            snaktype: "value",
          },
        ],
        P577: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1978-00-00T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P577",
            snaktype: "value",
          },
        ],
        P958: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Эйнштейн Альберт",
            },

            property: "P958",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P478", "P577", "P958", "P304"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$17D1B970-3D2D-415A-B6DC-3CEE7CAF42BF",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q51955019",
            "numeric-id": 51955019,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digitale.beic.it/primo_library/libweb/action/search.do?fn=search&vid=BEIC&vl%283134987UI0%29=creator&vl%28freeText0%29=Einstein%20Albert",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P958: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Einstein, Albert 1879-1955",
                },

                property: "P958",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P958", "P854"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$545DCA7E-43A7-4A0B-A134-46F57FDCEAB4",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q67311526",
            "numeric-id": 67311526,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P2699: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value:
                "https://www.obalkyknih.cz/view_auth?auth_id=jn19990002019",
            },

            property: "P2699",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$845e3868-46dc-9343-5403-82766ca1189d",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q15987490",
            "numeric-id": 15987490,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P805: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q83471893",
                "numeric-id": 83471893,
              },
            },

            property: "P805",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$F4EBD78B-B56C-47C0-BCB6-64D7744A5CAE",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q99413897",
            "numeric-id": 99413897,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert, 1879-1955",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P2699: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value: "https://www.medvik.cz/link/jn19990002019",
            },

            property: "P2699",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2699"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q99413897",
                    "numeric-id": 99413897,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-10-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$E1D45EE3-8151-4678-9AC1-78270248436B",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q104698881",
            "numeric-id": 104698881,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1932: [
              {
                datatype: "string",
                datavalue: {
                  type: "string",
                  value: "Einstein Albert (1879)",
                },

                property: "P1932",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1932"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$eee7f584-4e64-e65f-3f00-643dc6e88bc7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q642074",
            "numeric-id": 642074,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P2699: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value: "https://hls-dhs-dss.ch/de/articles/028814",
            },

            property: "P2699",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      rank: "preferred",
      type: "statement",
    },
    {
      id: "Q937$D3C9CA0E-6DC7-4494-BA5C-D0CEEB23607A",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q19047539",
            "numeric-id": 19047539,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P805: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q123946574",
                "numeric-id": 123946574,
              },
            },

            property: "P805",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$8A454B4F-BCFE-4D9F-B9B2-DDA2F12B9177",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q20968284",
            "numeric-id": 20968284,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P304: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "341-344",
            },

            property: "P304",
            snaktype: "value",
          },
        ],
        P478: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "48",
            },

            property: "P478",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P478", "P304"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$4B613577-6015-4420-9B89-8A548043769F",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q126178049",
            "numeric-id": 126178049,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      qualifiers: {
        P304: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "308",
            },

            property: "P304",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P304"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$B7BC8CA1-2862-492B-8DC1-6594D2E3B557",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q126740695",
            "numeric-id": 126740695,
          },
        },

        property: "P1343",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1344: [
    {
      id: "Q937$568678a8-49ea-2e5c-d8a6-fe848fefbb00",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q63430342",
            "numeric-id": 63430342,
          },
        },

        property: "P1344",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$dbfdf1ba-4664-7995-c8e9-031fa478cccc",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q63430346",
            "numeric-id": 63430346,
          },
        },

        property: "P1344",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1368: [
    {
      id: "Q937$11AE3A27-3175-442B-8FA3-3E88930EE59E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000027126",
        },

        property: "P1368",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1375: [
    {
      id: "Q937$4E346517-ABD7-49CC-8DF3-F4E6A469888A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000012537",
        },

        property: "P1375",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1411: [
    {
      id: "Q937$833F4AB8-5DB6-4C8E-A2B0-E9C41B45F459",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1910-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$10C6F278-B75A-41CE-89D5-BF73F1B467F2",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1912-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$089C39EF-EB95-49B8-B93A-89EB7188C6C7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1913-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$814F8262-A8B2-45AE-B864-665CB88775CA",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1914-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$04A00051-217B-4EF2-871B-E683A50F7D77",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1916-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$09AB59F9-6D58-4243-A79B-F23D9E0C2991",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1917-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$BC8F6218-9064-4CEC-AFE3-4B7EE9F8167D",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1918-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$C92E9866-8ACD-4515-B5CA-A84373A7D9E6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1919-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$A2287F64-F005-477F-A66B-AC3E744EDCFB",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1920-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$E79C45D8-C10C-49A4-AAE4-1066FDE0F86E",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1921-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$24981E15-A007-4F8D-A2FC-99BAB12EF1D7",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q38104",
            "numeric-id": 38104,
          },
        },

        property: "P1411",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1922-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23684016",
                    "numeric-id": 23684016,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P3360: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "2728",
                },

                property: "P3360",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
      type: "statement",
    },
  ],
  P1417: [
    {
      id: "Q937$008FDB12-84E2-41DB-AF21-81A2F79B59F4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "biography/Albert-Einstein",
        },

        property: "P1417",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P2093: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Michio Kaku",
            },

            property: "P2093",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2093"],
      rank: "normal",
      type: "statement",
    },
  ],
  P1424: [
    {
      id: "Q937$1f07106e-4edd-0321-48f6-872bde3b4445",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q8092556",
            "numeric-id": 8092556,
          },
        },

        property: "P1424",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1430: [
    {
      id: "Q937$FA86602E-794B-4A4D-BBB1-16A709340B1A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3242",
        },

        property: "P1430",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1438: [
    {
      id: "Q937$e12b279c-460f-ebd6-4f89-11b95064a9f6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "15027",
        },

        property: "P1438",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1441: [
    {
      id: "Q937$C41A7482-FAFC-420D-BB22-C0A4AC175404",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q26963166",
            "numeric-id": 26963166,
          },
        },

        property: "P1441",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1472: [
    {
      id: "Q937$09962D5F-3198-4288-A956-38A7F1FE002F",
      mainsnak: {
        datatype: "string",
        datavalue: {
          type: "string",
          value: "Albert Einstein",
        },

        property: "P1472",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1556: [
    {
      id: "Q937$3D777AF1-C32C-42A9-97E0-44C4AB87873D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einstein.albert",
        },

        property: "P1556",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1559: [
    {
      id: "Q937$8d177df5-4c89-0773-a9da-69d6f20e7073",
      mainsnak: {
        datatype: "monolingualtext",
        datavalue: {
          type: "monolingualtext",
          value: {
            language: "de",
            text: "Albert Einstein",
          },
        },

        property: "P1559",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q206855",
                    "numeric-id": 206855,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1563: [
    {
      id: "Q937$75E589D7-EC23-4180-B465-BFFBC5E9BA1E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein",
        },

        property: "P1563",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q11921",
                    "numeric-id": 11921,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1580: [
    {
      id: "Q937$855CFEFF-77AF-4670-B7D8-F94D0FCCCB59",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a1279550",
        },

        property: "P1580",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1607: [
    {
      id: "Q937$489B6E8A-C84E-41DD-BBE2-DB438B7A8A49",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "278727",
        },

        property: "P1607",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1617: [
    {
      id: "Q937$0E087876-C35D-4A88-888B-A604E210827F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4cca21c2-6416-4207-922c-b32de7400474",
        },

        property: "P1617",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q18336371",
                    "numeric-id": 18336371,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P1670: [
    {
      id: "Q937$1fbbf23d-412e-528a-fb55-400e25b1cddc",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0053C3375",
        },

        property: "P1670",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1695: [
    {
      id: "Q937$df7a80c8-4e99-96c2-c3d1-ccda76c0c23e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a0000001178767",
        },

        property: "P1695",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1711: [
    {
      id: "Q937$801D4FA4-741A-4620-B0C0-AEFCEE6FF4E9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "9689",
        },

        property: "P1711",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1741: [
    {
      id: "Q937$0E73A074-C7FE-4667-AE6A-8C9262C59AED",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "96461",
        },

        property: "P1741",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1801: [
    {
      id: "Q937$BB6B6F48-0DF8-42ED-A5DD-FA520DD03694",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Einstein deska.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$AA2939E2-DC6C-4780-ABF4-F29F92A5342C",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value:
            "8839 - Milano - Via Bigli - Palazzo Olivazzi - Lapide Albert Einstein - Foto Giovanni Dall'Orto - 14-Apr-2007.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$39A5B7FD-C35E-471E-B0FB-2CB9467C2D45",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Home Albert Einstein 1895 Memorial.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$02B500D6-8628-4BEE-8EFB-796598225D26",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Einstein-barrakka.JPG",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$BB5EEB7D-9E0C-4515-89A4-3474642CA8CA",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Albert Einstein - Andräschule Salzburg.PNG",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$F1EB94E4-EBF0-40BD-A704-BCE87BDB4CB7",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "05w Denkmal Albert Einstein.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$8FE38029-D7F3-4DEC-99D5-B5D9F1E7EB79",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Einstein Plaque.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$1726bd73-414f-742e-d831-0550b3ac3b99",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value: "Archenhold-Sternwarte, 642-748.jpg",
        },

        property: "P1801",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1807: [
    {
      id: "Q937$E93A0E8E-3BAF-407E-A3C3-29F698D57A87",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4887",
        },

        property: "P1807",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1816: [
    {
      id: "Q937$6DF10E5B-DCB2-4EA4-90E3-0A66A3463134",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "mp73025",
        },

        property: "P1816",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1819: [
    {
      id: "Q937$D18EC269-EBC8-4E29-91B3-E0FFA0F42756",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "I00482340",
        },

        property: "P1819",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1871: [
    {
      id: "Q937$80E4F5AC-092F-4881-9B9F-522FCFDF2A25",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "cnp01496856",
        },

        property: "P1871",
        snaktype: "value",
      },
      qualifiers: {
        P2241: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q41755623",
                "numeric-id": 41755623,
              },
            },

            property: "P2241",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P2241"],
      rank: "deprecated",
      type: "statement",
    },
  ],
  P1889: [
    {
      id: "Q937$62187850-586F-4C97-84B5-C0FE9765A060",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q124606656",
            "numeric-id": 124606656,
          },
        },

        property: "P1889",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$2684A3AA-2CA9-4BAE-87BB-5AB870B6D8D5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q124500735",
            "numeric-id": 124500735,
          },
        },

        property: "P1889",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1890: [
    {
      id: "Q937$c6da5575-4272-9d9e-8f71-38f641be7e38",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000034649",
        },

        property: "P1890",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1899: [
    {
      id: "Q937$9FF11DBB-5751-4C5A-8407-2A7C85434699",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1035",
        },

        property: "P1899",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q328",
                    "numeric-id": 328,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P1938: [
    {
      id: "Q937$D0978887-68BE-473F-B3E6-A9FCF3C896C8",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1630",
        },

        property: "P1938",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1953: [
    {
      id: "Q937$78067182-14BA-4B6A-AC4D-B9748388D10C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "430935",
        },

        property: "P1953",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q14005",
                    "numeric-id": 14005,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2015-08-06T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P1960: [
    {
      id: "Q937$4836fee8-41e0-495a-6e21-3405e9340e2d",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "qc6CJjYAAAAJ",
        },

        property: "P1960",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P1977: [
    {
      id: "Q937$6530A781-2B28-482A-BB82-03EF307BDB0D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "145134",
        },

        property: "P1977",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2013: [
    {
      id: "Q937$3D398342-180C-4F67-9FF9-D49C5BE452FC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "AlbertEinstein",
        },

        property: "P2013",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1860",
                "numeric-id": 1860,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q200180",
                    "numeric-id": 200180,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://vi.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=63192473",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P2021: [
    {
      id: "Q937$DA60BC41-F680-461A-A3A7-9D675CEEF2B8",
      mainsnak: {
        datatype: "quantity",
        datavalue: {
          type: "quantity",
          value: {
            amount: "+2",
            unit: "1",
          },
        },

        property: "P2021",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2163: [
    {
      id: "Q937$69e5db09-44d7-fa1e-5a07-4c29e593cdda",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "32023",
        },

        property: "P2163",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$9362F75B-0695-4160-963E-79B22A633C4D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "460651",
        },

        property: "P2163",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2168: [
    {
      id: "Q937$e0c7b540-40d5-e514-8c55-fee743664c97",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "404958",
        },

        property: "P2168",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2188: [
    {
      id: "Q937$7d2bb948-46f5-07cb-f9de-1388d92eeb23",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "157",
        },

        property: "P2188",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2381: [
    {
      id: "Q937$904ad087-403d-f047-b8dd-51e108dd8a69",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3611",
        },

        property: "P2381",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2383: [
    {
      id: "Q937$3BAF146F-9543-4C23-9B5F-CE14ECC9980C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "117243",
        },

        property: "P2383",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2435: [
    {
      id: "Q937$6015a64d-4eb4-53c9-b26d-0c4357fbf171",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "184328",
        },

        property: "P2435",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2454: [
    {
      id: "Q937$32E97C2E-E7CF-4DCD-883C-668FC609B6DA",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "PE00000116",
        },

        property: "P2454",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2477: [
    {
      id: "Q937$89cf7fdc-4d5c-d628-1f13-a327af57d40d",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "P1KG24319",
        },

        property: "P2477",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2600: [
    {
      id: "Q937$8a5deb97-4595-eafb-8409-69b6f1508d75",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4481345450320047133",
        },

        property: "P2600",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2604: [
    {
      id: "Q937$98e7e569-402c-74e7-1dff-bde11bd88644",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "231298",
        },

        property: "P2604",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2605: [
    {
      id: "Q937$86E40C3F-9175-447E-9C9A-1B878EB68A3D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "52943",
        },

        property: "P2605",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2607: [
    {
      id: "Q937$840BA23E-C0D8-4F58-A718-3730C7328AC1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "43021f4f-4fda-4b32-bbf0-f2601181e32d",
        },

        property: "P2607",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2638: [
    {
      id: "Q937$5a6bf0f5-420f-b900-13bd-fd07d6923a7a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "people/albert-einstein",
        },

        property: "P2638",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2639: [
    {
      id: "Q937$4F6B79EC-D4B1-42E9-80AD-E35ADDD26022",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4533e35f16964c939b82033bb6259e32",
        },

        property: "P2639",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q36578",
                    "numeric-id": 36578,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2016-04-01T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P2732: [
    {
      id: "Q937$6577f3d6-444d-b869-4cb1-fad569b5bf7a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1638902",
        },

        property: "P2732",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2734: [
    {
      id: "Q937$0F039528-3A31-411C-A26C-4735CFA46A92",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "EinsteinAlbert",
        },

        property: "P2734",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2861: [
    {
      id: "Q937$BC2EAF7E-879B-4BCD-A364-1F57BCDD5646",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1215",
        },

        property: "P2861",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q23667505",
                    "numeric-id": 23667505,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P2889: [
    {
      id: "Q937$c70f45fa-4a44-0ac9-2891-a3f1127afdd1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "LZNC-TDG",
        },

        property: "P2889",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2924: [
    {
      id: "Q937$0dc81f47-4407-a5f0-e6e0-13efd7acba86",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4940471",
        },

        property: "P2924",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "ЭЙНШТЕЙН",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P2241: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q123562959",
                "numeric-id": 123562959,
              },
            },

            property: "P2241",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2241"],
      rank: "deprecated",
      type: "statement",
    },
  ],
  P2930: [
    {
      id: "Q937$81839751-F897-4276-88EC-1051CD7CB0BF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "A.Einstein.1",
        },

        property: "P2930",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2949: [
    {
      id: "Q937$BF398634-1AB2-438B-A66B-A9ED13F5C9B0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein-1",
        },

        property: "P2949",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Prof. Dr. Albert Einstein (14 Mar 1879 - 18 Apr 1955)",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P2959: [
    {
      id: "Q937$12409B26-3B9E-4B59-8FA0-145A0250C4B0",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q21200226",
            "numeric-id": 21200226,
          },
        },

        property: "P2959",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1975217",
                    "numeric-id": 1975217,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$2ac0f5fb-45f9-00b4-9fa6-fd857911f10d",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q25696257",
            "numeric-id": 25696257,
          },
        },

        property: "P2959",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P2963: [
    {
      id: "Q937$f657504a-4114-3037-35c2-9176d72639c4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "9810",
        },

        property: "P2963",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+2020-09-28T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P3744: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+8457",
                unit: "1",
              },
            },

            property: "P3744",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585", "P1810", "P3744"],
      rank: "normal",
      type: "statement",
    },
  ],
  P3029: [
    {
      id: "Q937$47C7DC9A-641A-4A7D-96CC-F25E422F6211",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "F51776",
        },

        property: "P3029",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3065: [
    {
      id: "Q937$D84B5B5C-0504-48F4-A231-D41149A1EC72",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "02-A003212458",
        },

        property: "P3065",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3154: [
    {
      id: "Q937$DE361415-6DD3-4221-AE82-35739977F729",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einstalb",
        },

        property: "P3154",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3219: [
    {
      id: "Q937$3D38C3E4-6A71-45E5-A848-8704C0664932",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P3219",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3221: [
    {
      id: "Q937$D95DCAE0-C2AE-400C-85A1-2C7AC889B1EB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "person/albert-einstein",
        },

        property: "P3221",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3222: [
    {
      id: "Q937$5A3F0CF9-0196-424B-9021-93A51B3D2D89",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P3222",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3280: [
    {
      id: "Q937$86E32CD2-D9CF-404E-AAC7-955AB7E6AA48",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0000007639",
        },

        property: "P3280",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3348: [
    {
      id: "Q937$ab650001-4dec-9156-3b6a-74a182370a16",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "76370",
        },

        property: "P3348",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3360: [
    {
      id: "Q937$52ff5483-4c36-2dbe-0fcb-9073db31a470",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "2728",
        },

        property: "P3360",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3365: [
    {
      id: "Q937$28cfab3f-44ba-be5e-f459-97557c198e25",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P3365",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q77541206",
                    "numeric-id": 77541206,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-02-13T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P7796: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "3852",
                },

                property: "P7796",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P3373: [
    {
      id: "Q937$3f80df56-48c3-ac02-3336-da112aa4a7a5",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q216738",
            "numeric-id": 216738,
          },
        },

        property: "P3373",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3388: [
    {
      id: "Q937$819DC0C6-0222-4C1F-8E3F-425182A2C1A1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "47850",
        },

        property: "P3388",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3390: [
    {
      id: "Q937$b06a9af6-41b2-550f-baf1-74270088cb87",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "NLB-ar101917",
        },

        property: "P3390",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3413: [
    {
      id: "Q937$74409430-0C27-43F0-ACF3-B9FCA15AC9BD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3232",
        },

        property: "P3413",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3417: [
    {
      id: "Q937$7D2FC670-D645-4590-8330-A4603D17743B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert-Einstein-physicist",
        },

        property: "P3417",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q51711",
                    "numeric-id": 51711,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
      ],
      type: "statement",
    },
  ],
  P3430: [
    {
      id: "Q937$D2E2EBCC-543C-40A4-B801-30DE95E705B6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "w63c6p77",
        },

        property: "P3430",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert, 1879-1955",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$F587C328-3A96-4A33-B9C0-29FA98B53607",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "w69k499r",
        },

        property: "P3430",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3569: [
    {
      id: "Q937$712A7500-1C0F-40AE-AF07-017B524A0838",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "natuurkunde-scheikunde-en-sterrenkunde/albert-einstein",
        },

        property: "P3569",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3630: [
    {
      id: "Q937$BBA18DA8-A1FC-4F8B-BC95-21A8AE533D38",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "2827",
        },

        property: "P3630",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3762: [
    {
      id: "Q937$4E114584-DAB6-4098-81F3-A540519CFE3F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "22128",
        },

        property: "P3762",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3845: [
    {
      id: "Q937$b5eb905c-45a3-775b-c7b6-5fd9ac8e33eb",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "218603",
        },

        property: "P3845",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3846: [
    {
      id: "Q937$B773B3CA-FAA6-49E5-8162-6BBBC54F9A05",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "87097968275423",
        },

        property: "P3846",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3847: [
    {
      id: "Q937$73BE7AD2-5E1B-4A62-99A3-5D837284A570",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "person:albert_einstein_(1879-1955)",
        },

        property: "P3847",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3909: [
    {
      id: "Q937$d42de8c6-41af-4967-8792-4a6686c6461d",
      mainsnak: {
        datatype: "monolingualtext",
        property: "P3909",

        snaktype: "somevalue",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q188",
                "numeric-id": 188,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2022-10-01T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://historyanswers.com/what-were-albert-einsteins-last-words/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P813", "P854"],
        },
      ],
      type: "statement",
    },
  ],
  P3965: [
    {
      id: "Q937$47C7DD6F-77FD-4105-9041-2814BE6D9F6D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "41865",
        },

        property: "P3965",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P3987: [
    {
      id: "Q937$C59B62B9-E533-4828-AAE2-BFF7FED417EF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "690",
        },

        property: "P3987",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4012: [
    {
      id: "Q937$4cfba186-48f1-155d-fbb6-0a5acf2f7dbe",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "50702974",
        },

        property: "P4012",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4104: [
    {
      id: "Q937$27a6fb2f-44d7-fc7e-bfb1-7eb14d7be835",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "58992",
        },

        property: "P4104",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4116: [
    {
      id: "Q937$e89a9a41-435e-1bc8-4fb2-ccf469f1b53a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "P0520433729",
        },

        property: "P4116",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4159: [
    {
      id: "Q937$01f12da8-4a0e-5f45-fbc4-6e50e1c1c56a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein_(1)",
        },

        property: "P4159",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4193: [
    {
      id: "Q937$72f435dd-479c-998c-423a-16cd2d1242e9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein_(1879-1955)",
        },

        property: "P4193",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4200: [
    {
      id: "Q937$9F83DB47-06FB-4319-8EB3-F8752CDA4169",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "54914",
        },

        property: "P4200",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4215: [
    {
      id: "Q937$F37C4D5A-9664-411D-A9E5-2F6B90793598",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert Einstein",
        },

        property: "P4215",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4223: [
    {
      id: "Q937$600820ce-42de-be10-1b3e-3fc4787624b4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P4223",
        snaktype: "value",
      },
      qualifiers: {
        P577: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1932-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P577",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "EINSTEIN, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P2093: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Roberto Marcolongo",
            },

            property: "P2093",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2093", "P577"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$4c06f85d-4ff4-41cf-e406-4c6455b7095d",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein_res-b649b13f-87e7-11dc-8e9d-0016357eee51",
        },

        property: "P4223",
        snaktype: "value",
      },
      qualifiers: {
        P478: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "III Appendice",
            },

            property: "P478",
            snaktype: "value",
          },
        ],
        P577: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+1961-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P577",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "EINSTEIN, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P577", "P478"],
      rank: "normal",
      type: "statement",
    },
  ],
  P4228: [
    {
      id: "Q937$7A8C06F9-83B7-491D-ABD4-BCD7751143E6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "P000386b",
        },

        property: "P4228",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4272: [
    {
      id: "Q937$c89e4b67-4f3b-5ba7-bbf1-aafe7cf34e4a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein, Albert, 1879-1955",
        },

        property: "P4272",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4293: [
    {
      id: "Q937$C0F91968-3C63-4EA2-B99F-C148A16A6BEE",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "pe/004590",
        },

        property: "P4293",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P3740: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+404",
                unit: "1",
              },
            },

            property: "P3740",
            snaktype: "value",
          },
        ],
        P5592: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+184",
                unit: "1",
              },
            },

            property: "P5592",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P3740", "P5592", "P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P4342: [
    {
      id: "Q937$A81C7B19-9CE3-4A73-AFD0-E81F5F93E542",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P4342",
        snaktype: "value",
      },
      qualifiers: {
        P4390: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q39893449",
                "numeric-id": 39893449,
              },
            },

            property: "P4390",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P4390"],
      rank: "normal",
      type: "statement",
    },
  ],
  P4359: [
    {
      id: "Q937$a3eb602f-4dd7-2e0a-1943-ecbe87f738fc",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "alberteinstein",
        },

        property: "P4359",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4389: [
    {
      id: "Q937$af88e3d6-477f-d534-4e84-be8426e2556e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "cp37054",
        },

        property: "P4389",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4431: [
    {
      id: "Q937$b7633923-4b7c-258e-54a5-aa56b797167e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einsteins-124th-birthday",
        },

        property: "P4431",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4438: [
    {
      id: "Q937$1bd3734d-4650-c00b-058f-5d883a4d10ec",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4ce2bb404fc06",
        },

        property: "P4438",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4515: [
    {
      id: "Q937$7c632375-4dc8-7071-90ce-b35f0d4577a3",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "10287261",
        },

        property: "P4515",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4553: [
    {
      id: "Q937$92C291C6-60D3-4F59-A9B4-DDD457D3FC4D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "22021",
        },

        property: "P4553",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q28054658",
                    "numeric-id": 28054658,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P4590: [
    {
      id: "Q937$3F1776CA-D1FE-433D-997F-C27598DBDFCE",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P4590",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4613: [
    {
      id: "Q937$BF45D317-C93D-4563-9F34-1C6E56F8E4AF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "42829",
        },

        property: "P4613",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4619: [
    {
      id: "Q937$472291AE-DA08-41EE-88E0-CC49B41F42BF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000584933",
        },

        property: "P4619",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4629: [
    {
      id: "Q937$3D84A7A3-CE81-4F95-A2D0-5D4DA76F9487",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein, Albert, 1879-1955",
        },

        property: "P4629",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4666: [
    {
      id: "Q937$7595FB9E-2B77-4533-BFAD-63F127634CD5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "441757",
        },

        property: "P4666",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4789: [
    {
      id: "Q937$ffdd77cc-47ba-c22a-6d42-11e2eec07284",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "U236915",
        },

        property: "P4789",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4823: [
    {
      id: "Q937$376DA0ED-B241-4786-B793-8875CBECFA14",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1300477",
        },

        property: "P4823",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4839: [
    {
      id: "Q937$a8214f92-42e5-7821-64b1-7f6394da21df",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: 'Entity["Person", "AlbertEinstein::6tb7g"]',
        },

        property: "P4839",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4862: [
    {
      id: "Q937$AD7A82A0-111D-41F2-B039-2DED52DB4844",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "B000AP7JOU",
        },

        property: "P4862",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4955: [
    {
      id: "Q937$5bec5aab-487a-0b48-1d07-13a73084d657",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "62280",
        },

        property: "P4955",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P4985: [
    {
      id: "Q937$d1239124-403c-36d6-aadf-1a5b0a386ffa",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1317625",
        },

        property: "P4985",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q20828898",
                    "numeric-id": 20828898,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P345: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "nm0251868",
                },

                property: "P345",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-05-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P345", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P5008: [
    {
      id: "Q937$8A9B623F-5BD4-4D2F-BA1B-ADF17EDEB839",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q5460604",
            "numeric-id": 5460604,
          },
        },

        property: "P5008",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$5be9c404-4a23-875a-bd7a-85e295c46960",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q103505599",
            "numeric-id": 103505599,
          },
        },

        property: "P5008",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$255D1010-AEBD-4545-97B7-5AC8D0542D04",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q6173448",
            "numeric-id": 6173448,
          },
        },

        property: "P5008",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+2022-10-31T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P585"],
      rank: "normal",
      type: "statement",
    },
  ],
  P5019: [
    {
      id: "Q937$a39f6585-4bb7-ba15-4a25-40538ac061c7",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einstein-albert",
        },

        property: "P5019",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5021: [
    {
      id: "Q937$e5c2c22e-45ce-915d-900b-9466dbaa22be",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1051792",
            "numeric-id": 1051792,
          },
        },

        property: "P5021",
        snaktype: "value",
      },
      qualifiers: {
        P5022: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+160",
                unit: "1",
              },
            },

            property: "P5022",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P5022"],
      rank: "normal",
      type: "statement",
    },
  ],
  P5033: [
    {
      id: "Q937$b34bc648-4b47-0af6-f481-7fdc1e14a28e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "308021",
        },

        property: "P5033",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5034: [
    {
      id: "Q937$eda6548c-5e83-498c-b9f7-4498eff87da2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "KAC200103196",
        },

        property: "P5034",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5063: [
    {
      id: "Q937$7DD29328-1548-4831-9A94-149D499248E2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "i95022",
        },

        property: "P5063",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5068: [
    {
      id: "Q937$19853111-80CE-4E5A-86B0-D25E9FC6B60F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1916687",
        },

        property: "P5068",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5125: [
    {
      id: "Q937$241D2F15-A24A-44A3-9DF0-0E432AEACAD9",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q48835067",
            "numeric-id": 48835067,
          },
        },

        property: "P5125",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5247: [
    {
      id: "Q937$C17B03A0-1D77-40EB-BF55-A80ABB79B411",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3005-791",
        },

        property: "P5247",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5254: [
    {
      id: "Q937$35233a3e-4a0d-7bca-16b1-280a43c806ed",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "184106",
        },

        property: "P5254",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5284: [
    {
      id: "Q937$e936b18b-477c-220b-4f80-2ab71e170d9c",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1032566",
        },

        property: "P5284",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5306: [
    {
      id: "Q937$D22B2137-D8DB-4748-8757-DBB84063F410",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "2504",
        },

        property: "P5306",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5340: [
    {
      id: "Q937$e8a48e91-4d70-19c5-0304-00e35058d33b",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "9130",
        },

        property: "P5340",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5361: [
    {
      id: "Q937$9316e0f8-4a2b-c1a8-aa39-503ef3dba99b",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "EinsteinAlbert1879-1955",
        },

        property: "P5361",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5370: [
    {
      id: "Q937$150F4760-0F90-463C-A487-1F5B1C084C09",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "48276",
        },

        property: "P5370",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q28054658",
                    "numeric-id": 28054658,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P5375: [
    {
      id: "Q937$FB23247D-8139-4EED-B6FC-03BE051E319A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "5923",
        },

        property: "P5375",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5380: [
    {
      id: "Q937$756c73f0-4bfb-ce8b-cda5-cd74dfb9a947",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "20001817",
        },

        property: "P5380",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5390: [
    {
      id: "Q937$851FB34C-BD6E-45FF-9777-807977CC9C5A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "classiques/einstein_albert/einstein_albert",
        },

        property: "P5390",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5421: [
    {
      id: "Q937$21F243E5-98DC-416F-9A41-09E9BFEF06BF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "66492",
        },

        property: "P5421",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5441: [
    {
      id: "Q937$E7A1995D-D92D-4D82-A1B9-8B96C12C6E0D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein,_Albert",
        },

        property: "P5441",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q28054658",
                    "numeric-id": 28054658,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
      type: "statement",
    },
  ],
  P5504: [
    {
      id: "q937$f430141c-4f89-75fb-766a-b573b010f483",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "people/41024053",
        },

        property: "P5504",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-06-26T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P5508: [
    {
      id: "Q937$042BC0B3-6A40-4AF2-BB53-3E9EA16C6313",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "56488",
        },

        property: "P5508",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q265049",
                    "numeric-id": 265049,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2019-02-28T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://www.archinform.net/service/wd_aiarch.php",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P5534: [
    {
      id: "Q937$c3e98470-44af-4b0c-c90e-164e51cc76b0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "243732",
        },

        property: "P5534",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5587: [
    {
      id: "Q937$A92CD88A-2244-409D-938F-5A21C9A7F5B4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "fcrtts5z33mrjqc",
        },

        property: "P5587",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q1798125",
                    "numeric-id": 1798125,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P577: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-03-26T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P577",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2018-08-24T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P577", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P5617: [
    {
      id: "Q937$F13F3BDB-5A77-4459-87C6-744846159E8B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein-307",
        },

        property: "P5617",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5731: [
    {
      id: "Q937$965E36F3-192E-4B3A-85BF-84D638EA5110",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "86877",
        },

        property: "P5731",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5739: [
    {
      id: "Q937$F21985DE-EF54-4B06-8C78-ED463C0E34B1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "25090",
        },

        property: "P5739",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5776: [
    {
      id: "Q937$C9969499-43F7-4EA4-A75D-E106A7C9E6D1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "53f5b414dabfae472ef80501",
        },

        property: "P5776",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Arnet_Miner_author_ID&oldid=739822897",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P5882: [
    {
      id: "Q937$C475904E-6F9D-4FC4-B593-F6012D2D331F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "M00000061906",
        },

        property: "P5882",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P5905: [
    {
      id: "Q937$AA392540-5FCC-4F1C-B0EA-982F8F7AAC94",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4005-49115",
        },

        property: "P5905",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6058: [
    {
      id: "Q937$7d6c691b-4251-b154-c181-aed334d67fdf",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "personnage/Albert_Einstein/117783",
        },

        property: "P6058",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$f41b47fb-4ca8-9ad8-ee7b-03cba9337a8c",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "images/Albert_Einstein/1005145",
        },

        property: "P6058",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$f1dd3449-495e-4e13-6a74-6c5b6291bb55",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "images/Albert_Einstein/1314172",
        },

        property: "P6058",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$1a9c9931-47c1-b991-64ce-e8cb000d420e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "sons/Albert_Einstein_février_1950/1102228",
        },

        property: "P6058",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6104: [
    {
      id: "Q937$3C788EB3-919A-4F3B-994C-1743A563FECE",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q8487137",
            "numeric-id": 8487137,
          },
        },

        property: "P6104",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6119: [
    {
      id: "Q937$0c7aa06c-4a57-3016-b94f-a7cae8bef68d",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P6119",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6173: [
    {
      id: "Q937$9792B121-2E20-4F62-8C6C-27A6EF9BC74E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4450",
        },

        property: "P6173",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6214: [
    {
      id: "Q937$66B7287B-FBB9-4F14-8235-25EEEEEAAA64",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "jmb-pers-118058",
        },

        property: "P6214",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6231: [
    {
      id: "Q937$4D273B23-4084-462A-A802-D6ADB1373FF0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "80919",
        },

        property: "P6231",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6234: [
    {
      id: "Q937$D6BCE945-D473-4B85-B95F-81ACB7BBD38D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P6234",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6262: [
    {
      id: "Q937$DAAE4BB5-B2E0-4C1F-8FCE-F606D694B4DB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "cardguide:Albert_Einstein",
        },

        property: "P6262",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1860",
                "numeric-id": 1860,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P9675: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "5995",
            },

            property: "P9675",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-06-08T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://cardguide.fandom.com/wiki/Albert_Einstein",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
            P1476: [
              {
                datatype: "monolingualtext",
                datavalue: {
                  type: "monolingualtext",
                  value: {
                    language: "en",
                    text: "Albert Einstein | CardGuide Wiki | Fandom",
                  },
                },

                property: "P1476",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854", "P1476", "P813"],
        },
      ],
      type: "statement",
    },
    {
      id: "Q937$E80756D8-02BF-44D3-B525-7AD30A3F5513",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "disney:Albert_Einstein",
        },

        property: "P6262",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q1860",
                "numeric-id": 1860,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
        P9675: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "114971",
            },

            property: "P9675",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      rank: "normal",
      type: "statement",
    },
  ],
  P6327: [
    {
      id: "Q937$E6E064A3-BE21-41D6-98D0-31C28BBA605F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1024300",
        },

        property: "P6327",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6363: [
    {
      id: "Q937$b614b508-4fb2-543f-13b6-54860f700c55",
      mainsnak: {
        datatype: "url",
        datavalue: {
          type: "string",
          value: "http://data.thenextweb.com/tnw/entity/albert_einstein",
        },

        property: "P6363",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P854: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value: "https://thenextweb.com/vocabulary/albert-einstein/",
                },

                property: "P854",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
      ],
      type: "statement",
    },
  ],
  P6385: [
    {
      id: "Q937$1af447c5-42ab-afdb-0359-c7809beaea15",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "nauka_i_tehnika/fizika/ENSHTEN_ALBERT.html",
        },

        property: "P6385",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6394: [
    {
      id: "Q937$1AED4BED-B64B-4670-AF23-7923C649B862",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a11159522",
        },

        property: "P6394",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$6BEF8D2E-B88F-4547-9413-73EAE793AD33",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a11206068",
        },

        property: "P6394",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6441: [
    {
      id: "Q937$91c72921-4120-5fae-c5d6-faab73381f99",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4559238",
        },

        property: "P6441",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6551: [
    {
      id: "Q937$DE2C26E2-A97E-4826-B668-CF4B3F83398F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "11507030",
        },

        property: "P6551",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Physics_History_Network_ID&oldid=870387729",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P6564: [
    {
      id: "Q937$e28f7508-4f6b-d487-6e35-b0691a419508",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P6564",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6573: [
    {
      id: "Q937$3B4790D4-7F3A-44FB-8CAB-6DEB414C3488",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P6573",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6578: [
    {
      id: "Q937$39544CAA-A410-4E78-9165-53C9187977DD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "65B24EFADE9787FD",
        },

        property: "P6578",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6640: [
    {
      id: "Q937$9DC95600-8D86-42D7-83F2-38B2B9595FD5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "92811",
        },

        property: "P6640",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P11797: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q465",
                    "numeric-id": 465,
                  },
                },

                property: "P11797",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P11797"],
        },
      ],
      type: "statement",
    },
  ],
  P6683: [
    {
      id: "Q937$3CDAA0C0-229C-4F61-95E1-AE43E909D5BD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "120272",
        },

        property: "P6683",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6698: [
    {
      id: "Q937$A645911A-A6C1-4B36-87C4-75F14FBCD9C9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "アルベルト・アインシュタイン",
        },

        property: "P6698",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6706: [
    {
      id: "Q937$F97A8BAA-FE33-4057-B29A-FC18EC625202",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein,+Albert",
        },

        property: "P6706",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P6770: [
    {
      id: "Q937$f580b9e9-4b05-84ad-b70c-b749908b7e52",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "68115.011",
        },

        property: "P6770",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6821: [
    {
      id: "Q937$7FC9D5FB-D866-4E63-B15C-F97BC2DD1F77",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "alvin-person:12189",
        },

        property: "P6821",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6844: [
    {
      id: "Q937$99AF1BEE-F7AE-4FF3-AA9A-C049F23EF7DE",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "16734",
        },

        property: "P6844",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6886: [
    {
      id: "Q937$9CB89033-CCEB-475F-871C-F6A87637BCCC",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q1860",
            "numeric-id": 1860,
          },
        },

        property: "P6886",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$3bd38978-44b4-7cde-ea6e-cb9181b107a6",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q188",
            "numeric-id": 188,
          },
        },

        property: "P6886",
        snaktype: "value",
      },
      rank: "preferred",
      type: "statement",
    },
  ],
  P6900: [
    {
      id: "Q937$0baaed97-4638-a17a-7ed1-bddc70cc344a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "アルバート・アインシュタイン",
        },

        property: "P6900",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6921: [
    {
      id: "Q937$3AF2C788-CC51-4FB1-980E-1F6B002DD30D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "12767",
        },

        property: "P6921",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P6984: [
    {
      id: "Q937$370EE5A9-4CC7-4A5C-9859-264FD090FC30",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P6984",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7029: [
    {
      id: "Q937$6B8DBA50-B148-49FF-96B9-27165F49B67E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "770128355",
        },

        property: "P7029",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7031: [
    {
      id: "Q937$57164D10-E675-4731-AC46-99B93405E884",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P7031",
        snaktype: "value",
      },
      qualifiers: {
        P1065: [
          {
            datatype: "url",
            datavalue: {
              type: "string",
              value:
                "http://web.archive.org/web/20190707180834/https://penguin.co.in/author/albert-einstein/",
            },

            property: "P1065",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1065"],
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Penguin_India_author_ID&oldid=980750962",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P7142: [
    {
      id: "Q937$2E941FA2-3FEB-47DB-8113-6DAE8B2AA600",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "15296",
        },

        property: "P7142",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Poincaré_Papers_person_ID&oldid=992642893",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P7293: [
    {
      id: "Q937$B8F74728-F158-4092-9C57-B4EC0723C7DF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "9810646540205606",
        },

        property: "P7293",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7305: [
    {
      id: "Q937$27C79EBC-F9B1-491A-8B2B-EB270163DF44",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3896872",
        },

        property: "P7305",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7311: [
    {
      id: "Q937$4DE960BC-2BA5-4544-9904-9AD82C68703D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1428",
        },

        property: "P7311",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Aozora_Bunko_author_ID&oldid=1014305535",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P7356: [
    {
      id: "Q937$7DCBC3E1-2E13-4749-9502-717DAB6C12DF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P7356",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7369: [
    {
      id: "Q937$B25E67BE-D08C-42FF-AAE5-5D94B4EC6DD8",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000007200",
        },

        property: "P7369",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7400: [
    {
      id: "Q937$d9a7e636-4aa4-7df8-c950-7f2d690878e5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einsteinalbert",
        },

        property: "P7400",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7502: [
    {
      id: "Q937$98754DCC-2DEF-4986-B91F-D3537227E367",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein-N6Y",
        },

        property: "P7502",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q71016606",
                    "numeric-id": 71016606,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2022-09-10T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P7512: [
    {
      id: "Q937$133000B6-81B0-47B4-9B36-9D3D14B8D0B1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "database_article/einstein",
        },

        property: "P7512",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7666: [
    {
      id: "Q937$445E4546-99B3-457B-835C-C0CF7C9B7D4C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P7666",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7671: [
    {
      id: "Q937$AF617748-484A-4C6B-83C6-A10A8DC04BC3",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "2975999",
        },

        property: "P7671",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Semion_author_ID&oldid=1069382242",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P7699: [
    {
      id: "Q937$DAB3B3EB-AC81-4A6F-BC18-8B1D8C1B4F12",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "LNB:V*13679;=BM",
        },

        property: "P7699",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7700: [
    {
      id: "Q937$37febba9-4c6c-4e10-6d43-eddc57689409",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "vtls005532100",
        },

        property: "P7700",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7709: [
    {
      id: "Q937$c3e5ab2f-4ecc-3001-a085-8834ffc35ae2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "712a47ec-8348-4530-88cc-ce7fca822027",
        },

        property: "P7709",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7726: [
    {
      id: "Q937$40983654-4ee6-04aa-40e2-1de052ebd20c",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "AlbertEinstein",
        },

        property: "P7726",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7763: [
    {
      id: "Q937$c8356648-4f54-beb2-d251-72848bfd8a46",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q71887839",
            "numeric-id": 71887839,
          },
        },

        property: "P7763",
        snaktype: "value",
      },
      qualifiers: {
        P1001: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q29870196",
                "numeric-id": 29870196,
              },
            },

            property: "P1001",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1001"],
      rank: "normal",
      type: "statement",
    },
  ],
  P7775: [
    {
      id: "Q937$79CE2C54-3B8E-44F9-9D35-793AD704A580",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P7775",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$76A198B2-2957-4E39-9A2C-7EF0CD95CFA9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert Einstein",
        },

        property: "P7775",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7796: [
    {
      id: "Q937$CEEF7B2A-E90F-4C31-B87E-365E0021B27B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3852",
        },

        property: "P7796",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7842: [
    {
      id: "Q937$7E70202A-FB93-4DA1-BB9A-6124C6C0518A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "11782",
        },

        property: "P7842",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q265049",
                    "numeric-id": 265049,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2024-01-25T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P5508: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "56488",
                },

                property: "P5508",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P5508", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P7865: [
    {
      id: "Q937$E2076805-F94F-463F-8623-E71BE6E7502F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "95a5yja38danygu695b5yc1k6mw3acr",
        },

        property: "P7865",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-04-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P813"],
        },
      ],
      type: "statement",
    },
  ],
  P7902: [
    {
      id: "Q937$7C2DF352-91AA-47A6-B24A-C6F88176CB38",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "118529579",
        },

        property: "P7902",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7929: [
    {
      id: "Q937$B7D44895-C4F7-491B-B4F5-E3BBD7C82E34",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "p=albert;n=einstein",
        },

        property: "P7929",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7982: [
    {
      id: "Q937$39387E5B-4A4D-4B38-A1DD-7C1B3A9978A9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "17257",
        },

        property: "P7982",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P7993: [
    {
      id: "Q937$807FED95-54CF-4FBF-811F-B60B01D966E4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P7993",
        snaktype: "value",
      },
      qualifiers: {
        P577: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+2009-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P577",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P577"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$4DB4315A-E220-4044-9F00-AE157D8D51C2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein_res-fdb8f22c-a041-11e1-9b2f-d5ce3506d72e",
        },

        property: "P7993",
        snaktype: "value",
      },
      qualifiers: {
        P577: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 9,
                time: "+2009-01-01T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P577",
            snaktype: "value",
          },
        ],
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P577"],
      rank: "normal",
      type: "statement",
    },
  ],
  P8024: [
    {
      id: "Q937$CBA2C6AB-2E4E-4BB2-BA5C-5FD1CB449C8E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "26",
        },

        property: "P8024",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8034: [
    {
      id: "Q937$FF54D31D-3687-48FF-91B9-06CEC42B492E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "495/91752",
        },

        property: "P8034",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-07-16T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P214", "P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P8094: [
    {
      id: "Q937$44BE11AF-DB85-4252-8144-5C66C514ABFC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einsteina",
        },

        property: "P8094",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8168: [
    {
      id: "Q937$C8FAB0D9-5988-4263-90D5-46A47F723E81",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Q224273",
        },

        property: "P8168",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8179: [
    {
      id: "Q937$EB363600-D012-45D0-85FC-4E5B1459776B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "ncf10161360",
        },

        property: "P8179",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8189: [
    {
      id: "Q937$744D8D46-1EB3-4787-BC7F-D942DD29C082",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "987007260607605171",
        },

        property: "P8189",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8234: [
    {
      id: "Q937$8724DB70-40E5-41D2-8261-CCDE0BB14936",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "28026",
        },

        property: "P8234",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8238: [
    {
      id: "Q937$E2EF0D5A-559E-4BC3-AA7E-AF3568CF3793",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "7901",
        },

        property: "P8238",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8313: [
    {
      id: "Q937$EEBCB244-81E2-47B8-B35B-EE350F16061D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P8313",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P8349: [
    {
      id: "Q937$ED67FC70-DDC8-44A0-B3DE-D7A473CE2DA3",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "56686",
        },

        property: "P8349",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8408: [
    {
      id: "Q937$4ADDBC48-37FC-442E-AABC-DD9B8FDE7AA4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "AlbertEinstein",
        },

        property: "P8408",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q64139102",
                    "numeric-id": 64139102,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-07-09T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P8496: [
    {
      id: "Q937$6719B0DA-9474-4C3E-8E27-0C8DE8C24505",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einstein-albert-1879-1955-physicist",
        },

        property: "P8496",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8568: [
    {
      id: "Q937$ED91F6E6-8AAC-4732-B3F4-0EACA83EC898",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein-table-of-contents",
        },

        property: "P8568",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8750: [
    {
      id: "Q937$5900A0C2-F977-47C8-A5DB-5DBB2E6B850D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "45533",
        },

        property: "P8750",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$C8CA01AC-AA39-4EB8-9A3A-D8B9E485442F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "88532",
        },

        property: "P8750",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8795: [
    {
      id: "Q937$D5BBC800-DEEB-4D16-ADBB-DB2DB55D261D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "26519",
        },

        property: "P8795",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8814: [
    {
      id: "Q937$C0FF6744-2083-47DA-93FC-A7B5B69613F7",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "10974490-n",
        },

        property: "P8814",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8849: [
    {
      id: "Q937$43D6E755-BFFE-4608-AFE1-FD5C41632FF9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "6024037",
        },

        property: "P8849",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8851: [
    {
      id: "Q937$06F18BE5-F960-4584-B061-ED1A6237ED59",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "487527",
        },

        property: "P8851",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8852: [
    {
      id: "Q937$EBD005CA-FDCB-4CEF-97BB-A27D8EBFA8DE",
      mainsnak: {
        datatype: "wikibase-item",
        datavalue: {
          type: "wikibase-entityid",
          value: {
            "entity-type": "item",
            id: "Q7963760",
            "numeric-id": 7963760,
          },
        },

        property: "P8852",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P143: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q10000",
                    "numeric-id": 10000,
                  },
                },

                property: "P143",
                snaktype: "value",
              },
            ],
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://nl.wikipedia.org/w/index.php?title=Walrussnor&oldid=57409503",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P8854: [
    {
      id: "Q937$8F0C16BA-D304-497D-8480-B80F40830074",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "18467",
        },

        property: "P8854",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8885: [
    {
      id: "Q937$4d7c1fcb-428f-fb92-6f70-23de7ef59d40",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "알베르트 아인슈타인",
        },

        property: "P8885",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8899: [
    {
      id: "Q937$7D4F29B8-F7B0-45C3-9D5F-510917BEAD33",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Einstein,-Albert",
        },

        property: "P8899",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8902: [
    {
      id: "Q937$85AB27FC-A542-4376-9A76-A9D89EDA5F0F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "people/75109",
        },

        property: "P8902",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8914: [
    {
      id: "Q937$BEE69EBB-3194-474D-B051-A8889BA3ABDC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "19535",
        },

        property: "P8914",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8947: [
    {
      id: "Q937$D628BCCB-E1D9-4F9C-9167-0AF176BF865A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "189487",
        },

        property: "P8947",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P8980: [
    {
      id: "Q937$03715100-4655-6c49-741b-ac89961d809a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "000215897",
        },

        property: "P8980",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9037: [
    {
      id: "Q937$44883DD8-9DF1-41A8-9953-E3E33DFC0196",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
        },

        property: "P9037",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q63411600",
                    "numeric-id": 63411600,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P691: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "jn19990002019",
                },

                property: "P691",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2020-12-22T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
            P9037: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
                },

                property: "P9037",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P9037", "P691", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P9044: [
    {
      id: "Q937$07DC86C5-CA50-4990-AE48-2C08BE1636E8",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "5140127",
        },

        property: "P9044",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9141: [
    {
      id: "Q937$15BC47E0-1963-4626-AD51-79324310FE6D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1986",
        },

        property: "P9141",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9160: [
    {
      id: "Q937$2C959AF8-FC1C-46FE-A6F2-8CF1D5AA6E20",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "46208",
        },

        property: "P9160",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9171: [
    {
      id: "q937$4f8d35a4-4e99-caff-1f72-e1dfc1b494df",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "107626",
        },

        property: "P9171",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2021-05-23T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P9178: [
    {
      id: "Q937$D89DB3CD-A83B-4C20-BB2F-1E891841A971",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "5803",
        },

        property: "P9178",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9212: [
    {
      id: "Q937$7247C4EA-0B24-4EAC-A471-0783E55662DD",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "401",
        },

        property: "P9212",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$E48A075F-5C69-4454-9D54-0B12A949CEAC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "6443",
        },

        property: "P9212",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9247: [
    {
      id: "Q937$A48AE670-0012-4524-828C-35B7B9916FF7",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "8399",
        },

        property: "P9247",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9251: [
    {
      id: "Q937$027005A2-93BD-48B8-98AA-674379E67FA2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "87094",
        },

        property: "P9251",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9287: [
    {
      id: "Q937$1BF6177F-17B3-422A-B720-7F99872D8CB1",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "3914",
        },

        property: "P9287",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9352: [
    {
      id: "Q937$7FFC1FF7-BA07-4831-B89A-D10244262623",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "239143",
        },

        property: "P9352",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9371: [
    {
      id: "Q937$D1D726DB-7EBF-41CC-8B8A-168DA5C478EE",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "166026621",
        },

        property: "P9371",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9482: [
    {
      id: "Q937$90F90B63-EB05-467E-B9E3-CC68887BAFCF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einstein-albert",
        },

        property: "P9482",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9522: [
    {
      id: "Q937$5995B68F-510F-49B8-B4EB-3E9A63405967",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "4619",
        },

        property: "P9522",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9594: [
    {
      id: "Q937$08FF31BD-5BA4-4E65-8CAE-C3C1FCAF4A9C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "6437",
        },

        property: "P9594",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9626: [
    {
      id: "Q937$779C4E13-058F-4F52-B25D-CECABBB395B0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "404",
        },

        property: "P9626",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9807: [
    {
      id: "Q937$12C12F18-54B7-4B96-B7D8-A913A58B05DF",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "163490",
        },

        property: "P9807",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9863: [
    {
      id: "Q937$88f3c591-4a71-ea2d-277f-b4177b6f6fd4",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "આઇન્સ્ટાઇન-આલ્બર્ટ",
        },

        property: "P9863",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9918: [
    {
      id: "Q937$EE3FCBD6-275F-4B2E-8BF2-4D251CB5051C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "PE00004870",
        },

        property: "P9918",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9964: [
    {
      id: "Q937$838df6a2-433f-61d9-442f-e86e33203112",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "118529579",
        },

        property: "P9964",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P9984: [
    {
      id: "Q937$25DA9494-3E3C-4F53-BC1B-E0821F2AC05A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "981058511756306706",
        },

        property: "P9984",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10069: [
    {
      id: "Q937$614F5C33-8249-436B-ADCC-4CCA5D1F1445",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "49324",
        },

        property: "P10069",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10141: [
    {
      id: "Q937$18d12b8d-4bda-bc95-5310-ef1eb8fc1f5e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "156358",
        },

        property: "P10141",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10227: [
    {
      id: "q937$901ac528-4e29-9c58-156a-6b792417f2dd",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "vtls000086385",
        },

        property: "P10227",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P214: [
              {
                datatype: "external-id",
                datavalue: {
                  type: "string",
                  value: "75121530",
                },

                property: "P214",
                snaktype: "value",
              },
            ],
            P248: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q54919",
                    "numeric-id": 54919,
                  },
                },

                property: "P248",
                snaktype: "value",
              },
            ],
            P813: [
              {
                datatype: "time",
                datavalue: {
                  type: "time",
                  value: {
                    after: 0,
                    before: 0,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                    precision: 11,
                    time: "+2022-03-05T00:00:00Z",
                    timezone: 0,
                  },
                },

                property: "P813",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
      type: "statement",
    },
  ],
  P10234: [
    {
      id: "Q937$469367a5-4595-f4d4-1f0d-938d3f7e95b6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert_einstein",
        },

        property: "P10234",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10242: [
    {
      id: "Q937$B1341B66-13D3-43A4-8D3A-AEFB93F49981",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "01682/eu_e_0736/e0736",
        },

        property: "P10242",
        snaktype: "value",
      },
      qualifiers: {
        P1932: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Albert Einstein",
            },

            property: "P1932",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      rank: "normal",
      type: "statement",
    },
  ],
  P10297: [
    {
      id: "Q937$7c5a2eff-4378-d934-f4d4-b7fce1a75171",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "m0jcx",
        },

        property: "P10297",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10299: [
    {
      id: "Q937$5715b495-4bfa-27ac-08f8-9f78ebd90082",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P10299",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10302: [
    {
      id: "Q937$6ad5ded0-e941-42f0-8e44-bfe11baa4c81",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P10302",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10387: [
    {
      id: "Q937$2F8EE879-4C25-4F37-91E3-BFE4CD3D8CCC",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "8278",
        },

        property: "P10387",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10553: [
    {
      id: "Q937$DC5C0034-8B57-4289-AE2C-C5D9B0190B95",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "142045950",
        },

        property: "P10553",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10565: [
    {
      id: "Q937$7dc4b696-4246-5d4d-a056-e269be655515",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "123649",
        },

        property: "P10565",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "爱因斯坦，A.",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$9456DEBA-00A4-4F2A-89C4-735AA8277A1F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "520858",
        },

        property: "P10565",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$D9095A5E-8027-46D7-8047-C6E01B683531",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "633756",
        },

        property: "P10565",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10608: [
    {
      id: "Q937$081B24E1-6DFC-42AD-8991-CE992F602DB9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "agent/gnd_118529579",
        },

        property: "P10608",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10704: [
    {
      id: "Q937$D7F44115-3E07-4991-9481-9DD97634555A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1955.0005",
        },

        property: "P10704",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10757: [
    {
      id: "Q937$65b22a89-4cce-1421-62e5-389b629dbf26",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "395",
        },

        property: "P10757",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10780: [
    {
      id: "Q937$1EB8E30E-E656-4F1B-9ADB-67FF9579A5D6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P10780",
        snaktype: "value",
      },
      qualifiers: {
        P407: [
          {
            datatype: "wikibase-item",
            datavalue: {
              type: "wikibase-entityid",
              value: {
                "entity-type": "item",
                id: "Q150",
                "numeric-id": 150,
              },
            },

            property: "P407",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      rank: "normal",
      type: "statement",
    },
  ],
  P10832: [
    {
      id: "Q937$5a751d54-44ae-b82e-5416-c290a328bbaa",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "E39PBJkhFRgHDtmhvmC6JdfXh3",
        },

        property: "P10832",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10861: [
    {
      id: "Q937$86f35674-4459-8de2-d7a3-b1ac6de8ae8a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "013217540103.39",
        },

        property: "P10861",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10899: [
    {
      id: "Q937$6a2b7d78-430c-1ed7-79b0-73293af31b58",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "882211",
        },

        property: "P10899",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P10916: [
    {
      id: "Q937$de37924c-469d-5607-2ecf-458f0f97fa3f",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P10916",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11120: [
    {
      id: "Q937$67929d93-4c92-0edd-65eb-e4a730ba190a",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P11120",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11155: [
    {
      id: "Q937$709A0C9B-9E40-4C8D-8C42-73EACC67A06F",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "81943",
        },

        property: "P11155",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11180: [
    {
      id: "Q937$6927D2FF-2E73-4595-8903-03037104504C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "10590",
        },

        property: "P11180",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11194: [
    {
      id: "Q937$2DDF78BD-28E7-4C08-B3E7-F57A01116229",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "people/albert-einstein",
        },

        property: "P11194",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11196: [
    {
      id: "Q937$372FC8C7-27B2-45B8-96E1-5E6F2F5171D6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "爱因斯坦",
        },

        property: "P11196",
        snaktype: "value",
      },
      qualifiers: {
        P585: [
          {
            datatype: "time",
            datavalue: {
              type: "time",
              value: {
                after: 0,
                before: 0,
                calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                precision: 11,
                time: "+2023-03-20T00:00:00Z",
                timezone: 0,
              },
            },

            property: "P585",
            snaktype: "value",
          },
        ],
        P3740: [
          {
            datatype: "quantity",
            datavalue: {
              type: "quantity",
              value: {
                amount: "+247103",
                unit: "1",
              },
            },

            property: "P3740",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P3740", "P585"],
      rank: "normal",
      type: "statement",
    },
  ],
  P11239: [
    {
      id: "Q937$EE6BF046-A28B-4FA4-8900-F9E9F31D22FB",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0008824347",
        },

        property: "P11239",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11249: [
    {
      id: "Q937$0C404BCD-9CA7-4A27-98A3-59991DEA5B05",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "14115549",
        },

        property: "P11249",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/KBR_Catalogue_ID_for_writers",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P11386: [
    {
      id: "Q937$750C57A8-C600-4166-8FA3-593DE87E2245",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P11386",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11394: [
    {
      id: "Q937$7f9996bd-418b-a088-d1ce-cc9b57be0351",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "aor/einstein/index",
        },

        property: "P11394",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11496: [
    {
      id: "Q937$9C7521F8-F6BB-44A9-A38B-D4B63CF7F44E",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1140563741718602752",
        },

        property: "P11496",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11514: [
    {
      id: "Q937$E39D6BE6-F743-4F62-88D1-DA76461A3A25",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "einshtein-al-bert-3ec899",
        },

        property: "P11514",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11683: [
    {
      id: "Q937$51B7CB8E-74B8-47E9-9398-CB403560FD90",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-ejnshtejn",
        },

        property: "P11683",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11686: [
    {
      id: "Q937$599A7A02-8D71-47BC-9D6C-AD100862BA58",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "981058511756306706",
        },

        property: "P11686",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11818: [
    {
      id: "Q937$157844C7-8B05-4D2A-946A-A37C30274CAA",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "esjiljveqvqreqe",
        },

        property: "P11818",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P11870: [
    {
      id: "Q937$C6EA136F-9608-49C2-8119-FCB0EE7AAA1A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "1404",
        },

        property: "P11870",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12086: [
    {
      id: "Q937$B937678D-E069-4973-83A8-DCD557715D05",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Albert_Einstein",
        },

        property: "P12086",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12098: [
    {
      id: "Q937$AD4C743A-6BF8-4B60-8EE2-DEA685000158",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "855374",
        },

        property: "P12098",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12153: [
    {
      id: "Q937$5f4db2e5-42cf-e474-c43a-1e2a15ef3990",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "650988260",
        },

        property: "P12153",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12385: [
    {
      id: "Q937$70b72fa7-3aa0-42db-ab27-5721962aa70e",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "albert-einstein",
        },

        property: "P12385",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12458: [
    {
      id: "Q937$E9FD5427-2D42-4CB1-8714-59F404F2275A",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "264639",
        },

        property: "P12458",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "Einstein, Albert, 1879-1955.",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      references: [
        {
          snaks: {
            P3452: [
              {
                datatype: "wikibase-item",
                datavalue: {
                  type: "wikibase-entityid",
                  value: {
                    "entity-type": "item",
                    id: "Q124605379",
                    "numeric-id": 124605379,
                  },
                },

                property: "P3452",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P3452"],
        },
      ],
      type: "statement",
    },
  ],
  P12483: [
    {
      id: "Q937$3E99B226-D3B6-4819-9D24-62151AB73ACA",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "11237",
        },

        property: "P12483",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12502: [
    {
      id: "Q937$454CB7FB-E3E0-4FCD-B53A-85212C60722D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "14611",
        },

        property: "P12502",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12582: [
    {
      id: "Q937$63E112EF-7936-4F50-8F66-C28DA4CE293C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "20110803095744712",
        },

        property: "P12582",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12597: [
    {
      id: "Q937$F941CD61-9078-47F5-837E-B2CF0236C2F2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "14634",
        },

        property: "P12597",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12674: [
    {
      id: "Q937$85A23411-4ADE-4334-B962-CAE8AA2D4149",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "Q95055",
        },

        property: "P12674",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12800: [
    {
      id: "Q937$3445205E-0782-4CF6-9D75-145D7BE7166C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "en:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$9B057674-A2D6-48C0-9781-AB464C9EBD5B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "it:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$ADC97A7F-19CA-41BA-AFF1-2BD00C4FFA64",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "es:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$441AAC37-A617-4DB8-8C9E-EB24D2C53E98",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "eu:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$174A978F-C237-4F40-8DEF-6F98E749B12C",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "ca:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
    {
      id: "Q937$CFE21E78-4B32-4611-AB3E-E91B2F7CA981",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "fr:Albert_Einstein",
        },

        property: "P12800",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12836: [
    {
      id: "Q937$732C5E98-200F-4944-8978-5110BFBECCFE",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "27238306",
        },

        property: "P12836",
        snaktype: "value",
      },
      qualifiers: {
        P1810: [
          {
            datatype: "string",
            datavalue: {
              type: "string",
              value: "阿尔伯特·爱因斯坦 Albert Einstein",
            },

            property: "P1810",
            snaktype: "value",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      rank: "normal",
      type: "statement",
    },
  ],
  P12871: [
    {
      id: "Q937$f18cf655-4231-9e57-7105-91e8d52baad5",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "0jcx",
        },

        property: "P12871",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P12975: [
    {
      id: "Q937$7349c362-ac2a-46e6-b9ba-8e55dcc520c0",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "2607",
        },

        property: "P12975",
        snaktype: "value",
      },
      rank: "normal",
      references: [
        {
          snaks: {
            P4656: [
              {
                datatype: "url",
                datavalue: {
                  type: "string",
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/Lexikon_der_Mathematik_entry_ID",
                },

                property: "P4656",
                snaktype: "value",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
      type: "statement",
    },
  ],
  P13019: [
    {
      id: "Q937$D909F5C2-4686-4D3E-BE02-2709AA4C976B",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "87761",
        },

        property: "P13019",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13022: [
    {
      id: "Q937$A3B8B824-35FA-401A-A7F4-69B2CD27F15D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "19857",
        },

        property: "P13022",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13030: [
    {
      id: "Q937$2583B1EF-2FC2-4F7A-891D-7B4668E83FB2",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "person/2493",
        },

        property: "P13030",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13049: [
    {
      id: "Q937$8BE290EF-BA0E-4795-B38A-C1963B157611",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "118529579",
        },

        property: "P13049",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13051: [
    {
      id: "Q937$380F1F6D-03C1-4998-8B94-7721C28348F6",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "34419",
        },

        property: "P13051",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13146: [
    {
      id: "Q937$f363a24c-46e1-3712-66b6-e455ff8e1053",
      mainsnak: {
        datatype: "commonsMedia",
        datavalue: {
          type: "string",
          value:
            "Albert Einstein writing on a blackboard in Pasadena (1931).jpg",
        },

        property: "P13146",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13153: [
    {
      id: "Q937$82a82f75-4bec-3e40-3538-424efa2918ab",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "5698",
        },

        property: "P13153",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13166: [
    {
      id: "Q937$8DA39E16-4D5B-4E6E-BAE2-715ADC9BFF2D",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "144964",
        },

        property: "P13166",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
  P13183: [
    {
      id: "Q937$C3AA622F-BE01-4CC6-9877-77908BD2E6F9",
      mainsnak: {
        datatype: "external-id",
        datavalue: {
          type: "string",
          value: "118529579",
        },

        property: "P13183",
        snaktype: "value",
      },
      rank: "normal",
      type: "statement",
    },
  ],
};

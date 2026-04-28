import { describe, expect, test } from "vitest";

import { grabGraphParts } from "./graph";

describe("Graph", () => {
  test("graphs", () => {
    const df = grabGraphParts(cconns);

    expect(df.nodes).toMatchInlineSnapshot(`
      [
        {
          "data": {},
          "id": "BOB",
          "type": "person",
        },
        {
          "data": {
            "category": "Science",
            "human": "BOB",
            "id": "PHYS",
            "label": "Physics",
          },
          "id": "PHYS",
          "type": "field",
        },
        {
          "data": {
            "category": "Lit",
            "human": "BOB",
            "id": "BOOK",
            "label": "Books",
          },
          "id": "BOOK",
          "type": "field",
        },
        {
          "data": {},
          "id": "PIE",
          "type": "person",
        },
        {
          "data": {},
          "id": "ALB",
          "type": "person",
        },
      ]
    `);
  });
});

const cconns = {
  BOB: {
    fows: [
      { category: "Science", human: "BOB", id: "PHYS", label: "Physics" },
      { category: "Lit", human: "BOB", id: "BOOK", label: "Books" },
    ],
  },
  PIE: {
    fows: [
      { category: "Science", human: "BOB", id: "PHYS", label: "Physics" },
      { category: "Science", human: "ALB", id: "PHYS", label: "Physics" },
    ],
  },
  ALB: {
    fows: [{ category: "Science", human: "ALB", id: "PHYS", label: "Physics" }],
  },
};

const conns = [
  { BOB: { category: "Science", human: "BOB", id: "PHYS", label: "Physics" } },
  { BOB: { category: "Science", human: "ALB", id: "PHYS", label: "Physics" } },
  { BOB: { category: "Art", human: "PIE", id: "PNTN", label: "Paintin" } },
  { BOB: { category: "Science", human: "BOB", id: "DOGS", label: "Doggies" } },
  { BOB: { category: "Lit", human: "BOB", id: "BOOK", label: "Books" } },
];

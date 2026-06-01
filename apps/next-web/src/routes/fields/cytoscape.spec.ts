import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";

import { describe, expect, test } from "vitest";

import { createElements, toEdge } from "./cytoscape";

describe("Cytoscape", () => {
  test("large", () => {
    expect(createElements(subject)).toMatchSnapshot();
  });
  test("small", () => {
    const g = createElements(smaller);
    expect(g.map((h) => h.data.id)).toEqual([
      "Q364505",
      "Q333",
      "Q364505→Q333",
      "SCIENCE",
      "Q333→SCIENCE",
      "Q200397",
      "Q12483",
      "Q200397→Q12483",
      "Q12483→SCIENCE",
      "Q4",
      "Q200397→Q4",
      "Q4→SCIENCE",
    ]);
  });
  test("toEdge", () => {
    expect(toEdge("source", "target")).toEqual({
      data: {
        id: "source→target",
        source: "source",
        target: "target",
      },
    });
  });
});

const subject: Record<PersonQid, FieldsOfWorkSummaryV1> = {
  Q187258: {
    fows: [
      {
        category: "Science",
        id: "Q333",
        label: "astronomy",
      },
    ],
  },
  Q200397: {
    fows: [
      {
        category: "Science",
        id: "Q12483",
        label: "statistics",
      },
    ],
  },
  Q245355: {
    fows: [
      {
        category: "Lit",
        id: "Q8242",
        label: "literature",
      },
    ],
  },
  Q247603: {
    fows: [
      {
        category: "Science",
        id: "Q4",
        label: "electrical engineering",
      },
    ],
  },
  Q364505: {
    fows: [
      {
        category: "Science",
        id: "Q333",
        label: "astronomy",
      },
    ],
  },
  Q433773: {
    fows: [
      {
        category: "Science",
        id: "Q333",
        label: "astronomy",
      },
    ],
  },
  Q81130: {
    fows: [
      {
        category: "Science",
        id: "Q333",
        label: "astronomy",
      },
    ],
  },
};

const smaller: Record<PersonQid, FieldsOfWorkSummaryV1> = {
  Q200397: {
    fows: [
      {
        category: "Science",
        id: "Q12483",
        label: "statistics",
      },
      {
        category: "Science",
        id: "Q4",
        label: "electrical engineering",
      },
    ],
  },
  Q364505: {
    fows: [
      {
        category: "Science",
        id: "Q333",
        label: "astronomy",
      },
    ],
  },
};

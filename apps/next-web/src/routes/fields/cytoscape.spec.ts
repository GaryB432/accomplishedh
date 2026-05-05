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
      "Q333→Q364505",
      "SCIENCE",
      "SCIENCE→Q333",
      "Q200397",
      "Q12483",
      "Q12483→Q200397",
      "SCIENCE→Q12483",
      "Q4",
      "Q4→Q200397",
      "SCIENCE→Q4",
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
  Q433773: {
    fows: [
      {
        id: "Q333",
        category: "Science",
        label: "astronomy",
      },
    ],
  },
  Q364505: {
    fows: [
      {
        id: "Q333",
        category: "Science",
        label: "astronomy",
      },
    ],
  },
  Q200397: {
    fows: [
      {
        id: "Q12483",
        category: "Science",
        label: "statistics",
      },
    ],
  },
  Q187258: {
    fows: [
      {
        id: "Q333",
        category: "Science",
        label: "astronomy",
      },
    ],
  },
  Q81130: {
    fows: [
      {
        id: "Q333",
        category: "Science",
        label: "astronomy",
      },
    ],
  },
  Q245355: {
    fows: [
      {
        id: "Q8242",
        category: "Lit",
        label: "literature",
      },
    ],
  },
  Q247603: {
    fows: [
      {
        id: "Q4",
        category: "Science",
        label: "electrical engineering",
      },
    ],
  },
};

const smaller: Record<PersonQid, FieldsOfWorkSummaryV1> = {
  Q364505: {
    fows: [
      {
        id: "Q333",
        category: "Science",
        label: "astronomy",
      },
    ],
  },
  Q200397: {
    fows: [
      {
        id: "Q12483",
        category: "Science",
        label: "statistics",
      },
      {
        id: "Q4",
        category: "Science",
        label: "electrical engineering",
      },
    ],
  },
};

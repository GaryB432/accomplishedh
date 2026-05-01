import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";
import { describe, expect, test } from "vitest";
import { createElements } from "./cytoscape";

describe("Cytoscape", () => {
  test("createElements", () => {
    expect(createElements(subject)).toMatchSnapshot();
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

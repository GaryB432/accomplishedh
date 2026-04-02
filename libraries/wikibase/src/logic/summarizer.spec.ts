import { describe, expect, type Mocked, test, vi } from "vitest";

import * as wbApi from "../data/api";
import { fieldClaims } from "../mocks/claims";
import { summarize } from "./summarizer";

vi.mock("../data/api");

const mockedApi = wbApi as Mocked<typeof wbApi>;

describe("Summarizer", () => {
  test("summarize", async () => {
    mockedApi.fetchEntities.mockResolvedValue({
      Q10001: {
        id: "Q10001",
        labels: { en: { value: "ENTITY 10001" } },
        type: "item",
      },
      Q10002: {
        id: "Q10002",
        type: "item",
      },
    });
    const subject = await summarize({
      claims: {
        ...fieldClaims,
      },
      id: "",
      type: "item",
    });
    expect(Object.keys(subject.claims!)).toContain("P101");
    expect(subject.summary).toEqual({
      claims: {
        P101: [
          "ENTITY 10001",
          "dunno af",
          "wikibase-entityid?",
          "wikibase-entityid?",
        ],
      },
      fun: true,
    });
  });
});

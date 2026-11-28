import { describe, expect, type Mocked, test, vi } from "vitest";

import * as wbApi from "../data/api";
import { fieldClaims } from "../mocks/claims";
import { summarize } from "./summarizer";
import type { Entities, Entity, LanguageDictionary } from "../types";

vi.mock("../data/api");

const mockedApi = wbApi as Mocked<typeof wbApi>;

const ENGLISH = "en";

function toEnglishDictionary(
  english: string,
  label: string,
): LanguageDictionary {
  return { [ENGLISH]: { language: ENGLISH, value: `${label} ${english}` } };
}

describe("Summarizer", () => {
  test("summarize missing", async () => {
    mockedApi.reanimated__fetchEntities.mockResolvedValue({
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

  test("summarize basics", async () => {
    mockedApi.reanimated__fetchEntities.mockImplementation((ids) => {
      return Promise.resolve(
        ids.reduce((a, id) => {
          const entity: Entity = {
            id,
            labels: toEnglishDictionary(id, "LABEL"),
            type: "item",
          };
          a[id] = entity;
          return a;
        }, {} as Entities),
      );
    });
    const subject = await summarize({
      claims: {
        ...fieldClaims,
      },
      id: "Q0",
      type: "item",
    });
    expect(Object.keys(subject.claims!)).toContain("P101");
    expect(subject.summary).toEqual({
      claims: {
        P101: ["LABEL Q10001", "LABEL Q10002", "LABEL Q10004", "LABEL Q10003"],
      },
      fun: true,
    });
  });
});

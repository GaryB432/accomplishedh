import { describe, expect, test } from "vitest";

import { toAccomplishedH } from "./utils";

describe("Utils", () => {
  test("translates to AccomplishedH", () => {
    const subject = {
      id: "Q000",
      type: "item",
      labels: { en: { language: "en", value: "tester" } },
    } as const;
    const result = toAccomplishedH(subject);
    expect(result.wb).toBe(subject);
    expect(result.name).toEqual("tester");
  });
});

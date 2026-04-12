import { describe, expect, test } from "vitest";

import { split } from "./array";

describe("Array", () => {
  test("splits", () => {
    const s = Array(12)
      .fill(0)
      .map((_, i) => i);
    expect(split(s, 5)).toEqual([
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11],
    ]);
  });
});

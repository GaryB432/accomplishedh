import type { EuroHuman, Portrait } from "@accomplishedh/shared";
import { describe, expect, test } from "vitest";
import { featuredCommand, fillout, portraitedOnly } from "./featured.command";

describe("Featured Command", () => {
  test("should create an instance", () => {
    expect(featuredCommand).toBeTruthy();
  });
  test("fillout", () => {
    expect(fillout([], 4).length).toEqual(0);
    expect(fillout(["a", "b", "c"], 4)).toEqual(["a", "b", "c", "a"]);
    expect(fillout(["a"], 4)).toEqual(["a", "a", "a", "a"]);
    /* prettier-ignore */
    expect(fillout(['a', 'b', 'c'], 13)).toEqual(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a',]);
  });
});

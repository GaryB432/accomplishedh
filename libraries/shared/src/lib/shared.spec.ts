import { describe, expect, test } from "vitest";

import {
  batchify,
  diffCount,
  firstAndOnly,
  highlightDefiniteArticle,
  ΘpadSerialForKey,
  ΘshardKeyFor,
} from "./shared";

describe("highlightDefiniteArticle", () => {
  test("should highlight non article", () => {
    expect(highlightDefiniteArticle("some wtf rules")).toEqual({
      marker: 4,
      p: ["some", " wtf rules"],
    });
  });
  test("should highlight non article", () => {
    expect(highlightDefiniteArticle(" some wtf rules")).toEqual({
      marker: 4,
      p: ["some", " wtf rules"],
    });
  });
  test("should not highlight a", () => {
    expect(highlightDefiniteArticle("a wtf rules")).toEqual({
      marker: 0,
      p: ["", "a wtf rules"],
    });
  });
  test("should not highlight space a", () => {
    expect(highlightDefiniteArticle("  a wtf rules")).toEqual({
      marker: 0,
      p: ["", "a wtf rules"],
    });
  });
  test("should not highlight an", () => {
    expect(highlightDefiniteArticle("an wtf rules")).toEqual({
      marker: 0,
      p: ["", "an wtf rules"],
    });
  });
  test("should not highlight space an", () => {
    expect(highlightDefiniteArticle("  an wtf rules")).toEqual({
      marker: 0,
      p: ["", "an wtf rules"],
    });
  });
  test("should handle blank", () => {
    expect(highlightDefiniteArticle("")).toEqual({
      marker: 0,
      p: ["░░░", ""],
    });
  });
});

describe("data keys", () => {
  test("padSerialForKey", () => {
    expect(ΘpadSerialForKey("42")).toEqual("000042");
  });
  test("shardKeyFor", () => {
    expect(ΘshardKeyFor({ id: "00001-00000000000" })).toEqual("1");
  });
});

describe("diffCount", () => {
  test("diffCounts work", () => {
    expect(diffCount([], [])).toEqual(0);
    expect(diffCount(["a", "b"], ["b", "a"])).toEqual(0);
    expect(diffCount(["a", "b"], ["a", "c"])).toEqual(1);
    expect(diffCount(["a", "b", "c"], ["a", "b", "d"])).toEqual(1);
  });
});

describe("firstAndOnly", () => {
  test("too many", () => {
    const subject = {
      id: "SUT",
      title: "humphrey",
      type: "item",
    };
    const Q420 = {
      id: "Q420",
      type: "item",
    };

    expect(() => firstAndOnly({ Q420, SUT: subject })).toThrow(
      "expected one element",
    );
  });

  test("not enough", () => {
    expect(() => firstAndOnly({})).toThrow("expected one element");
  });

  test("just right", () => {
    const subject = {
      id: "SUT",
      title: "experimental test subject",
      type: "item",
    };

    expect(firstAndOnly({ whatever: subject })).toBe(subject);
  });
});

describe("batches", () => {
  /* prettier-ignore */
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  test("happy", () => {
    /* prettier-ignore */
    expect(batchify(alphabet)).toEqual([
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
      ['U', 'V', 'W', 'X', 'Y', 'Z'],
    ]);
  });
  test("together", () => {
    /* prettier-ignore */
    expect(batchify(alphabet, 2)).toEqual([
      ['A', 'B'], ['C', 'D'], ['E', 'F'], ['G', 'H'], ['I', 'J'], ['K', 'L'], ['M', 'N'],
      ['O', 'P'], ['Q', 'R'], ['S', 'T'], ['U', 'V'], ['W', 'X'], ['Y', 'Z']
    ]);
  });
});

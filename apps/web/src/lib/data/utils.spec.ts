import { describe, expect, test } from "vitest";
import { getShardPathFor } from "./utils";

describe("Utils", () => {
  test("getShardPathFor", () => {
    expect(getShardPathFor("SUT")).toEqual("../../data/shards/SUT.json");
  });
});

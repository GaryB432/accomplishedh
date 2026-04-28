import { describe, expect, test } from "vitest";
import { dataRoot } from "./fs-reader";

describe("FsReader", () => {
  test("dataPath", () => {
    expect(dataRoot.slice(-23)).toEqual("/apps/next-web/src/data");
  });
});

import { describe, expect, test } from "vitest";

import { dataPath } from "./fs-reader";

describe("FsReader", () => {
  test("dataPath", () => {
    expect(dataPath).toEqual("apps/web/static/data");
  });
});

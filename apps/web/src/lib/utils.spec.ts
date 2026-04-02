import { describe, expect, test } from "vitest";

import { isGary } from "./utils";

describe("Utils", () => {
  test("isGary", () => {
    expect(
      isGary({
        todayISO: "",
        userid: "fred",
      }),
    ).toBeFalsy();
  });
});

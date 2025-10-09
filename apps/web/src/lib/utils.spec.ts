import { describe, expect, test } from "vitest";
import { isGary } from "./utils";

describe("Utils", () => {
  test("isGary", () => {
    expect(
      isGary({
        userid: "fred",
        todayISO: "",
      }),
    ).toBeFalsy();
  });
});

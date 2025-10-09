import { describe, expect, test } from "vitest";
import { isoFrom } from "../data/timevalue";

describe("Timevalue", () => {
  test("happy path", () => {
    expect(
      isoFrom({
        type: "time",
        value: {
          time: "+1619-10-12T00:00:00Z",
        },
      }),
    ).toEqual("1619-10-12T00:00:00Z");
  });
});

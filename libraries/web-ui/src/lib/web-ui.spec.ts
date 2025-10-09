import { describe, expect, test } from "vitest";
import { birthdayTitle } from "./web-ui";

describe("webUi", () => {
  test("birthdayTitle a", () => {
    expect(birthdayTitle({ dob: "05-20", yob: "1989" })).toEqual(
      "May 20, 1989",
    );
  });
  test("birthdayTitle b", () => {
    expect(birthdayTitle({ dob: "05-30", yob: "2112" })).toEqual(
      "May 30, 2112",
    );
  });
  test("birthdayTitle c", () => {
    expect(birthdayTitle({ dob: "01-01", yob: "1658" })).toEqual("Jan 1, 1658");
  });
  test("birthdayTitle d", () => {
    expect(birthdayTitle({ dob: "12-31", yob: "1066" })).toEqual(
      "Dec 31, 1066",
    );
  });
});

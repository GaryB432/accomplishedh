import { describe, expect, test } from "vitest";
import {
  addDays,
  dayCompare,
  daysFromNow,
  isValidISO8601,
  midday,
  monthCheck,
  nextDate,
} from "./date-utils";

describe("date-utils", () => {
  test("should day compare", () => {
    expect(
      dayCompare("AAAA-01-29T00:00:00.000Z", "BBBB-01-29T00:00:00.000Z"),
    ).toEqual(-1);
  });
  test("should filter", () => {
    expect(monthCheck("AAAA-MM-29T00:00:00.000Z", "MM")).toBeTruthy();
  });

  test("should get next date", () => {
    expect(nextDate("1968-04-18", "2047-06-02")).toEqual(
      "2048-04-18T00:00:00.000Z",
    );
    expect(nextDate("1968-04-18", "2047-03-02")).toEqual(
      "2047-04-18T00:00:00.000Z",
    );
  });

  test("should add a", () => {
    expect(addDays("1959-05-19", 1)).toEqual("1959-05-20T00:00:00.000Z");
  });
  test("should add b", () => {
    expect(addDays("1959-05-02", 10)).toEqual("1959-05-12T00:00:00.000Z");
  });
  test("should add c", () => {
    expect(addDays("1959-05-02", -10)).toEqual("1959-04-22T00:00:00.000Z");
  });
  test("should add d", () => {
    expect(addDays("1959-04-30", 1)).toEqual("1959-05-01T00:00:00.000Z");
  });
  test("should add e", () => {
    expect(addDays("1959-04-30TWHAT:EVER", 1)).toEqual(
      "1959-05-01T00:00:00.000Z",
    );
  });
  test("should add f", () => {
    expect(addDays("1959-04-30TWHAT:EVER", 366)).toEqual(
      "1960-04-30T00:00:00.000Z",
    );
  });
});

describe("daysFromNow ok", () => {
  test("some dates", () => {
    const dfna = daysFromNow("2045-08-03TWHAT:EVER", new Date(2045, 8 - 1, 1));
    expect(dfna).toEqual(2);
    const dfnb = daysFromNow("2045-07-31TWHAT:EVER", new Date(2045, 8 - 1, 1));
    expect(dfnb).toEqual(-1);
  });
});

describe("isValidISO8601", () => {
  test("good", () => {
    expect(isValidISO8601("2022-02-01")).toBeTruthy();
  });
  test("bad", () => {
    expect(isValidISO8601("NBD")).toBeFalsy();
    expect(isValidISO8601("2222-02-22x")).toBeFalsy();
  });
});

describe("midday", () => {
  test("good", () => {
    expect(midday("2022-02-01")).toEqual("2022-02-01T12:00:00.000Z");
  });
  test("bad", () => {
    expect(midday("NBD")).toEqual("NBDT12:00:00.000Z");
    expect(midday("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual(
      "ABCDEFGHIJT12:00:00.000Z",
    );
  });
});

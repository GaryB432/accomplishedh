import { beforeEach, describe, expect, test } from "vitest";
import { Tipper } from "./tipper";

describe("Tipper", (): void => {
  let tipper: Tipper;
  beforeEach((): void => {
    tipper = new Tipper();
  });
  test("constructs", (): void => {
    expect(tipper).toBeDefined();
  });

  test("polygon", () => {
    expect(
      Tipper.polygon([
        { x: 0, y: 0 },
        { x: 50, y: 0 },
        { x: 50, y: 100 },
        { x: 0, y: 100 },
      ]),
    ).toEqual("polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)");
  });
});

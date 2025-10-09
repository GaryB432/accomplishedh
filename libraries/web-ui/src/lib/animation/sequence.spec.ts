import { beforeEach, describe, expect, test } from "vitest";
import { Sequence } from "./sequence";

describe("Sequence", (): void => {
  let sequence: Sequence;
  beforeEach((): void => {
    sequence = new Sequence([]);
  });
  test("greets", (): void => {
    expect(sequence).toBeDefined();
  });
});

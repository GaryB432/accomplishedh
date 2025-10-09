import { describe, expect, test } from "vitest";
import { botdCommand } from "./botd.command";

describe("Botd Command", () => {
  test("should create an instance", () => {
    expect(botdCommand).toBeTruthy();
  });
});

import { describe, expect, test } from "vitest";

import { botdCommand } from "./botd.command.js";

describe("Botd Command", () => {
  test("should create an instance", () => {
    expect(botdCommand).toBeTruthy();
  });
});

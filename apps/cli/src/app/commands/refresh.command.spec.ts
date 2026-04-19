import { describe, expect, test } from "vitest";

import { refreshCommand } from "./refresh.command.js";

describe("Botd Command", () => {
  test("should create an instance", () => {
    expect(refreshCommand).toBeTruthy();
  });
});

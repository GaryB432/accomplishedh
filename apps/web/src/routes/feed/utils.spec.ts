import { describe, expect, test, vi } from "vitest";
import { homeOf } from "./utils";

describe("homeOf", () => {
  test("weird hosting", () => {
    const conLog = vi.spyOn(console, "log").mockImplementation(() => {});
    expect(() =>
      homeOf(
        "https://g.b.com:8080/hosted/lol/circus.app/feed/atom?probably=none",
      ),
    ).toThrow();
    expect(conLog).not.toHaveBeenCalled();
  });
  test("preview", () => {
    expect(homeOf("https://grbs-projects.sut.app/human/99")).toEqual(
      "https://grbs-projects.sut.app",
    );
  });
  test("prod", () => {
    expect(homeOf("https://humanaccomplishment.com/privacy")).toEqual(
      "https://humanaccomplishment.com",
    );
  });
  test("prod deep", () => {
    expect(
      homeOf("https://humanaccomplishment.com/some/kind/of/deep/404s"),
    ).toEqual("https://humanaccomplishment.com");
  });
  test("prod home", () => {
    expect(homeOf("https://humanaccomplishment.com")).toEqual(
      "https://humanaccomplishment.com",
    );
  });
  test("prod feed", () => {
    expect(homeOf("https://humanaccomplishment.com/feed/whatever")).toEqual(
      "https://humanaccomplishment.com",
    );
  });
  test("localhost", () => {
    expect(homeOf("http://localhost:9090/possibly/feed/whatever")).toEqual(
      "http://localhost:9090",
    );
  });
});

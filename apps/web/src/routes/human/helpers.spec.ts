import { describe, expect, test } from "vitest";
import { socialMediaDescription, imageSearchUrl } from "./helpers";

const martin = {
  serial: "631",
  name: "Martinus Beijerinck",
  yob: "1851",
  knownFor: "One of the founders of virology",
  inventory: "Science",
};

describe("Helpers", () => {
  test("Martinus Beijerinck", () => {
    expect(socialMediaDescription({ ...martin })).toEqual(
      "Bringing you the world's most accomplished humans: One of the founders of virology: Martinus Beijerinck",
    );
  });
  test("virologist", () => {
    expect(
      socialMediaDescription({ ...martin, knownFor: "virology ".repeat(50) }),
    ).toEqual(
      "Bringing you the world's most accomplished humans: Martinus Beijerinck",
    );
  });

  test("imageSearchUrlFor", () => {
    expect(imageSearchUrl(martin)).toEqual(
      "https://www.google.com/search?udm=2&q=portrait+Martinus+Beijerinck+1851",
    );
  });
});

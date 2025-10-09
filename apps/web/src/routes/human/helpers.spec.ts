import { describe, expect, test } from "vitest";
import { socialMediaDescription, imageSearchUrl, ogImage } from "./helpers";

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

  describe("ogImage", () => {
    test("ogImage a", () => {
      expect(ogImage({ img: {} })).toEqual(
        "https://humanaccomplishment.com/HA%20science.2400x2400.jpeg",
      );
    });
    test("ogImage b", () => {
      expect(ogImage({ img: { src: "//example.com/image.jpg" } })).toEqual(
        "https://example.com/image.jpg",
      );
    });
    test("ogImage c", () => {
      expect(
        ogImage({ img: { src: "https://example.com/image.jpg" } }),
      ).toEqual("https://example.com/image.jpg");
    });
  });
});

import { describe, expect, test, vi } from "vitest";
import { checkForTweet, humanUrl } from "./tweeter";

vi.mock("./style-functions", () => {
  return {
    coolors: {
      good: (s: string) => `g[${s}]`,
      warn: (s: string) => `w[${s}]`,
    },
  };
});

const martin = {
  serial: "631",
  name: "Martinus Beijerinck",
  yob: "1851",
  knownFor: "One of the founders of virology",
  inventory: "Science",
};

describe("Tweeter", () => {
  test("humanUrl", () => {
    expect(humanUrl(martin)).toEqual(
      "https://humanaccomplishment.com/human/631",
    );
  });

  test("checkForTweet", () => {
    const { valid, raw, enhancedText } = checkForTweet({
      ...martin,
      knownFor: "a fine gentleman",
    });
    expect(valid).toBeTruthy();
    expect(raw).toEqual(
      "Born this day 1851. a fine gentleman #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631",
    );
    expect(enhancedText).toEqual(
      "g[Born this day 1851. a fine gentleman #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631]",
    );
  });
  test("checkForTweet bad article", () => {
    const { valid, raw, enhancedText } = checkForTweet({
      ...martin,
      knownFor: "just BS",
    });
    expect(valid).toBeFalsy();
    expect(raw).toEqual(
      "Born this day 1851. just BS #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631",
    );
    expect(enhancedText).toEqual(
      "g[Born this day 1851. ]w[just]g[ BS #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631]",
    );
  });

  test("checkForTweet too long", () => {
    const { valid, raw, enhancedText } = checkForTweet({
      ...martin,
      knownFor:
        "a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore at repellendus nemo laborum voluptas, nesciunt veniam obcaecati suscipit inventore exercitationem tempora vitae odit alias necessitatibus. Cum voluptates autem corrupti repudiandae! Now is the time for all good men to come to the aid of their country!",
    });
    expect(valid).toBeFalsy();
    expect(raw).toEqual(
      "Born this day 1851. a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore at repellendus nemo laborum voluptas, nesciunt veniam obcaecati suscipit inventore exercitationem tempora vitae odit alias necessitatibus. Cum voluptates autem corrupti repudiandae! Now is the time for all good men to come to the aid of their country! #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631",
    );
    expect(enhancedText).toEqual(
      "g[Born this day 1851. a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore at repellendus nemo laborum voluptas, nesciunt veniam obcaecati suscipit inventore exercitationem tempora vitae odit alias necessitatibus. Cum voluptates autem corrupti repudiandae! Now is th]w[e time for all good men to come to the aid of their country! #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631]",
    );
  });

  test("checkForTweet 1 footnote", () => {
    const { valid, raw, enhancedText } = checkForTweet({
      ...martin,
      knownFor: "a figure [1] in the world",
    });
    expect(raw).toEqual(
      "Born this day 1851. a figure [1] in the world #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631",
    );
    expect(valid).toBeFalsy();
    expect(enhancedText).toEqual(
      "g[Born this day 1851. a figure]w[ [1]]g[ in the world #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631]",
    );
  });

  test("checkForTweet 2 footnote", () => {
    const { valid, raw, enhancedText } = checkForTweet({
      ...martin,
      knownFor: "an important figure[1] in the world of unit testing[205]",
    });
    expect(valid).toBeFalsy();
    expect(raw).toEqual(
      "Born this day 1851. an important figure[1] in the world of unit testing[205] #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631",
    );
    expect(enhancedText).toEqual(
      "g[Born this day 1851. an important figure]w[[1]]g[ in the world of unit testing]w[[205]]g[ #botd #humans #science #humanaccomplishment https://humanaccomplishment.com/human/631]",
    );
  });
});

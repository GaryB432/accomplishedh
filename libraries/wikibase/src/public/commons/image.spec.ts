import { describe, expect, test } from "vitest";

import { imageClaims } from "../../mocks/claims";
import { type CommonsImageInfo } from "../../types/commons";
import { getImageFromClaim } from "./image";

function hetch(
  input: globalThis.Request | string | URL,
  init?: RequestInit,
): Promise<Response> {
  if (typeof input !== "string") {
    throw new Error("we fetch strings around here");
  }

  return Promise.resolve(
    new Response(
      JSON.stringify({
        continue: { continue: "||", iistart: "2008-06-06T22:27:45Z" },
        query: {
          normalized: [
            {
              from: "File:Albert_Einstein_Head.jpg",
              to: "File:Albert Einstein Head.jpg",
            },
          ],
          pages: {
            "925243": {
              imageinfo: [info],
              imagerepository: "local",
              ns: 6,
              pageid: 925243,
              title: "File:Albert Einstein Head.jpg",
            },
          },
        },
      }),
      { status: 200 },
    ),
  );
}

describe("GetImageFromClaim", () => {
  test("getImageFromClaim", async () => {
    const img = await getImageFromClaim(imageClaims["P18"][0], hetch);
    expect(img).toEqual({
      id: "q937$B471B8E0-E688-4793-8E30-24C8389A8061",
      src: info.url,
    });
  });
});

const info: CommonsImageInfo = {
  descriptionshorturl:
    "https://commons.wikimedia.org/w/index.php?curid=63237057",
  descriptionurl:
    "https://commons.wikimedia.org/wiki/File:%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  extmetadata: {
    Assessments: {
      hidden: "",
      source: "commons-categories",
      value: "valued",
    },
    ImageDescription: {
      source: "commons-desc-page",
      value:
        '\u003Ca href="https://en.wikipedia.org/wiki/Albert_Einstein" class="extiw" title="en:Albert Einstein"\u003EAlbert Einstein\u003C/a\u003E',
    },
  },
  height: 576,
  mime: "image/jpeg",
  responsiveUrls: {
    "1.5":
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
    "2": "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  },
  size: 22174,
  thumbheight: 393,
  thumburl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg/330px-%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  thumbwidth: 330,
  url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  width: 484,
};

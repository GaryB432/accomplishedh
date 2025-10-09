import { describe, expect, test } from "vitest";
import { imageClaims } from "../../mocks/claims";
import { type CommonsImageInfo } from "../../types/commons";
import { getImageFromClaim } from "./image";

function hetch(
  input: string | URL | globalThis.Request,
  init?: RequestInit,
): Promise<Response> {
  if (typeof input !== "string") {
    throw new Error("we fetch strings around here");
  }

  return Promise.resolve(
    new Response(
      JSON.stringify({
        continue: { iistart: "2008-06-06T22:27:45Z", continue: "||" },
        query: {
          normalized: [
            {
              from: "File:Albert_Einstein_Head.jpg",
              to: "File:Albert Einstein Head.jpg",
            },
          ],
          pages: {
            "925243": {
              pageid: 925243,
              ns: 6,
              title: "File:Albert Einstein Head.jpg",
              imagerepository: "local",
              imageinfo: [info],
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
  size: 22174,
  width: 484,
  height: 576,
  thumburl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg/330px-%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  thumbwidth: 330,
  thumbheight: 393,
  responsiveUrls: {
    "2": "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
    "1.5":
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  },
  url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  descriptionurl:
    "https://commons.wikimedia.org/wiki/File:%D0%90%D0%BD%D1%80%D0%B8_%D0%9B%D1%83%D0%B8_%D0%9B%D0%B5_%D0%A8%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5.jpg",
  descriptionshorturl:
    "https://commons.wikimedia.org/w/index.php?curid=63237057",
  extmetadata: {
    Assessments: {
      value: "valued",
      source: "commons-categories",
      hidden: "",
    },
    ImageDescription: {
      value:
        '\u003Ca href="https://en.wikipedia.org/wiki/Albert_Einstein" class="extiw" title="en:Albert Einstein"\u003EAlbert Einstein\u003C/a\u003E',
      source: "commons-desc-page",
    },
  },
  mime: "image/jpeg",
};

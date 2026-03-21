import { WikiHuman } from "@accomplishedh/shared";
import { describe, expect, test } from "vitest";
import { CommonsPage, CommonsPages, CommonsResponse, ItemId } from "../types";
import { refreshPortraitThumbnails } from "./portrait-thumbnail";

const couplaQids = ["Q9847", "Q7840"];

function fetch(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<Response> {
  const u = URL.parse(String(input));
  const v = u?.searchParams.get("titles");
  if (v == couplaQids.join("|")) {
    return Promise.resolve(
      new Response(JSON.stringify(commonsPagesResponse(couplaQids))),
    );
  }
  return Promise.reject("404 on the 86");
}

const pages = couplaQids.reduce((a, id) => {
  const f: CommonsPage = {
    ns: 0,
    pageid: 0,
    title: "unused",
    thumbnail: {
      width: 15,
      height: 20,
      source: "//soon.com/".concat(id),
    },
  };

  a[id] = { ...f };
  return a;
}, {} as CommonsPages);

console.log(pages);

describe("PortraitThumbnail", () => {
  test("refreshes thumbnails", async () => {
    const subjects = couplaQids.map<Pick<WikiHuman, "portrait">>((id) => {
      return {
        entity: { id, type: "item" },
        portrait: {
          img: { src: "//up/a/old-wide.jpg", other: "gone", moar: "86" },
        },
      };
    });
    await refreshPortraitThumbnails(fetch, subjects, 220);
    expect(subjects).toMatchInlineSnapshot(`
      [
        {
          "entity": {
            "id": "Q9847",
            "type": "item",
          },
          "portrait": {
            "img": {
              "height": "0",
              "src": "https://up.wm.org/wp/commons/thumb/a/Q9847.jpg",
              "width": "220",
            },
          },
        },
        {
          "entity": {
            "id": "Q7840",
            "type": "item",
          },
          "portrait": {
            "img": {
              "height": "0",
              "src": "https://up.wm.org/wp/commons/thumb/a/Q7840.jpg",
              "width": "220",
            },
          },
        },
      ]
    `);
  });
});

function commonsPagesResponse(qids: ItemId[]): CommonsResponse {
  return {
    batchcomplete: "",
    query: {
      pages: qids
        .map<CommonsPage>((title, n) => {
          return {
            pageid: 500 + n,
            ns: 0,
            title,
            thumbnail: {
              source: `https://up.wm.org/wp/commons/thumb/a/${title}.jpg`,
              width: 220,
              height: 0,
            },
          };
        })
        .reduce((a, b) => {
          a[b.pageid] = b;
          return a;
        }, {} as CommonsPages),
    },
  };
}

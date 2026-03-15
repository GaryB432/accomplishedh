import { describe, expect, test } from "vitest";

import { entities_get_url, image_query_url } from "./urls";

describe("Urls", () => {
  test("wbgetentities", () => {
    expect(
      entities_get_url({ ids: ["Q1", "Q2"], props: ["labels", "claims"] }),
    ).toEqual(
      "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q1%7CQ2&props=labels%7Cclaims&languages=en&format=json&origin=*",
    );
  });
  test("queries", () => {
    expect(
      image_query_url([
        "Albert Einstein Head.jpg",
        "Vladimir Korolenko bw.jpg",
      ]),
    ).toEqual(
      "https://commons.wikimedia.org/w/api.php?action=query&titles=File%3AAlbert+Einstein+Head.jpg%7CFile%3AVladimir+Korolenko+bw.jpg&prop=imageinfo&iiprop=url%7Cmetadata%7Csize%7Cmime%7Cextmetadata&iiurlwidth=330&format=json&origin=*",
    );
  });
});

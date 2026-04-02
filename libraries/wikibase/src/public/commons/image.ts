import { type Portrait } from "@accomplishedh/shared";

import type { Claim, CommonsResponse } from "../../types.js";

import { image_query_url, thumbnail_query_url } from "../../data/urls.js";

type HTMLImgAttributes = {
  src: string;
};

export async function getImageFromClaim(
  claim: Claim,
  fetcher: (
    input: Request | string | URL,
    init?: RequestInit,
  ) => Promise<Response>,
): Promise<(Partial<HTMLImgAttributes> & { id: string }) | undefined> {
  const fetched = await fetcher(image_query_url([claim]));
  const nop = (await fetched.json()) as CommonsResponse;

  if (Object.keys(nop.query.pages).length === 1) {
    const page = Object.values(nop.query.pages).at(0);
    if (page?.imageinfo!.length === 1) {
      const { mime, url: src } = page.imageinfo.at(0)!;

      if (mime !== "image/jpeg") {
        console.log(mime, "not today");
        return undefined;
      }

      return {
        id: claim.id,
        src,
      };

      // return {
      //   id: claim.id,
      //   src: url!,
      //   width,
      // };
    }
  }
  throw new Error("incomplete batch of images");
}

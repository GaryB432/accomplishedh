import { type Portrait } from "@accomplishedh/shared";
import { image_query_url } from "../../data/urls.js";
import type { Claim, CommonsResponse } from "../../types.js";

type HTMLImgAttributes = {
  src: string;
};

export async function getPortraitFromClaim(
  claim: Claim,
  fetcher: (
    input: string | URL | Request,
    init?: RequestInit,
  ) => Promise<Response>,
): Promise<(Portrait & { id: string }) | undefined> {
  const fetched = await fetcher(image_query_url([claim]));
  let caption = "";
  const above = "Soon!";
  const nop = (await fetched.json()) as CommonsResponse;

  if (Object.keys(nop.query.pages).length === 1) {
    const page = Object.values(nop.query.pages).at(0);
    if (page?.imageinfo!.length === 1) {
      const { url: src, extmetadata, mime } = page.imageinfo.at(0)!;

      if (mime !== "image/jpeg") {
        console.log(mime, "not today");
        return undefined;
      }

      if (
        extmetadata &&
        extmetadata.ImageDescription &&
        typeof extmetadata.ImageDescription.value === "string"
      ) {
        caption = extmetadata.ImageDescription.value;
      }

      const img: HTMLImgAttributes = {
        src,
      };

      return {
        id: claim.id,
        above,
        caption,
        img,
      };
    }
  }
  throw new Error("incomplete batch of images");
}

export async function getImageFromClaim(
  claim: Claim,
  fetcher: (
    input: string | URL | Request,
    init?: RequestInit,
  ) => Promise<Response>,
): Promise<(Partial<HTMLImgAttributes> & { id: string }) | undefined> {
  const fetched = await fetcher(image_query_url([claim]));
  const nop = (await fetched.json()) as CommonsResponse;

  if (Object.keys(nop.query.pages).length === 1) {
    const page = Object.values(nop.query.pages).at(0);
    if (page?.imageinfo!.length === 1) {
      const { url: src, mime } = page.imageinfo.at(0)!;

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

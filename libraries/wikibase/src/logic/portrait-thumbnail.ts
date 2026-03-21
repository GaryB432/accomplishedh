import { type WikiHuman } from "@accomplishedh/shared";
import { thumbnail_query_url } from "../data/urls.js";
import type { CommonsPage, CommonsResponse } from "../types.js";

export async function refreshPortraitThumbnails(
  fetchr: typeof fetch,
  humans: Pick<WikiHuman, "entity" | "portrait">[],
  width = 220,
): Promise<void> {
  const thumb_response = await fetchr(
    thumbnail_query_url(
      humans.filter((h) => h.entity !== void 0).map((h) => h.entity!.id),
      width,
    ),
  );

  const reso = (await thumb_response.json()) as CommonsResponse;

  if (!thumb_response.ok) {
    throw new Error("incovenient thumb response");
  }

  if (!reso.continue) {
    const pageMap = Object.values(reso.query.pages).reduce<
      Record<string, CommonsPage>
    >((a, pg) => {
      a[pg.title] = pg;
      return a;
    }, {});

    humans
      .filter((h) => !!h.entity?.id)
      .forEach((h) => {
        const tn = pageMap[h.entity!.id];

        if (tn?.thumbnail) {
          h.portrait = {
            img: {
              src: tn.thumbnail.source.startsWith("//")
                ? `https:${tn.thumbnail.source}`
                : tn.thumbnail.source,
              height: String(tn.thumbnail.height),
              width: String(tn.thumbnail.width),
            },
          };
        }
      });
  }
}

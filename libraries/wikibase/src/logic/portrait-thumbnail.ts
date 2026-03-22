import { type WikiHuman } from "@accomplishedh/shared";
import { thumbnail_query_url } from "../data/urls.js";
import type { CommonsPage, CommonsResponse } from "../types.js";

export async function refreshPortraitThumbnails(
  fetchr: typeof fetch,
  humans: Pick<WikiHuman, "entity" | "portrait">[],
  width: number,
): Promise<void> {

  const turl = thumbnail_query_url(
    humans.filter((h) => h.entity && h.entity.id).map((h) => h.entity!.id),
    width,
  );
  const thumb_response = await fetchr(turl);

  const reso = (await thumb_response.json()) as CommonsResponse;

  if (!thumb_response.ok || reso.error) {
    throw new Error("incovenient thumb response");
  }

  if (reso.batchcomplete === "" && reso.query) {
    const pageMap = Object.values(reso.query.pages).reduce<
      Record<string, CommonsPage>
    >((a, pg) => {
      a[pg.title] = pg;
      return a;
    }, {});

    humans
      .filter((h) => h.entity && h.entity.id)
      .forEach((h) => {
        const tn = pageMap[h.entity!.id];

        if (tn?.thumbnail) {
          h.portrait = {
            img: {
              src: inferScheme(tn.thumbnail.source),
              height: String(tn.thumbnail.height),
              width: String(tn.thumbnail.width),
            },
          };
        }
      });
  }
}

function inferScheme(source: string): string {
  return source.startsWith("//") ? `https:${source}` : source;
}

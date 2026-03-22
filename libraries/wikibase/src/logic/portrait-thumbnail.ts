import { Portrait, type WikiHuman } from "@accomplishedh/shared";
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

  if (reso.batchcomplete === "") {
    reso.query ??= { pages: {} };
    const pageMap = Object.values(reso.query.pages).reduce<
      Record<string, CommonsPage>
    >((a, pg) => {
      a[pg.title] = pg;
      return a;
    }, {});

    humans.forEach((h) => {
      const tn = pageMap[h.entity!.id];
      h.portrait = freshNewPortrait(tn, width);
    });
  }
}

function inferScheme(source: string): string {
  return source.startsWith("//") ? `https:${source}` : source;
}

function freshNewPortrait(
  tn: CommonsPage | undefined,
  width: number,
): Portrait {
  const container = { pages: {}, ...tn };
  const height = Math.ceil((width * 11) / 9);
  container.thumbnail ??= {
    source: `//placehold.co/${width}x${height}?text=kthx`,
    width,
    height,
  };

  const img = {
    src: inferScheme(container.thumbnail.source),
    height: String(container.thumbnail.height),
    width: String(container.thumbnail.width),
  };

  return { img };
}

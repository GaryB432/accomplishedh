import type { Portrait, WikiHuman } from "@accomplishedh/shared";
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

  if (!thumb_response.ok) {
    console.error(thumb_response.statusText);
    throw new Error("Unexpected response from ", {
      cause: thumb_response.statusText,
    });
  }

  const reso = (await thumb_response.json()) as CommonsResponse;

  if (reso.error) {
    console.error(JSON.stringify(reso));
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
      const subjectThumbPage = pageMap[h.entity!.id];
      h.portrait = freshNewPortrait(subjectThumbPage, width);
    });
  }
}

function inferScheme(source: string): string {
  return source.startsWith("//") ? `https:${source}` : source;
}

function freshNewPortrait(
  subjectThumnail: CommonsPage | undefined,
  width: number,
): Portrait {
  const commonsPage = { ...subjectThumnail };
  const height = Math.ceil((width * 11) / 9);
  commonsPage.thumbnail ??= {
    source: `//placehold.co/${width}x${height}?text=kthx`,
    width,
    height,
  };

  const img = {
    src: inferScheme(commonsPage.thumbnail.source),
    height: String(commonsPage.thumbnail.height),
    width: String(commonsPage.thumbnail.width),
  };

  return { img };
}

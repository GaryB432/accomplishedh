import { type Portrait, type WikiHuman } from "@accomplishedh/shared";
import { thumbnail_query_url } from "../data/urls.js";
import type { CommonsPage, CommonsPages, CommonsResponse } from "../types.js";

export async function refreshPortraitThumbnails(
  fetchr: typeof fetch,
  humans: Pick<WikiHuman, "entity" | "portrait">[],
  width: number,
  online: boolean,
): Promise<void> {
  let reso: CommonsResponse = {
    batchcomplete: "",
    query: {
      pages: humans.reduce((a, b) => {
        a[b.entity!.id] = { ns: 0, title: b.entity!.id, pageid: 0 };
        return a;
      }, {} as CommonsPages),
    },
  };
  // console.log(workingResponseToWorkWith);
  const turl = thumbnail_query_url(
    humans.filter((h) => h.entity && h.entity.id).map((h) => h.entity!.id),
    width,
  );

  if (online) {
    const thumb_response = await fetchr(turl);
    if (!thumb_response.ok) {
      console.error(thumb_response.statusText);
      if (!thumb_response.statusText.startsWith("Too many requests")) {
        throw new Error(
          `Unexpected response from ${turl} ${thumb_response.status} ${thumb_response.statusText}`,
        );
      }
    }

    reso = (await thumb_response.json()) as CommonsResponse;
  }

  if (reso.error) {
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

function freshNewPortrait(
  subjectThumnail: CommonsPage | undefined,
  width: number,
): Portrait {
  const commonsPage = { ...subjectThumnail };
  const height = Math.ceil((width * 11) / 9);
  commonsPage.thumbnail ??= {
    height,
    source: `//placehold.co/${width}x${height}?text=soon`,
    width,
  };

  const img = {
    height: String(commonsPage.thumbnail.height),
    src: inferScheme(commonsPage.thumbnail.source),
    width: String(commonsPage.thumbnail.width),
  };

  return { img };
}

function inferScheme(source: string): string {
  return source.startsWith("//") ? `https:${source}` : source;
}

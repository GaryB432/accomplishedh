import { dev } from "$app/environment";
import { FeDataSvc } from "$lib/data/fe-data.svelte";
import type { FeaturedHuman } from "@accomplishedh/shared";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import {
  thumbnail_query_url,
  type WikibaseResponse,
} from "@accomplishedh/wikibase";
import type { CommonsResponse } from "@accomplishedh/wikibase/types";

export const load: PageServerLoad = async (ctx) => {
  const { locals, fetch } = ctx;
  try {
    const dataService = await FeDataSvc.create(fetch);
    const featuredHumans: FeaturedHuman[] | null =
      await dataService.getFeaturedHumans([locals.todayISO]);
    if (!featuredHumans) {
      error(503, "some bad things");
    }
    const ro = { humans: featuredHumans.map((fh) => fh.human) };

    const fdf = thumbnail_query_url(
      ro.humans.filter((h) => h.entity !== void 0).map((h) => h.entity!.id),
    );
    const jjk = await ctx.fetch(fdf);
    const bb = (await jjk.json()) as CommonsResponse;
    console.log(bb);
    if (!bb.batchcomplete) {
      console.log(bb.query.pages);
    }

    console.log(ro.humans[1].entity);

    const jjs = {
      batchcomplete: "",
      query: {
        pages: {
          "107545": {
            pageid: 107545,
            ns: 0,
            title: "Q104884",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Caspar_David_Friedrich%2C_Selvportr%C3%A6t%2C_1800%2C_KKSgb5006%2C_Statens_Museum_for_Kunst.jpg/330px-Caspar_David_Friedrich%2C_Selvportr%C3%A6t%2C_1800%2C_KKSgb5006%2C_Statens_Museum_for_Kunst.jpg",
              width: 320,
              height: 483,
            },
            pageimage:
              "Caspar_David_Friedrich,_Selvportr\u00e6t,_1800,_KKSgb5006,_Statens_Museum_for_Kunst.jpg",
          },
          "136656": {
            pageid: 136656,
            ns: 0,
            title: "Q134942",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Maugham_retouched.jpg/330px-Maugham_retouched.jpg",
              width: 320,
              height: 404,
            },
            pageimage: "Maugham_retouched.jpg",
          },
          "155638": {
            pageid: 155638,
            ns: 0,
            title: "Q154325",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Emil_Lenz.jpg/330px-Emil_Lenz.jpg",
              width: 320,
              height: 437,
            },
            pageimage: "Emil_Lenz.jpg",
          },
          "161312": {
            pageid: 161312,
            ns: 0,
            title: "Q160422",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Theo_van_Doesburg_in_military_service.JPG/330px-Theo_van_Doesburg_in_military_service.JPG",
              width: 320,
              height: 382,
            },
            pageimage: "Theo_van_Doesburg_in_military_service.JPG",
          },
          "206579": {
            pageid: 206579,
            ns: 0,
            title: "Q210798",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Huysmans_-_photo_Andr%C3%A9_Taponier.jpg/330px-Huysmans_-_photo_Andr%C3%A9_Taponier.jpg",
              width: 320,
              height: 239,
            },
            pageimage: "Huysmans_-_photo_Andr\u00e9_Taponier.jpg",
          },
          "477": {
            pageid: 477,
            ns: 0,
            title: "Q296",
            thumbnail: {
              source:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
              width: 320,
              height: 427,
            },
            pageimage: "Claude_Monet_1899_Nadar_crop.jpg",
          },
        },
      },
    };

    return { ro };
  } catch (e) {
    console.log(JSON.stringify(e));
    error(503, "nope");
  }
};

export const actions: Actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    const redirectTo = url.searchParams.get("redirectTo");

    if (theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365,
        secure: !dev,
      });
    }

    redirect(303, redirectTo ?? "/");
  },
};

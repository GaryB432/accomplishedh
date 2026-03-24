import { fetchEntities } from "$lib/wikibase/api";
import type { Entity, LanguageDictionary } from "@accomplishedh/wikibase";
import type { LayoutServerLoad } from "./$types";

type FlatFeaturedInfo = {
  on: string;
  serial: string;
  entity: string;
};

type AccomplishedHuman = {
  qid: string;
  serial: string | undefined;
  name: string;
};

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const featureds = await fetchDayFeatureds(ctx.fetch, ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(
  fetch: (s: string) => Promise<Response>,
  date: string,
): Promise<AccomplishedHuman[]> {
  // console.log(`fetureds for ${date} `);
  // const f = await fetch("/data/featureds.json");
  // if (!f.ok) {
  //   throw new Error(f.statusText);
  // }
  // const featureds = (await f.json()) as FeaturedEntity[];
  // console.log(featureds);

  const on = date;
  const featureds: FlatFeaturedInfo[] = [
    { on, serial: "8426", entity: "Q982518" },
    { on, serial: "5318", entity: "Q57983" },
    { on, serial: "2522", entity: "Q55030753" },
    { on, serial: "87", entity: "Q76579" },
    { on, serial: "2502", entity: "Q20882" },
  ];

  const ids = featureds.map<string>((f) => f.entity);
  const serials = featureds.reduce(
    (a, b) => {
      a[b.entity] = b.serial;
      return a;
    },
    {} as Record<string, string>,
  );

  const featuredEntities = await fetchEntities(fetch, ids, [
    "claims",
    "labels",
  ]);

  const entitiesToGo = Object.values(featuredEntities)
    // .map((f) => ({ ...f, serial: serials[f.id] }))
    .map(toAccomplishedH)
    .map((f) => ({ ...f, serial: serials[f.qid] }));
  console.log(entitiesToGo);
  return entitiesToGo;
}

function toAccomplishedH(
  subject: Entity,
  index: number,
  array: Entity[],
): AccomplishedHuman {
  const name: string = wval(subject.labels) ?? subject.id;
  const h: AccomplishedHuman = {
    qid: subject.id,
    serial: undefined,
    name,
  };
  return h;
}

function wval(
  dictionary: Readonly<LanguageDictionary> | undefined,
  language = "en",
): string | undefined {
  if (dictionary && language in dictionary) {
    return dictionary[language].value;
  }
}

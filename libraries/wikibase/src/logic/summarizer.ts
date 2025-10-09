import { batchify } from "@accomplishedh/shared";
import * as wbApi from "../data/api.js";
import { serialize } from "../data/globe-coordinate-value.js";
import { isoFrom } from "../data/timevalue.js";
import type { Entity, EntityId } from "../types.js";
import type { Snak } from "../types/snaks.js";
import { fromDictionary } from "./translators.js";

export type Summary = {
  summary: {
    claims: Record<string, string[]>;
    fun: boolean;
  };
};

export type SummarizedEntity = Entity & Summary;

export type SummarizedEntities = Record<EntityId, SummarizedEntity>;

const datatype_info_map = new Map([
  ["commonsMedia", true],
  ["globe-coordinate", true],
  ["monolingualtext", true],
  ["quantity", true],
  ["string", true],
  ["time", true],
  ["url", true],
  ["wikibase-item", true],
]);

function record_from(keys: string[]): Record<string, unknown> {
  return keys.reduce(
    (a, b) => {
      a[b] = b.concat("_");
      return a;
    },
    {} as Record<string, unknown>,
  );
}

/**
 * Get WikiData labels for a record of identifiers
 *
 * @param id_record an object whose keys are the wikidata IDs to apply
 * @returns an object whose entries are the english labels for the wikidata items
 */
export async function labelify(
  id_record: Record<string, unknown>,
): Promise<Record<string, string>> {
  const label_record: Record<string, string> = {};
  const batches = batchify(Object.keys(id_record));
  for (const batch of batches) {
    const labeled_people = await wbApi.fetchEntities(batch, ["labels"]);

    for (const ent of Object.values(labeled_people)) {
      label_record[ent.id] = fromDictionary(ent.labels); // .concat('@@');
    }
  }
  return label_record;
}

function byDataType(a: Snak, b: Snak): number {
  return a.datavalue && b.datavalue
    ? a.datavalue!.type.localeCompare(b.datavalue!.type)
    : 0;
}

function snakkedEntityId(snak: Snak): string | undefined {
  if (snak.datavalue?.type === "wikibase-entityid") {
    return snak.datavalue.value.id;
  }
  return undefined;
}

function hasSupportedDataType(snak: Snak): boolean {
  return datatype_info_map.has(snak.datatype);
}

function stringify_snak_value(
  snak: Snak,
  labelDictionary: Record<string, string>,
): string {
  const { datatype, datavalue } = snak;
  let stringed = JSON.stringify({ datavalue, datatype });

  switch (datatype) {
    case "external-id": {
      stringed = datavalue.value;
      break;
    }
    case "string": {
      stringed = datavalue.value;
      break;
    }
    case "commonsMedia": {
      // TODO handle commonsMedia #224
      stringed = datavalue.value;
      break;
    }
    case "globe-coordinate": {
      stringed =
        datavalue.type === "globecoordinate" ? serialize(datavalue) : "?";
      break;
    }

    case "url": {
      stringed = datavalue.value;
      break;
    }
    case "monolingualtext":
    case "wikibase-form":
    case "wikibase-lexeme":
    case "quantity": {
      // skip these from the get-go;
      break;
    }
    case "time": {
      stringed = datavalue.type === "time" ? isoFrom(datavalue) : "?";
      break;
    }
    case "wikibase-item": {
      if (datavalue.type === "wikibase-entityid") {
        stringed =
          labelDictionary[datavalue.value.id] ?? datavalue.type.concat("?");
      } else {
        stringed = datavalue.value;
      }
      break;
    }
    default: {
      console.log(JSON.stringify({ UNHANDLED: snak, t: datatype }));
      stringed = datatype.concat(" NO IDEA");
      break;
    }
  }

  return stringed;
}

async function fetch_label_dictionary_for_claimed_entities(
  entity: Entity,
): Promise<Record<string, string>> {
  const claims = entity.claims ?? {};

  const subject_snaks = Object.values(claims)
    .map((c) => c.map((d) => d.mainsnak))
    .flat()
    .filter(hasSupportedDataType)
    .filter((f) => f.snaktype === "value");

  const wikibase_entity_snaks = subject_snaks.filter(
    (s) => s.datavalue?.type === "wikibase-entityid",
  );

  const snaks_of_interest = wikibase_entity_snaks;

  const claimed_entities_qids = snaks_of_interest
    .map(snakkedEntityId)
    .filter((qid) => qid !== void 0);

  return labelify(record_from(claimed_entities_qids));
}

export async function summarize(entity: Entity): Promise<SummarizedEntity> {
  const subject = { ...entity };
  // const summary = { fun: false, claims: { coming: 'soon' } };

  // console.log(JSON.stringify(subject, undefined, 8));

  //

  const dictionary =
    (await fetch_label_dictionary_for_claimed_entities(subject)) ?? {};

  // const claims = entity.claims ?? {};

  const subject_snaks = Object.values(subject.claims ?? {})
    .map((c) =>
      c.filter((q) => q.mainsnak.snaktype === "value").map((d) => d.mainsnak),
    )
    .flat()
    .sort(byDataType);

  const property_dictionary_2b = subject_snaks.reduce(
    (a, b) => {
      let p = a[b.property];
      if (!p) {
        p = [];
        a[b.property] = p;
      }
      const v = stringify_snak_value(b, dictionary);
      p.push(v);
      return a;
    },
    {} as Record<string, string[]>,
  );

  const claims = property_dictionary_2b;

  return { ...subject, summary: { fun: true, claims } };
}

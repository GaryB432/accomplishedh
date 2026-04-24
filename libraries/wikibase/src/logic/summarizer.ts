import { batchify } from "@accomplishedh/shared";
import * as wbApi from "../data/api";
import { serialize } from "../data/globe-coordinate-value";
import { isoFrom } from "../data/timevalue";
import type { Entity, EntityId } from "../types";
import type { Snak } from "../types/snaks";
import { fromDictionary } from "./translators";

export type SummarizedEntities = Record<EntityId, SummarizedEntity>;

export type SummarizedEntity = Entity & Summary;

export type Summary = {
  summary: {
    claims: Record<string, string[]>;
    fun: boolean;
  };
};

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

  return { ...subject, summary: { claims, fun: true } };
}

function byDataType(a: Snak, b: Snak): number {
  return a.datavalue && b.datavalue
    ? a.datavalue!.type.localeCompare(b.datavalue!.type)
    : 0;
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

function hasSupportedDataType(snak: Snak): boolean {
  return datatype_info_map.has(snak.datatype);
}

function record_from(keys: string[]): Record<string, unknown> {
  return keys.reduce(
    (a, b) => {
      a[b] = b.concat("_");
      return a;
    },
    {} as Record<string, unknown>,
  );
}

function snakkedEntityId(snak: Snak): string | undefined {
  if (snak.datavalue?.type === "wikibase-entityid") {
    return snak.datavalue.value.id;
  }
  return undefined;
}

function stringify_snak_value(
  snak: Snak,
  labelDictionary: Record<string, string>,
): string {
  const { datatype, datavalue } = snak;
  let stringed = JSON.stringify({ datatype, datavalue });

  switch (datatype) {
    case "commonsMedia": {
      // TODO handle commonsMedia #224
      stringed = datavalue.value;
      break;
    }
    case "external-id": {
      stringed = datavalue.value;
      break;
    }
    case "globe-coordinate": {
      stringed =
        datavalue.type === "globecoordinate" ? serialize(datavalue) : "?";
      break;
    }
    case "monolingualtext":
    case "quantity":
    case "wikibase-form":
    case "wikibase-lexeme": {
      // skip these from the get-go;
      break;
    }
    case "string": {
      stringed = datavalue.value;
      break;
    }
    case "time": {
      stringed = datavalue.type === "time" ? isoFrom(datavalue) : "?";
      break;
    }
    case "url": {
      stringed = datavalue.value;
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
      console.log(JSON.stringify({ t: datatype, UNHANDLED: snak }));
      stringed = datatype.concat(" NO IDEA");
      break;
    }
  }

  return stringed;
}

export function asQid(value: string): `Q${number}` {
  if (!/^Q\d+$/.test(value)) {
    throw new Error(`Invalid field-of-work id: ${value}`);
  }

  return value as `Q${number}`;
}

export function extractValue(typedValue: { value: string }): string {
  const popped = typedValue.value.split("/").pop();
  if (!popped) {
    throw new Error("no pop");
  }
  return popped;
}

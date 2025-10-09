import type { EuroHuman } from "@accomplishedh/shared";
import type { Entities, Entity } from "../types.js";
import { WIKIDATA_PERSON_PROPERTIES as P } from "../constants.js";
import { isoFrom } from "../data/timevalue.js";

export function ΘfilterYob(
  flens: Readonly<Entities>,
  h: Pick<EuroHuman, "yob">,
): Entities {
  return Object.values(flens)
    .filter((e) => yobPredicate(e, h))
    .reduce((a, b) => {
      a[b.id] = b;
      return a;
    }, {} as Entities);
}

/**
 * return the first value of a record type
 * @param e record with only one entry
 * @returns the first value of the record
 */
export function firstAndOnly(e: Entities): Entity {
  const valls = Object.values(e);
  const keys = Object.keys(e);

  if (keys.length === 1) {
    return Object.values(e)[0]!;
  }
  throw new TypeError(`expected one element`, {
    cause: JSON.stringify(keys),
  });
}

/**
 * Filter OUT entities unlikely to match based on yob
 *
 * @param e the entity to check ha yob against
 * @returns false if there is a dob claim for an entity and it does not match h's yob, true otherwise
 */

const yobPredicate = (e: Entity, h: Pick<EuroHuman, "yob">) => {
  if (e.claims && e.claims[P.DATE_OF_BIRTH]) {
    const allEntityDobs = e.claims[P.DATE_OF_BIRTH];

    if (allEntityDobs) {
      const dobs = allEntityDobs.filter(
        (d) =>
          d.mainsnak.datavalue?.type === "time" &&
          d.mainsnak.datavalue.value.precision > 10,
      );
      if (dobs.length > 1) {
        // console.warn(
        //   JSON.stringify(
        //     dobs.map((d) => d.mainsnak.datavalue?.value),
        //     undefined,
        //     8,
        //   ),
        // );
        console.warn(`${dobs.length} high-precision DOB claims for ${e.id} `);
      }
      // TODO get the right one not necessarily the first one
      const dobclaim = dobs[0];
      if (dobclaim) {
        const { mainsnak } = dobclaim;
        if (mainsnak) {
          if (mainsnak.datavalue?.type === "time") {
            const ebd = isoFrom(mainsnak.datavalue).slice(0, 4);
            return h.yob === ebd;
          }
        }
      }
    }
  }
  return true;
};

export const isInstanceOfHuman = (entity: Entity): boolean => {
  const instanceOfClaims = entity.claims && entity.claims[P.INSTANCE_OF];
  return (
    !!instanceOfClaims &&
    instanceOfClaims.some(
      (g) =>
        g.mainsnak.datavalue &&
        g.mainsnak.datavalue.type === "wikibase-entityid" &&
        g.mainsnak.datavalue.value.id === "Q5",
    )
  );
};

import { describe, expect, test } from "vitest";

import type { Claims, Entities, Entity } from "../types";
import type { Snak } from "../types/snaks";

import { humanClaims, otherClaims, schoolClaims } from "../mocks/claims";
import { isInstanceOfHuman } from "./filters";

function filterHumans(flens: Entities): Entities {
  return Object.values(flens)
    .filter((h) => isInstanceOfHuman(h))
    .reduce((a, b) => {
      a[b.id] = b;
      return a;
    }, {} as Entities);
}

const Q420: Entity = {
  id: "Q420",
  labels: { blah: { value: "no english" } },
  type: "item",
};

describe("Filters", () => {
  test("filterHumans empty", () => {
    const hs = filterHumans({});
    expect(hs).toEqual({});
  });

  test("filterHumans", () => {
    const couplaPeeps = ["Q2", "Q6"];
    const ids = [...couplaPeeps, "Q4", "Q8"].sort();

    const hs = filterHumans(
      ids.reduce((a, id) => {
        a[id] = {
          claims: couplaPeeps.includes(id)
            ? { ...otherClaims, ...humanClaims }
            : { ...schoolClaims },
          id,
          type: "item",
        };
        return a;
      }, {} as Entities),
    );
    expect(Object.keys(hs)).toEqual(couplaPeeps);
  });
});

const bareClaim = { id: "", rank: "", type: "statement" as const };
const dobclaims: Claims = {
  Y1879: [
    {
      ...bareClaim,
      mainsnak: dobSnak("+1879-03-14T00:00:00Z"),
    },
  ],
  Y3000: [
    {
      ...bareClaim,
      mainsnak: dobSnak("+3000-03-14T00:00:00Z"),
    },
  ],
};

function dobSnak(time: string, precision = 11): Snak {
  return {
    datatype: "time" as const,
    datavalue: {
      type: "time" as const,
      value: {
        precision,
        time,
      },
    },
    property: "P569",
    snaktype: "value" as const,
  };
}

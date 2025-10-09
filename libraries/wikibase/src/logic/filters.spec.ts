import { describe, expect, test } from "vitest";
import { humanClaims, otherClaims, schoolClaims } from "../mocks/claims";
import type { Claims, Entities, Entity } from "../types";
import type { Snak } from "../types/snaks";
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
  labels: { blah: { value: "no english" } },
  id: "Q420",
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
          id,
          claims: couplaPeeps.includes(id)
            ? { ...otherClaims, ...humanClaims }
            : { ...schoolClaims },
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
    snaktype: "value" as const,
    property: "P569",
    datavalue: {
      value: {
        time,
        precision,
      },
      type: "time" as const,
    },
    datatype: "time" as const,
  };
}

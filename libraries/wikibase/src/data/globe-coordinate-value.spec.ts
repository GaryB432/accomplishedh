import { describe, expect, test } from "vitest";

import { serialize } from "./globe-coordinate-value";

const snak = {
  snaktype: "value",
  property: "P625",
  datavalue: {
    value: {
      latitude: 48.148333,
      longitude: 11.57,
      altitude: null,
      precision: 0.000001,
      globe: "http://www.wikidata.org/entity/Q2",
    },
    type: "globecoordinate" as const,
  },
  datatype: "globe-coordinate",
};

describe("GlobeCoordinateValue", () => {
  test("serialize", () => {
    expect(serialize(snak.datavalue)).toEqual("(48.1483,11.5700)");
  });
});

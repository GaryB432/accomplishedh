import { describe, expect, test } from "vitest";

import { serialize } from "./globe-coordinate-value";

const snak = {
  datatype: "globe-coordinate",
  datavalue: {
    type: "globecoordinate" as const,
    value: {
      altitude: null,
      globe: "http://www.wikidata.org/entity/Q2",
      latitude: 48.148333,
      longitude: 11.57,
      precision: 0.000001,
    },
  },
  property: "P625",
  snaktype: "value",
};

describe("GlobeCoordinateValue", () => {
  test("serialize", () => {
    expect(serialize(snak.datavalue)).toEqual("(48.1483,11.5700)");
  });
});

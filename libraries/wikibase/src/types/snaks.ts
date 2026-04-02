export type Snak =
  | CommonsMediaSnak
  | ExternalIdSnak
  | GlobeCoordinateSnak
  | MonolinqualTextSnak
  | QuantitySnak
  | StringSnak
  | TimeSnak
  | UrlSnak
  | WikibaseItemSnak;
type CommonsMediaSnak = StringSnak & {
  datatype: "commonsMedia";
};

type ExternalIdSnak = ValueTypeSnak & {
  datatype: "external-id";
  datavalue: {
    type: "string";
    value: string;
  };
};
type GlobeCoordinateSnak = ValueTypeSnak & {
  datatype: "globe-coordinate";
  datavalue: {
    type: "globecoordinate";
    value: {
      latitude: number;
      longitude: number;
      precision: number;
    };
  };
};
type MonolinqualTextSnak = (SomeValueTypeSnak | ValueTypeSnak) & {
  datatype: "monolingualtext";
  datavalue?: {
    type: "monolingualtext";
    value: { language: string; text: string };
  };
};
type QuantitySnak = ValueTypeSnak & {
  datatype: "quantity";
  datavalue: {
    type: "quantity";
    value: { amount: string; unit: string };
  };
};
type SomeValueTypeSnak = {
  property: string;
  snaktype: "novalue" | "somevalue";
};
type StringSnak = ValueTypeSnak & {
  datatype: string;
  datavalue: {
    type: "string";
    value: string;
  };
};
type TimeSnak = ValueTypeSnak & {
  datatype: "time";
  datavalue: {
    type: "time";
    value: {
      after?: number;
      before?: number;
      calendarmodel?: "http://www.wikidata.org/entity/Q1985727";
      precision: number;
      time: string;
      timezone?: number;
    };
  };
};
type UrlSnak = StringSnak & {
  datatype: "url";
};
type ValueTypeSnak = {
  property: string;
  snaktype: "value";
};
type WikibaseItemSnak = ValueTypeSnak & {
  datatype: "wikibase-item";
  datavalue: {
    type: "wikibase-entityid";
    value: {
      "entity-type": string;
      id: string;
      "numeric-id"?: number;
    };
  };
};

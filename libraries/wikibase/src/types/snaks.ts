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
type CommonsMediaSnak = {
  datatype: "commonsMedia";
} & StringSnak;

type ExternalIdSnak = {
  datatype: "external-id";
  datavalue: {
    type: "string";
    value: string;
  };
} & ValueTypeSnak;
type GlobeCoordinateSnak = {
  datatype: "globe-coordinate";
  datavalue: {
    type: "globecoordinate";
    value: {
      latitude: number;
      longitude: number;
      precision: number;
    };
  };
} & ValueTypeSnak;
type MonolinqualTextSnak = {
  datatype: "monolingualtext";
  datavalue?: {
    type: "monolingualtext";
    value: { language: string; text: string };
  };
} & (SomeValueTypeSnak | ValueTypeSnak);
type QuantitySnak = {
  datatype: "quantity";
  datavalue: {
    type: "quantity";
    value: { amount: string; unit: string };
  };
} & ValueTypeSnak;
type SomeValueTypeSnak = {
  property: string;
  snaktype: "novalue" | "somevalue";
};
type StringSnak = {
  datatype: string;
  datavalue: {
    type: "string";
    value: string;
  };
} & ValueTypeSnak;
type TimeSnak = {
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
} & ValueTypeSnak;
type UrlSnak = {
  datatype: "url";
} & StringSnak;
type ValueTypeSnak = {
  property: string;
  snaktype: "value";
};
type WikibaseItemSnak = {
  datatype: "wikibase-item";
  datavalue: {
    type: "wikibase-entityid";
    value: {
      "entity-type": string;
      id: string;
      "numeric-id"?: number;
    };
  };
} & ValueTypeSnak;

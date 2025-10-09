import type { Snak } from "./types/snaks.js";
export type EntityId = string;
export type Entity = Item;
export type Entities = Record<EntityId, Entity>;
export type ΘLanguageDictionary = {
  [languageKey: string]: { language?: string; value: string };
};
export type Item = {
  aliases?: Record<string, { language?: string; value: string }[]>;
  claims?: Claims;
  descriptions?: ΘLanguageDictionary;
  id: string;
  labels?: ΘLanguageDictionary;
  sitelinks?: Record<
    string,
    { badges: unknown[]; site: string; title: string; url: string }
  >;
  title?: string;
  type: "item";
};
export type WikibaseConfig = {
  commons: string;
  sparql: string;
  wikidata: string;
};
export type ItemId = string;

export type Claim = {
  id: string;
  mainsnak: Snak;
  qualifiers?: unknown;
  "qualifiers-order"?: string[];
  rank: string;
  references?: unknown;
  type: "statement";
};
export type Claims = Record<string, Claim[]>;

export type { WikibaseResponse } from "./types/responses.js";
export type { Snak } from "./types/snaks.js";

type ExtMetadataProperty = {
  hidden?: string;
  source:
    | "mediawiki-metadata"
    | "commons-templates"
    | "commons-categories"
    | "commons-desc-page"
    | "extension";
  value: number | string;
};

type ExtMetadata = {
  Artist: ExtMetadataProperty;
  Assessments: ExtMetadataProperty;
  AttributionRequired: ExtMetadataProperty;
  Categories: ExtMetadataProperty;
  CommonsMetadataExtension: ExtMetadataProperty;
  Copyrighted: ExtMetadataProperty;
  Credit: ExtMetadataProperty;
  DateTime: ExtMetadataProperty;
  DateTimeOriginal: ExtMetadataProperty;
  ImageDescription: ExtMetadataProperty;
  License: ExtMetadataProperty;
  LicenseShortName: ExtMetadataProperty;
  ObjectName: ExtMetadataProperty;
  Restrictions: ExtMetadataProperty;
  UsageTerms: ExtMetadataProperty;
};

interface CommonsImageInfo {
  descriptionshorturl: string;
  descriptionurl: string;
  extmetadata: Partial<ExtMetadata>;
  height: number;
  metadata?: {
    name: "MEDIAWIKI_EXIF_VERSION";
    value: number;
  }[];
  mime: "image/jpeg";
  responsiveUrls: CommonsResponsiveUrls;
  size: number;
  thumbheight: number;
  thumburl: string;
  thumbwidth: number;
  url: string;
  width: number;
}

type CommonsResponsiveUrls = Record<number, string>;

type CommonsBasicResponse = {
  batchComplete?: unknown;
  continue?: unknown;
  query: CommonsQuery;
};

interface CommonsQuery {
  normalized?: Commons[];
  pages: CommonsPages;
}
interface Commons {
  from: string;
  to: string;
}

export type CommonsPages = Record<string, CommonsPage>;

export interface CommonsPage {
  imageinfo?: CommonsImageInfo[];
  imagerepository: string;
  ns: number;
  pageid: number;
  title: string;
}

type CommonsCompleteResponse = CommonsBasicResponse & {
  batchComplete: unknown;
  continue?: never;
};

type CommonsContinueResponse = CommonsBasicResponse & {
  batchComplete?: never;
  continue: {
    continue: string;
    iistart: string;
  };
};

export type CommonsResponse = CommonsCompleteResponse | CommonsContinueResponse;

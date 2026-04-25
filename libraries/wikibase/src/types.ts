import type { Snak } from "./types/snaks";
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
export interface CommonsPage {
  imageinfo?: CommonsImageInfo[];
  imagerepository?: string;
  ns: number;
  pageid: number;
  pageimage?: string;
  thumbnail?: {
    height: number;
    source: string;
    width: number;
  };
  title: string;
}
export type CommonsPages = Record<string, CommonsPage>;
export type CommonsResponse = CommonsCompleteResponse | CommonsContinueResponse;
export type Entities = Record<EntityId, Entity>;
export type Entity = Item;

export type EntityId = string;
export type Item = {
  aliases?: Record<string, { language?: string; value: string }[]>;
  claims?: Claims;
  descriptions?: LanguageDictionary;
  id: string;
  labels?: LanguageDictionary;
  sitelinks?: Record<
    string,
    { badges: unknown[]; site: string; title: string; url: string }
  >;
  title?: string;
  type: "item";
};

export type {
  Binding,
  WikibaseResponse,
  QueryBindingsResponse,
} from "./types/responses";
export type { Snak } from "./types/snaks";

export type ItemId = string;

export type LanguageDictionary = {
  [languageKey: string]: { language?: string; value: string };
};

export type WikibaseConfig = {
  commons: string;
  sparql: string;
  wikidata: string;
};

interface Commons {
  from: string;
  to: string;
}

type CommonsBasicResponse = {
  batchcomplete?: unknown;
  continue?: unknown;
  error?: unknown;
  query: CommonsQuery;
};

type CommonsCompleteResponse = CommonsBasicResponse & {
  batchcomplete?: unknown;
  continue?: never;
};
type CommonsContinueResponse = CommonsBasicResponse & {
  batchcomplete?: never;
  continue: {
    continue: string;
    iistart: string;
  };
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

interface CommonsQuery {
  normalized?: Commons[];
  pages: CommonsPages;
}

type CommonsResponsiveUrls = Record<number, string>;

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

type ExtMetadataProperty = {
  hidden?: string;
  source:
    | "commons-categories"
    | "commons-desc-page"
    | "commons-templates"
    | "extension"
    | "mediawiki-metadata";
  value: number | string;
};

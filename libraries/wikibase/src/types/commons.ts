export type CommonsImageInfo = ImageInfo;

export type CommonsQueryResponse = CompleteResponse | ContinueResponse;

type BasicResponse = {
  query: Query;
};

type CompleteResponse = BasicResponse & {
  batchcomplete: unknown;
};

type ContinueResponse = BasicResponse & {
  continue: {
    continue: string;
    iistart: string;
  };
};

interface ImageInfo {
  descriptionshorturl: string;
  descriptionurl: string;
  extmetadata: Record<
    string,
    {
      hidden?: string;
      source: string;
      value: number | string;
    }
  >;
  height: number;
  metadata?: {
    name: "MEDIAWIKI_EXIF_VERSION";
    value: number;
  }[];
  mime: "image/jpeg";
  responsiveUrls: ResponsiveUrls;
  size: number;
  thumbheight: number;
  thumburl: string;
  thumbwidth: number;
  url: string;
  width: number;
}

interface NormalizedEntity {
  from: string;
  to: string;
}

interface Page {
  imageinfo?: ImageInfo[];
  imagerepository: string;
  ns: number;
  pageid: number;
  title: string;
}

type Pages = Record<string, Page>;

interface Query {
  normalized?: NormalizedEntity[];
  pages: Pages;
}
type ResponsiveUrls = Record<string, string>;

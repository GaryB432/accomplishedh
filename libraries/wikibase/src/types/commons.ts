type ResponsiveUrls = Record<string, string>;

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

interface Query {
  normalized?: NormalizedEntity[];
  pages: Pages;
}

type BasicResponse = {
  query: Query;
};

interface Page {
  imageinfo?: ImageInfo[];
  imagerepository: string;
  ns: number;
  pageid: number;
  title: string;
}

type Pages = Record<string, Page>;

interface NormalizedEntity {
  from: string;
  to: string;
}

type CompleteResponse = BasicResponse & {
  batchcomplete: unknown;
};

type ContinueResponse = BasicResponse & {
  continue: {
    continue: string;
    iistart: string;
  };
};

export type CommonsQueryResponse = CompleteResponse | ContinueResponse;
export type CommonsImageInfo = ImageInfo;

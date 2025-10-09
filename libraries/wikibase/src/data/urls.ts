import type { Claim, WikibaseConfig } from "../types.js";

export type EntityPropertyName =
  | "aliases"
  | "claims"
  | "datatype"
  | "descriptions"
  | "info"
  | "labels"
  | "sitelinks"
  | "sitelinks/urls";

export type ImagePropertyName =
  | "extmetadata"
  | "metadata"
  | "mime"
  | "size"
  | "url";

const config: WikibaseConfig = {
  commons: "https://commons.wikimedia.org",
  wikidata: "https://www.wikidata.org",
  sparql: "https://query.wikidata.org",
};

const urlsBases = {
  commons: new URL("w/api.php", config.commons),
  wikidata: new URL("w/api.php", config.wikidata),
  sparql: new URL("w/api.php", config.sparql),
};

const language = "en";

export function entities_get_url(options: {
  ids: string[];
  props?: EntityPropertyName[];
}): string {
  if (options.ids.length > 50) {
    throw new RangeError("api is rate limited to 50 entities");
  }
  const url = new URL(urlsBases.wikidata);
  url.searchParams.append("action", "wbgetentities");
  url.searchParams.append("ids", options.ids.join("|"));
  if (options.props) url.searchParams.append("props", options.props.join("|"));
  url.searchParams.append("languages", "en");
  url.searchParams.append("format", "json");
  url.searchParams.append("origin", "*");
  return url.href;
}

export function entity_searh_url(name: string): string {
  // https://www.wikidata.org/wiki/Special:ItemByTitle?site=enwiki&page=einstein&format=json
  const url = new URL(urlsBases.wikidata);
  url.searchParams.append("action", "wbsearchentities");
  url.searchParams.append("search", name);
  url.searchParams.append("language", language);
  url.searchParams.append("limit", "20");
  url.searchParams.append("format", "json");
  url.searchParams.append("uselang", language);
  url.searchParams.append("type", "item");
  return url.href;
}

export function image_query_url(titles: (string | Claim)[]): string {
  const url = new URL(urlsBases.commons);
  // const name_of_thing = 'x';
  url.searchParams.append("action", "query");
  url.searchParams.append(
    "titles",
    titles
      .map<string>((m) => {
        let file_title: string;
        if (typeof m === "string") {
          file_title = m;
        } else {
          if (m.mainsnak.datatype === "commonsMedia") {
            file_title = m.mainsnak.datavalue.value;
          } else {
            throw new Error("unexpected datatype");
          }
        }

        return "File:".concat(file_title);
      })
      .join("|"),
  );
  url.searchParams.append("prop", "imageinfo");
  url.searchParams.append(
    "iiprop",
    ["url", "metadata", "size", "mime", "extmetadata"].join("|"),
  );
  url.searchParams.append("iiurlwidth", "330");
  url.searchParams.append("format", "json");
  url.searchParams.append("origin", "*");
  return url.href;
}

export function sparql(sql: string): string {
  const url = new URL("sparql", config.sparql);
  url.searchParams.append("query", sql);
  url.searchParams.append("format", "json");
  return url.href;
}

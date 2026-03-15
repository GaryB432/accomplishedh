import type { EuroHuman, Portrait } from "@accomplishedh/shared";

export function socialMediaDescription(
  human: Pick<EuroHuman, "name" | "knownFor">,
): string {
  const bringing = "Bringing you the world's most accomplished humans";
  let desc = `${bringing}: ${human.knownFor}: ${human.name}`;
  if (desc.length > 300) {
    desc = `${bringing}: ${human.name}`;
  }
  return desc;
}

export function imageSearchUrl(human: Pick<EuroHuman, "name" | "yob">): string {
  const url = new URL("search", "https://www.google.com/search");
  const qs = ["portrait", human.name, human.yob];
  url.searchParams.append("udm", "2");
  url.searchParams.append("q", qs.join(" "));
  return url.toString();
}

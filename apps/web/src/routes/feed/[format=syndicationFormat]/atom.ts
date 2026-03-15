import {
  encodeHTML,
  isValidISO8601,
  midday,
  type FeaturedHuman,
} from "@accomplishedh/shared";
import * as path from "node:path";
import { type XmlObject } from "xml";

function encodedHTML(s: string): [XmlObject, string] {
  return [{ _attr: { type: "html" } }, encodeHTML(s)];
}

export async function feed(
  hs: Readonly<FeaturedHuman>[],
  baseHref: string,
  todayIso: string,
): Promise<XmlObject> {
  if (!isValidISO8601(todayIso)) {
    throw new Error(`"${todayIso}" is not a date we can use atm`);
  }

  const today = midday(todayIso);

  const featuredEntries = hs
    .toReversed()
    .filter((h) => !(h.stamp > today))
    .map((h) => {
      const updated = midday(h.stamp);
      const entry = {
        entry: [
          { id: `urn:uri:${h.id}` },
          { title: `${h.human.name}` },
          { updated },
          {
            link: [
              {
                _attr: {
                  rel: "alternate",
                  type: "text/html",
                  href: new URL(
                    path.join("featured", h.id.slice(0, 8)),
                    baseHref,
                  ).href,
                },
              },
            ],
          },
          {
            link: [
              {
                _attr: {
                  rel: "enclosure",
                  type: "image/jpeg",
                  href: "https:".concat(h.human.portrait.img["src"]),
                },
              },
            ],
          },
          {
            content: encodedHTML(
              `<h1>${h.human.name}</h1><div>${h.human.knownFor}</div>`,
            ),
          },
        ],
      };
      return entry;
    });

  const feed = [
    { _attr: { xmlns: "http://www.w3.org/2005/Atom" } },
    { title: [{ _attr: { type: "text" } }, "Human Accomplishment"] },
    {
      subtitle: encodedHTML(
        "Bringing you the <em>most</em> accomplished humans every day",
      ),
    },

    { updated: today },

    {
      id: baseHref,
    },
    {
      link: [
        {
          _attr: {
            rel: "alternate",
            type: "text/html",
            hreflang: "en",
            href: baseHref,
          },
        },
      ],
    },
    {
      link: [
        {
          _attr: {
            rel: "self",
            type: "application/atom+xml",
            href: new URL("feed/atom", baseHref).href,
          },
        },
      ],
    },
    { author: { name: "Human Accomplishment Editors" } },
    {
      author: [
        { name: "Human Accomplishment Editors" },
        { email: "editor@accomplishedh.com" },
      ],
    },
    {
      rights: `Copyright (c) ${todayIso.slice(0, 4)}, Human Accomplishment`,
    },
    ...featuredEntries,
  ];
  return { feed };
}

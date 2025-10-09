import type { EuroHuman, FeaturedHuman } from "@accomplishedh/shared";
import { describe, expect, test } from "vitest";

import { feed } from "./atom";
import { homeOf } from "../utils";

// vi.mock('xml', () => {
//   return {
//     default: vi.fn(() => {
//       return `<sorry>nope</sorry>`;
//     }),
//   };
// });

describe("Atom", () => {
  const JUL95 = "2095-07-31";

  const yesterday = new Date(Date.parse(JUL95) - 1 * 24 * 60 * 60 * 1000);

  const someNearbyDays = Array(5)
    .fill(0)
    .map((_, n) => {
      const nd = new Date(yesterday);
      nd.setDate(nd.getDate() + n);
      return nd.toISOString().slice(0, 10);
    });

  test("feed", async () => {
    const atom = await feed(
      someNearbyDays.flatMap<FeaturedHuman>((stamp, dn) => {
        return Array(3)
          .fill(0)
          .map((_, n) => {
            const seq = dn * 3 + n;
            const dseq = seq.toString().padStart(6, "0");
            const name = `SUBJECT ${seq.toString().padStart(6, "0")}`;
            return {
              human: {
                ...defh,
                serial: dseq,
                id: dseq.padStart(10, "0"),
                name,
                knownFor: `a guy featured on ${stamp}`,
                wikibase: { entity: { id: `Q${dseq}` } },
                portrait: {
                  above: "Rudolf Albert von Kölliker",
                  img: {
                    alt: "Kölliker Rudolph Albert von 1818-1902.jpg",
                    src: `//upload.wikimedia.org/wikipedia/commons/thumb/p${seq}.jpg`,
                    width: "250",
                    height: "335",
                  },
                },
              },
              id: `dfh${seq}`,
              stamp,
            };
          });
      }),
      homeOf("https://projects.hoster.app/feed/atom"),
      JUL95,
    );
    expect(atom).toMatchSnapshot();
  });
});

const defh: EuroHuman = {
  adultbasic: "Britain",
  adultregion: "E.SE",
  yob: "1903",
  death: "1975-05-20T00:00:00.000Z",
  dob: "01-10",
  era: "1800+",
  id: "",
  inventory: "Art.West",
  knownFor: "",
  name: "",
  osfName: "",
  portrait: {
    img: { fun: "yep" },
  },
  props: [],
  serial: "-1",
  sr: undefined,
};

// <?xml version="1.0" encoding="utf-8"?>
//    <feed xmlns="http://www.w3.org/2005/Atom">
//      <title type="text">dive into mark</title>
//      <subtitle type="html">
//        A &lt;em&gt;lot&lt;/em&gt; of effort
//        went into making this effortless
//      </subtitle>
//      <updated>2005-07-31T12:29:29Z</updated>
//      <id>tag:example.org,2003:3</id>
//      <link rel="alternate" type="text/html"
//       hreflang="en" href="http://example.org/"/>
//      <link rel="self" type="application/atom+xml"
//       href="http://example.org/feed.atom"/>
//      <rights>Copyright (c) 2003, Mark Pilgrim</rights>
//      <generator uri="http://www.example.com/" version="1.0">ddd
//        Example Toolkit
//      </generator>
//      <entry>
//        <title>Atom draft-07 snapshot</title>
//        <link rel="alternate" type="text/html"
//         href="http://example.org/2005/04/02/atom"/>
//        <link rel="enclosure" type="audio/mpeg" length="1337"
//         href="http://example.org/audio/ph34r_my_podcast.mp3"/>
//        <id>tag:example.org,2003:3.2397</id>
//        <updated>2005-07-31T12:29:29Z</updated>
//        <published>2003-12-13T08:29:29-04:00</published>
//        <author>
//          <name>Mark Pilgrim</name>
//          <uri>http://example.org/</uri>
//          <email>f8dy@example.com</email>
//        </author>
//        <contributor>
//          <name>Sam Ruby</name>
//        </contributor>
//        <contributor>
//          <name>Joe Gregorio</name>
//        </contributor>
//        <content type="xhtml" xml:lang="en"
//         xml:base="http://diveintomark.org/">
//          <div xmlns="http://www.w3.org/1999/xhtml">
//            <p><i>[Update: The Atom draft is finished.]</i></p>
//          </div>
//        </content>
//      </entry>
//    </feed>

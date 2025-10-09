import type { EuroHuman, Portrait } from "@accomplishedh/shared";
import { describe, expect, test } from "vitest";
import { featuredCommand, fillout, portraitedOnly } from "./featured.command";

describe("Featured Command", () => {
  test("should create an instance", () => {
    expect(featuredCommand).toBeTruthy();
  });
  test("fillout", () => {
    expect(fillout([], 4).length).toEqual(0);
    expect(fillout(["a", "b", "c"], 4)).toEqual(["a", "b", "c", "a"]);
    expect(fillout(["a"], 4)).toEqual(["a", "a", "a", "a"]);
    /* prettier-ignore */
    expect(fillout(['a', 'b', 'c'], 13)).toEqual(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a',]);
  });

  test("gets portraitedOnly", () => {
    const defh: EuroHuman = {
      adultbasic: "Britain",
      adultregion: "E.SE",
      yob: "1903",
      death: "1975-05-20T00:00:00.000Z",
      dob: "01-10",
      era: "1800+",
      id: "",
      inventory: "Art.West",
      knownFor: "a completely ficticious person",
      name: "*** MISSING PERSON ***",
      osfName: "",
      portrait: {
        img: { fun: "yep" },
      },
      props: [],
      serial: "-1",
      sr: undefined,
    };

    const portraits: Portrait[] = [
      { img: { fun: "yes" } },
      { img: { src: "" } },
      { img: { src: "http://tbd.com" } },
      { img: {} },
    ];

    expect(
      portraitedOnly(
        portraits.map<EuroHuman>((portrait) => ({ ...defh, portrait })),
      ),
    ).toHaveLength(1);
  });
});

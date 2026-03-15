import { describe, expect, test } from "vitest";

import { add, greet, meaning } from "./sparql";

describe("Sparql", () => {
  test("adds", () => {
    expect(add(2, 3)).toEqual(5);
  });
  test("greets", () => {
    expect(greet("world")).toEqual("sparql says: hello to world");
  });
  test("meaning", () => {
    expect(meaning.life).toEqual(42);
  });
});
import { getInventoryQuery } from "./sparql";

describe("Query", () => {
  test("getQuery", () => {
    expect(
      getInventoryQuery({
        adultbasic: "",
        adultregion: "",
        death: "",
        dob: "",
        era: "",
        id: "",
        inventory: "Science",
        knownFor: "",
        name: "",
        osfName: "",
        portrait: { img: {} },
        props: [],
        serial: "",
        yob: "1879",
      }),
    ).toEqual(
      "SELECT DISTINCT ?item WHERE { ?item wdt:P31 wd:Q5; wdt:P569 ?date_of_birth; wdt:P101 ?field. FILTER (YEAR(?date_of_birth) = 1879) ?field wdt:P279* wd:Q336. }",
    );
  });
});

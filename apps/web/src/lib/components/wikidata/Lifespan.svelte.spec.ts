import { WIKIDATA_PERSON_PROPERTIES as P } from "@accomplishedh/wikibase";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";
import Lifespan from "./Lifespan.svelte";

test("date of birth is in document", async () => {
  const screen = render(Lifespan, {
    entity: {
      id: "",
      type: "item",
      summary: {
        claims: {
          [P.DATE_OF_BIRTH]: ["1957-01-29"],
          [P.PLACE_OF_BIRTH]: ["POB"],
          [P.DATE_OF_DEATH]: ["1962-12-31"],
          [P.PLACE_OF_DEATH]: ["POD"],
          [P.MANNER_OF_DEATH]: ["MANNER"],
          [P.CAUSE_OF_DEATH]: ["CAUSE"],
        },
        fun: false,
      },
    },
  });

  await expect
    .element(screen.getByText("January 29, 1957, POB"))
    .toBeInTheDocument();
  await expect
    .element(screen.getByText("December 31, 1962, POD, CAUSE, MANNER"))
    .toBeInTheDocument();
});

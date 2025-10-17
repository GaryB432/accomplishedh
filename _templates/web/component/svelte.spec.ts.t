---
to: apps/web/src/lib/components/<%= h.toKebabCase(name) %>.svelte.spec.ts
---
import { WIKIDATA_PERSON_PROPERTIES as P } from "@accomplishedh/wikibase";
import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";
import <%= h.toPascalCase(name) %> from "./<%= h.toKebabCase(name) %>.svelte";

test("<%= name %>", async () => {

<% if (minimal) { %>
  console.log('please')
<% } else { %>
test("no manner", async () => {
  const screen = render(<%= h.toPascalCase(name)%>, {
    entity: {
      id: "",
      type: "item",
      summary: {
        claims: {
          [P.DATE_OF_BIRTH]: ["1957-01-29"],
          [P.PLACE_OF_BIRTH]: ["POB"],
          [P.DATE_OF_DEATH]: ["1962-12-31"],
          [P.PLACE_OF_DEATH]: ["POD"],
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
    .element(screen.getByText("December 31, 1962, POD, CAUSE "))
    .toBeInTheDocument();
});

test("no cause", async () => {
  const screen = render(<%= h.toKebabCase(name) %>, {
    entity: {
      id: "",
      type: "item",
      summary: {
        claims: {
          [P.DATE_OF_BIRTH]: ["1957-01-29"],
          [P.PLACE_OF_BIRTH]: ["POB"],
          [P.DATE_OF_DEATH]: ["1962-12-31"],
          [P.PLACE_OF_DEATH]: ["POD"],
        },
        fun: false,
      },
    },
  });

  await expect
    .element(screen.getByText("January 29, 1957, POB"))
    .toBeInTheDocument();
  await expect
    .element(screen.getByText("December 31, 1962, POD "))
    .toBeInTheDocument();
});

<% } %>
test("<%= h.toKebabCase(name) %>", async () => {
  const screen = render(<%= h.toPascalCase(name) %>, {
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

});

// Generated <%= h.now() %>

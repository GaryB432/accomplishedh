---
to: apps/web/src/lib/components/<%= h.toKebabCase(name) %>.svelte
---
<script lang="ts">
  // Generated at: <%= h.now() %>
  import {
    WIKIDATA_PERSON_PROPERTIES as P,
    type SummarizedEntity,
  } from "@accomplishedh/wikibase";

  type Props = { entity: SummarizedEntity };
  let { entity }: Props = $props();

  let dob = $derived(new Date(entity.summary.claims[P.DATE_OF_BIRTH]![0]));
  let pob = $derived(entity.summary.claims[P.PLACE_OF_BIRTH]!);
<% if (!minimal) { %>
  let dod = $derived(new Date(entity.summary.claims[P.DATE_OF_DEATH]![0]));
  let pod = $derived(entity.summary.claims[P.PLACE_OF_DEATH]!);
  let cod = $derived(entity.summary.claims[P.CAUSE_OF_DEATH]!);
  let mod = $derived(entity.summary.claims[P.MANNER_OF_DEATH]!);
  let detailsod = $derived.by(() => {
    return [longDate(dod), pod, cod, mod]
      .filter((n) => n !== void 0)
      .join(", ");
  });

  function longDate(date: Date): string {
    return Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }
<% } %>
</script>

<div class="wikidata-cap"><%= Name %> works</div>
<% if (!minimal) { %>
<div class="content wikidata-card">
  <h1>Born</h1>
  <div class="det">
    <div>
      <span class="dob">{longDate(dob)}</span>,
      <span class="pob">{pob}</span>
    </div>
  </div>
  <h1>Died</h1>
  <div class="det">
    <div>
      {detailsod}
    </div>
  </div>
</div>
<% } %>
<style>
  .content {
    display: grid;
    align-items: baseline;
    grid-template-columns: min-content 1fr;
    gap: calc(var(--padding) / 2);
    padding: var(--padding);
  }
<% if (!minimal) { %>
  h1 {
    font-weight: bold;
  }
<% } %></style>

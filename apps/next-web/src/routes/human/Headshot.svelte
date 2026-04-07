<script lang="ts">
  import type { CommonsResponse, Item } from "@accomplishedh/wikibase/types";

  import { thumbnail_query_url } from "$lib/wikibase/urls";
  import { firstAndOnly } from "@accomplishedh/shared";
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";

  type Props = {
    subject: Item;
  };

  // const humanProperties = ["P18", "P106"];

  const width = 320;

  let { subject }: Props = $props();

  let claimsRecord = $derived(Object.values(subject.claims ?? {}));

  let manyClaimClaimsForSubject = $derived(Object.values(claimsRecord));

  onMount(async () => {
    const thumbnailUrl = thumbnail_query_url([subject.id], width);

    const thumb_response = await fetch(thumbnailUrl);

    const headshotResponse = (await thumb_response.json()) as CommonsResponse;

    const headshotPage = firstAndOnly(headshotResponse.query.pages);
    if (!headshotPage) {
      error(503, "unexpected fd875632");
    }
    console.log(headshotPage.thumbnail, "csr");

    // if (reso.batchcomplete === "") {
    //   reso.query ??= { pages: {} };
    //   const pageMap = Object.values(reso.query.pages).reduce<
    //     Record<string, CommonsPage>
    //   >((a, pg) => {
    //     a[pg.title] = pg;
    //     return a;
    //   }, {});

    //   // humans.forEach((h) => {
    //   //   const subjectThumbPage = pageMap[h.entity!.id];
    //   //   h.portrait = freshNewPortrait(subjectThumbPage, width);
    //   // });
    //   console.log(pageMap);
    // }
  });
</script>

{#each manyClaimClaimsForSubject as propa, i (i)}
  <hr />
  {#each propa as propb (propb.mainsnak.property)}
    <p>
      {propb.mainsnak.property} hye
    </p>
  {/each}
{/each}

<!-- 
{#await fetch("https://example.com").then((r) => r.json())}
  <p>Loading...</p>
{:then data}
  <p>Data: {data.name}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await} -->

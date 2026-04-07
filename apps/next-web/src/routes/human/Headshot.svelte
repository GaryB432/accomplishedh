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

  const width = 200;

  let { subject }: Props = $props();

  async function petch<T>(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<T> {
    const r = await globalThis.fetch(input, init);
    if (r.ok) {
      return r.json() as Promise<T>;
    }
    error(503, "cannot d8a9sdf59");
  }

  async function fetchThumbnails() {
    return await petch<CommonsResponse>(thumbnailUrl);
  }

  // let claimsRecord = $derived(Object.values(subject.claims ?? {}));

  const thumbnailUrl = $derived(thumbnail_query_url([subject.id], width));

  const thumb_response = $derived(fetch(thumbnailUrl));

  onMount(async () => {
    // const headshotResponse = (await thumb_response.json()) as CommonsResponse;
    // const headshotPage = firstAndOnly(headshotResponse.query.pages);
    // if (!headshotPage) {
    //   error(503, "unexpected fd875632");
    // }
    // console.log(headshotPage.thumbnail, "csr");
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

<!-- 

{#each manyClaimClaimsForSubject as propa, i (i)}
  <hr />
{/each} 

-->

{#await fetchThumbnails()}
  hang on
{:then d}
  {@const { pages } = d.query}
  {@const me = firstAndOnly(pages)}
  {#if me && me.thumbnail}
    {@const { thumbnail } = me}
    <img
      src={thumbnail.source}
      height={thumbnail.height}
      width={thumbnail.width}
      alt=""
    />
  {/if}
{/await}

<!-- 

{#await thumb_response.then((r) => r.json())}
  <p>Loading...</p>
{:then data}
  {@const { pages } = data.query}

  <p>{JSON.stringify(pages, undefined, 2)}</p>
  {#each pages as page (page.id)}
    <p>
      {JSON.stringify(page.thumbnail.sourcef)} hye
    </p>
    crap here
  {/each}
{:catch error}
  <p>Error: {error.message}</p>
{/await}
bottomf 


-->

<script lang="ts">
  import type { CommonsResponse, Item } from "@accomplishedh/wikibase/types";

  import { thumbnail_query_url } from "$lib/wikibase/urls";
  import { firstAndOnly, sleep } from "@accomplishedh/shared";
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";

  type Props = {
    subject: Item;
  };

  const width = 200;

  let { subject }: Props = $props();

  let fetchThumbnails: Promise<CommonsResponse> | null = $state(null);

  async function sleepyFetch<T>(
    input: Request | string | URL,
    init?: RequestInit,
  ): Promise<T> {
    await sleep(2000);
    const r = await globalThis.fetch(input, init);
    if (r.ok) {
      return r.json() as Promise<T>;
    }
    error(503, "cannot d8a9sdf59s");
  }

  const thumbnailUrl = $derived(thumbnail_query_url([subject.id], width));

  onMount(() => {
    fetchThumbnails = sleepyFetch(thumbnailUrl);
  });
</script>

{#if fetchThumbnails}
  {#await fetchThumbnails}
    hang on
  {:then headshotResponse}
    {#if headshotResponse}
      {@const { pages } = headshotResponse.query}
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
    {/if}
  {/await}
{/if}

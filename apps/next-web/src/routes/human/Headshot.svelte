<script lang="ts">
  import type { CommonsResponse, Item } from "@accomplishedh/wikibase/types";

  import { sleepyFetch } from "$lib";
  import { thumbnail_query_url } from "$lib/wikibase/urls";
  import { firstAndOnly } from "@accomplishedh/shared";
  import { onMount } from "svelte";

  type Props = {
    subject: Item;
  };

  const width = 200;

  let { subject }: Props = $props();

  let fetchThumbnails: null | Promise<CommonsResponse> = $state(null);

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

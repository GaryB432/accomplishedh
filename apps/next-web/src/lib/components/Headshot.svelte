<script lang="ts">
  import { sleepyFetch } from "$lib";
  import { thumbnail_query_url } from "$lib/wikibase/urls";
  import { firstAndOnly } from "@accomplishedh/shared";
  import type { CommonsResponse, Item } from "@accomplishedh/wikibase/types";

  type Props = {
    subject: Item;
    width?: number;
  };

  let { subject, width = 400 }: Props = $props();

  const fetchThumbnails = $derived<Promise<CommonsResponse>>(
    sleepyFetch<CommonsResponse>(
      thumbnail_query_url([subject.id], width),
      undefined,
      0,
    ),
  );
</script>

{#if fetchThumbnails}
  {#await fetchThumbnails}
    hang on
  {:then headshotResponse}
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
  {/await}
{/if}

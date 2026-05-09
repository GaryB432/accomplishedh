<script lang="ts">
  import { fetchEntities } from "$lib/wikibase/api";
  import { firstAndOnly } from "@accomplishedh/shared";
  import { summarize, type SummarizedEntity } from "@accomplishedh/wikibase";

  let { qid }: { qid?: string } = $props();

  const summary = $derived(summarizeQid());

  async function summarizeQid(): Promise<SummarizedEntity> {
    const sub = await fetchEntities(globalThis.fetch, [qid ?? ""], ["claims"]);
    return summarize(firstAndOnly(sub)!);
  }
</script>

<article>
  {#if qid}
    {#await summary}
      Retrieving {qid}
    {:then summ}
      {#if summ}
        {#each Object.entries(summ.summary.claims) as [pkey, strs] (pkey)}
          <div>
            {pkey}
            {strs.join(" and ")}
          </div>
        {/each}
      {/if}
    {/await}
  {/if}
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    outline: 1px solid var(--some-color);

    padding: 0.5em;
  }
</style>

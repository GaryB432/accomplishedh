<script lang="ts">
  import { fetchEntities } from "$lib/wikibase/api";
  import { firstAndOnly } from "@accomplishedh/shared";
  import { summarize, type SummarizedEntity } from "@accomplishedh/wikibase";

  let { qid }: { qid?: string } = $props();

  const summary = $derived(summarizeQid());

  async function summarizeQid(): Promise<SummarizedEntity> {
    const sub = await fetchEntities(globalThis.fetch, [qid ?? ""], ["claims", "labels"]);
    return summarize(firstAndOnly(sub)!);
  }
</script>

<article class="sidebar">
  {#if qid}
    {#await summary}
      <p class="status">Retrieving {qid}</p>
    {:then summ}
      {#if summ}
        <div class="claims">
          {#each Object.entries(summ.summary.claims) as [pkey, strs] (pkey)}
            <div class="claim-row">
              <p class="claim-key">{pkey}</p>
              <p class="claim-value">{strs.join(" and ")}</p>
            </div>
          {/each}
        </div>
      {/if}
    {/await}
  {:else}
    <p class="status">Select a person node to view details.</p>
  {/if}
</article>

<style>
  .sidebar {
    height: 100%;
    min-height: 0;
    margin: 0;
    padding: 0.75rem;
    overflow-y: auto;
    display: block;
  }

  .status {
    margin: 0;
    color: color-mix(in srgb, var(--text), transparent 35%);
    font-size: 0.95rem;
  }

  .claims {
    display: grid;
    gap: 0.6rem;
  }

  .claim-row {
    border: 1px solid color-mix(in srgb, var(--text), transparent 80%);
    border-radius: 0.45rem;
    padding: 0.45rem 0.55rem;
    background: color-mix(in srgb, var(--bg), var(--text) 2%);
  }

  .claim-key,
  .claim-value {
    margin: 0;
  }

  .claim-key {
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.02em;
  }

  .claim-value {
    margin-top: 0.15rem;
  }
</style>

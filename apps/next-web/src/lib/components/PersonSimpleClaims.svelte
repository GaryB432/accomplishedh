<script lang="ts">
  import { fetchEntities } from "$lib/wikibase/api";
  import { firstAndOnly } from "@accomplishedh/shared";
  import type { Claims, Item } from "@accomplishedh/wikibase/types";

  let { qid }: { qid?: string } = $props();

  const summary = $derived(summarizeQid());

  type SummarizedEntity = { summary: { claims: Record<string, string[]> } };

  function summarize(_entity: Item): PromiseLike<SummarizedEntity> {
    const cs = _entity.claims ?? {};
    // const p101 = cs["P101"] ?? [];

    // const jj = p101.map(pp=> pp.mainsnak.datatype)

    const someOfTRhem = Object.values(_entity.claims ?? {});

    const flatclaims = someOfTRhem.flat();

    const basics = flatclaims.reduce((a, claim) => {
      a[claim.mainsnak.property] = [
        ...(a[claim.mainsnak.property] ?? []),
        claim,
      ];
      return a;
    }, {} as Claims);

    const stringyClaims = flatclaims.reduce(
      (a, b) => {
        console.log("handle", b);

        // const canary = {a: b.mainsnak.datavalue, b: b.mainsnak.datatype, c: b.mainsnak.snaktype}

        a[b.mainsnak.property] ??= [];
        a[b.mainsnak.property].push(
          `something about ${JSON.stringify(b.mainsnak, null, 1)}`,
        );
        return a;
      },
      {} as Record<string, string[]>,
    );

    console.log(JSON.stringify(stringyClaims, null, 2));

    const totallyFakeResponse = {
      summary: {
        claims: {
          P101: ["P101", "so soon"],
          P403: ["light switches"],
          P785: ["now", "is", "the", "time"],
        },
      },
    };
    // const multiples = someOfTRhem.filter((qs) => qs.length !== 1);
    // console.log(JSON.stringify(multiples, null, 2), "<- multiples! plain and tall");

    return Promise.resolve({ summary: { claims: stringyClaims } });
  }

  async function summarizeQid(): Promise<SummarizedEntity> {
    const sub = await fetchEntities(
      globalThis.fetch,
      [qid ?? ""],
      ["claims", "labels"],
    );
    return summarize(firstAndOnly(sub)!);
  }
</script>

<article class="sidebar">
  {#if qid}
    {#await summary}
      <p class="status">Retrieving {qid}</p>
    {:then summ}
      {#if summ}
        <div class="claims" data-testid="claims-list">
          {#each Object.entries(summ.summary.claims) as [pkey, strs] (pkey)}
            <div class="claim-row">
              <p class="claim-key">{pkey}</p>
              <p class="claim-value">{strs.join(", ")}</p>
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
    border: thin solid red;
    flex: 1;
    min-height: 0;
    min-width: 0;
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

<script lang="ts">
  import { fetchEntities } from "$lib/wikibase/api";
  import { WIKIDATA_PERSON_PROPERTIES } from "@accomplishedh/wikibase";
  import type { Claims, Entities, Snak } from "@accomplishedh/wikibase/types";

  let { claims }: { claims: Claims } = $props();

  type SummarizedEntity_reduced_to_strings = {
    summary: { claims: Record<string, string[]> };
  };

  let fetchedPersonPropertyLabels = $state<Promise<Entities>>(
    fetchEntities(fetch, Object.values(WIKIDATA_PERSON_PROPERTIES), ["labels"]),
  );

  let summaryPromise = $derived(summarizeClaims(claims));

  async function summarizeClaims(
    claims: Claims,
  ): Promise<SummarizedEntity_reduced_to_strings> {
    const someOfTRhem = Object.values(claims ?? {});

    const flatclaims = someOfTRhem.flat();

    const _claimsMap = flatclaims
      .map((c) => c.mainsnak)
      .filter(
        (snak) =>
          snak.snaktype === "value" &&
          Object.values(WIKIDATA_PERSON_PROPERTIES).includes(snak.property),
      )
      .reduce((a, snak) => {
        const propSnaks = a.getOrInsert(snak.property, []);
        propSnaks.push(snak);
        return a;
      }, new Map<string, Snak[]>());

    const labeled_person_entities = await fetchedPersonPropertyLabels;

    // console.log(fdf);
    // console.log(labeled_person_entities);

    // const _basics = flatclaims.reduce((a, claim) => {
    //   a[claim.mainsnak.property] = [
    //     ...(a[claim.mainsnak.property] ?? []),
    //     claim,
    //   ];
    //   return a;
    // }, {} as Claims);

    const stringyClaims = flatclaims.reduce(
      (a, b) => {
        // console.log("handle", b);
        const property_info = labeled_person_entities[b.mainsnak.property];
        if (property_info) {
          const lnd = property_info.labels ?? { en: { value: "?" } };
          // console.log(property_info.labels);
          a[b.mainsnak.property] ??= [];
          a[b.mainsnak.property].push(
            `something about ${JSON.stringify(b.mainsnak, null, 1)} ${lnd["en"].value}`,
          );
        }

        return a;
      },
      {} as Record<string, string[]>,
    );

    // const totallyFakeResponse = {
    //   summary: {
    //     claims: {
    //       P101: ["P101", "so soon"],
    //       P403: ["light switches"],
    //       P785: ["now", "is", "the", "time"],
    //     },
    //   },
    // };

    return Promise.resolve({ summary: { claims: stringyClaims } });
  }
</script>

<article class="sidebar">
  {#if claims}
    {#await summaryPromise}
      <p class="status">Retrieving claims</p>
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

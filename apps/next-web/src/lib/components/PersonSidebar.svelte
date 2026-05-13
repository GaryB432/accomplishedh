<script lang="ts">
  import { fetchEntities } from "$lib/wikibase/api";
  import { firstAndOnly } from "@accomplishedh/shared";
  import {
    WIKIDATA_PERSON_PROPERTIES as p,
    summarize,
    type SummarizedEntity,
  } from "@accomplishedh/wikibase";

  let { qid }: { qid?: string } = $props();

  const summary = $derived(summarizeQid());

  const propsOfInterest = new Set([
    p.AWARD_RECEIVED,
    p.BIBLIOGRAPHY,
    p.CAUSE_OF_DEATH,
    p.CHILD,
    p.COUNTRY_OF_CITIZENSHIP,
    p.DATE_OF_BIRTH,
    p.DATE_OF_DEATH,
    p.DOCTORAL_ADVISOR,
    p.DOCTORAL_STUDENT,
    p.EDUCATED_AT,
    p.EMPLOYER,
    p.FAMILY_NAME,
    p.FATHER,
    p.FIELD_OF_WORK,
    p.GENDER,
    p.GIVEN_NAME,
    p.HEIGHT,
    p.IMAGE,
    p.LANGUAGE_SPOKEN,
    p.MANNER_OF_DEATH,
    p.MEMBER_OF,
    p.MOTHER,
    p.NATIVE_LANGUAGE,
    p.NOTABLE_WORK,
    p.OCCUPATION,
    p.OFFICIAL_WEBSITE,
    p.PLACE_OF_BIRTH,
    p.PLACE_OF_DEATH,
    p.POLITICAL_PARTY,
    p.POSITION_HELD,
    p.RELIGION,
    p.RESIDENCE,
    p.SPOUSE,
  ]);

  async function summarizeQid(): Promise<SummarizedEntity> {
    const sub = await fetchEntities(
      globalThis.fetch,
      [qid ?? ""],
      ["claims", "labels"],
    );

    const the_subject = firstAndOnly(sub)!;
    the_subject.claims = Object.keys(the_subject.claims ?? {})
      .filter((k) => propsOfInterest.has(k))
      .reduce(
        (a, b) => {
          a[b] = the_subject.claims![b];
          return a;
        },
        { ...the_subject.claims },
      );

    const that_summary = await summarize(the_subject);
    return that_summary;
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

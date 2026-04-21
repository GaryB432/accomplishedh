<script lang="ts">
  import type { Entities } from "@accomplishedh/wikibase";

  import { fetchEntities } from "$lib/wikibase/api";
  import {
    type Entity,
    WIKIDATA_PERSON_PROPERTIES as p,
  } from "$lib/wikibase/types";
  import { fromDictionary } from "$lib/wikibase/utils";
  import { onMount } from "svelte";

  let { subject }: { subject: Entity } = $props();

  let subjectClaims = $derived(subject.claims ?? {});

  let fieldClaims = $derived(subjectClaims[p.FIELD_OF_WORK] ?? []);

  const fowValues = $derived(
    fieldClaims
      .map((s) => s.mainsnak.datavalue)
      .filter((v) => v?.type === "wikibase-entityid"),
  );

  let labels = $state<Promise<Entities>>();

  onMount(() => {
    labels = fetchEntities(
      globalThis.fetch,
      fowValues.map((v) => v.value.id),
      ["labels"],
    );
  });
</script>

<article>
  {#await labels}
    hang on more
  {:then pls}
    {#if pls}
      {#each Object.values(pls) as fow (fow.id)}
        <div title={fromDictionary(fow.labels)}>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 100 100"
            xmlns="http://w3.org"
          >
            <!-- Solid Background for better visibility -->
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="#f0f0f0"
              stroke="#000"
              stroke-width="4"
            />

            <!-- Bold, Centered Text -->
            <text
              x="50"
              y="52"
              text-anchor="middle"
              dominant-baseline="middle"
              font-family="system-ui, sans-serif"
              font-size="32"
              font-weight="800"
              fill="#000"
            >
              TBD
            </text>
          </svg>
        </div>
      {/each}
    {/if}
  {/await}
</article>

<style>
  article {
    outline: 1px solid var(--text);
    max-width: 8rem;
    overflow: hidden;
    display: flex;
  }

  svg {
    vertical-align: middle;
  }
</style>

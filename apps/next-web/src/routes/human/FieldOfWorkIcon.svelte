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
      <ul>
        {#each Object.values(pls) as fow (fow.id)}
          <li>
            {fromDictionary(fow.labels)}
          </li>
        {/each}
      </ul>
    {/if}
  {/await}
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    max-width: 30ch;
    outline: 1px solid var(--some-color);
    overflow: hidden;
    padding: 0.5em;
    text-align: center;
  }

  article:hover {
    animation: tada 1s;
  }

  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
</style>

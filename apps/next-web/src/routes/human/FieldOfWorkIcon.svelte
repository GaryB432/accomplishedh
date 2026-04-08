<script lang="ts">
  import {
    WIKIDATA_PERSON_PROPERTIES as p,
    type Entity,
  } from "$lib/wikibase/types";
  import { entities_get_url } from "$lib/wikibase/urls";

  let { subject }: { subject: Entity } = $props();

  let subjectClaims = $derived(subject.claims ?? {});

  const fowValues = $derived(
    subjectClaims[p.FIELD_OF_WORK]
      .map((s) => s.mainsnak.datavalue)
      .filter((v) => v?.type === "wikibase-entityid"),
  );

  const labels: Promise<Response> = $derived(
    fetch(
      entities_get_url({
        ids: fowValues.map((v) => v.value.id),
        props: ["labels"],
      }),
    ),
  );

  
</script>

<article>
  {#each fowValues as snakvv}
    <p>
      {snakvv.value.id}
    </p>
  {/each}
</article>

{#await labels}
  hi
{:then pls}
  {#await pls.json()}
    almost
  {:then j}
    {JSON.stringify(j)}
  {/await}
{/await}

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

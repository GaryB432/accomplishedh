<script lang="ts">
  import {
    WIKIDATA_PERSON_PROPERTIES as p,
    type Claim,
    type Entity,
  } from "$lib/wikibase/types";

  let { subject }: { subject: Entity } = $props();

  let wikibaseEntityClaimsNotEncyclopedium = $derived(
    Object.values(subject.claims![p.FIELD_OF_WORK])
      .filter((c) => {
        return (
          c.mainsnak.datavalue?.type === "wikibase-entityid" &&
          c.mainsnak.datavalue.value["entity-type"] === "item"
        );
      })
      .map((c) => c.mainsnak),
  );
</script>

{#if subject.claims}
  <article>
    {#each wikibaseEntityClaimsNotEncyclopedium as snak}
      <p>
        {JSON.stringify(snak.datavalue?.value)}
      </p>
    {/each}
  </article>
{/if}

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

<script lang="ts">
  import { resolve } from "$app/paths";
  import type { Entity } from "$lib/wikibase/types.js";
  import { fromDictionary } from "$lib/wikibase/utils";
  import type { AccomplishedHuman } from "@accomplishedh/shared";
  import Headshot from "./human/Headshot.svelte";

  type DailyFeatured = AccomplishedHuman & { wb: Entity };

  type Props = {
    featureds: DailyFeatured[];
  };

  let { featureds }: Props = $props();

  let dailySix = $derived(featureds.slice(0, 6));
</script>

{#each dailySix as df, index (df.wb.id)}
  <a class="person-card" href={resolve("/human/[id]", { id: df.wb.id })}>
    <span class="rank" aria-hidden="true"
      >{String(index + 1).padStart(2, "0")}</span
    >
    <span class="portrait">
      <Headshot subject={{ ...df.wb, type: "item" }} />
    </span>
    <span class="person-copy">
      <span class="person-name">{df.name}</span>
      {#if fromDictionary(df.wb.descriptions)}
        <span class="person-description"
          >{fromDictionary(df.wb.descriptions)}</span
        >
      {/if}
    </span>
  </a>
{/each}

<style>
  .person-card {
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    color: inherit;
    display: grid;
    gap: 0.85rem;
    grid-template-columns: auto 4.75rem minmax(0, 1fr);
    min-height: 6.5rem;
    overflow: hidden;
    padding: 0.75rem;
    text-decoration: none;
    transition:
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease;
  }

  .person-card:focus-visible,
  .person-card:hover {
    border-color: var(--primary);
    box-shadow: 0 12px 28px rgba(20, 34, 43, 0.12);
    transform: translateY(-1px);
  }

  .rank {
    align-self: stretch;
    color: var(--primary);
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 900;
    justify-content: center;
    width: 2rem;
  }

  .portrait {
    aspect-ratio: 1;
    background: linear-gradient(
        135deg,
        rgba(31, 186, 186, 0.15),
        transparent 58%
      ),
      var(--tertiary);
    border: 1px solid var(--line);
    border-radius: 8px;
    display: grid;
    overflow: hidden;
    place-items: center;
  }

  .portrait :global(img) {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .person-copy {
    display: grid;
    gap: 0.35rem;
    min-width: 0;
  }

  .person-name {
    font-size: 1.03rem;
    font-weight: 900;
    line-height: 1.15;
  }

  .person-description {
    color: var(--muted);
    display: -webkit-box;
    font-size: 0.88rem;
    line-height: 1.35;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
</style>

<script lang="ts">
  import type { SummarizedEntity } from '@accomplishedh/wikibase';
  type Props = { entity: SummarizedEntity };
  let { entity }: Props = $props();
</script>

{#if entity.sitelinks}
  <section class="wikidata">
    <h1>Site Links</h1>
    <div class="bod">
      {#each Object.values(entity.sitelinks) as sitelink (sitelink.site)}
        <div>
          <a href={sitelink.url} title={sitelink.title}>{sitelink.site}</a>
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
  .wikidata .bod {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>

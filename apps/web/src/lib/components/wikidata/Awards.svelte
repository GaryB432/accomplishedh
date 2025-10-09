<script lang="ts">
  import {
    WIKIDATA_PERSON_PROPERTIES as P,
    type SummarizedEntity,
  } from '@accomplishedh/wikibase';

  type Props = { entity: SummarizedEntity };
  let { entity }: Props = $props();

  let awards_received = $derived(entity.summary.claims[P.AWARD_RECEIVED]!);
</script>

<div class="wikidata-cap">Awards Received</div>
<div class="content wikidata-card">
  <div class="det">
    <div>
      <span class="awards">{awards_received}</span>
    </div>
  </div>
</div>

<style>
  .content {
    padding: var(--padding);
  }
</style>

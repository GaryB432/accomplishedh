<script lang="ts">
  import type { SummarizedEntity } from "@accomplishedh/wikibase";

  interface Props {
    entity: SummarizedEntity;
  }
  let { entity }: Props = $props();
</script>

<h1>Notable Works</h1>

<article>
  <div>entity</div>
  <div>{Object.keys(entity.summary.claims)}</div>

  <div>fun</div>
  <div>{entity.summary.fun}</div>
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    max-width: 50vw;
    outline: 1px solid var(--some-color);
    overflow: hidden;
    padding: 0.5em;
  }
</style>

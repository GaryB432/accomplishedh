<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>

<div class="hp-vp column-grid">
  {@render children()}
</div>

<style>
  .hp-vp {
    --padding: 2em;
    padding: 1em;
  }
  .column-grid {
    display: grid;
    gap: 2em;
    overflow: hidden;
    grid-template-columns: max-content 1fr;
    align-items: center;
  }
</style>

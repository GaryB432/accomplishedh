<script lang="ts">
  import type { AccomplishedHuman } from "$lib/wikibase/types";

  type Props = {
    human: AccomplishedHuman;
  };

  let { human }: Props = $props();
</script>

{JSON.stringify(human)}

<!-- 
{#await fetch("https://example.com").then((r) => r.json())}
  <p>Loading...</p>
{:then data}
  <p>Data: {data.name}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await} -->

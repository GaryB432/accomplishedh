<script lang="ts">
  import { fromDictionary } from "$lib/wikibase/utils";
  import type { Item } from "@accomplishedh/wikibase/types";

  let { subject }: { subject: Item } = $props();
  let description = $derived(fromDictionary(subject.descriptions));
</script>

<article>
  {description}
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    outline: 1px solid var(--some-color);
    overflow: hidden;
    margin-block: 2rem;
    padding: 0.5rem;
  }
</style>

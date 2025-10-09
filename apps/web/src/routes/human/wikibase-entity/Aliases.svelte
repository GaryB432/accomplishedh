<script lang="ts">
  import { type Entity } from '@accomplishedh/wikibase';
  type Props = { entity: Entity };
  let { entity }: Props = $props();
  let aliases = $derived(entity.aliases ?? {});
  let terms: {
    value: string;
  }[] = $derived(aliases['en'] ?? []);
</script>

<section class="wikidata">
  <h1>Also Known As</h1>
  <div class="bod">
    {terms.map((t) => t.value).join(', ')}
  </div>
</section>

<script lang="ts">
  import { resolve } from "$app/paths";
  import type { AccomplishedHuman } from "$lib/wikibase/types";
  let {
    featureds,
  }: {
    featureds: AccomplishedHuman[];
  } = $props();
</script>

<h3>Featured Today</h3>
<table>
  <tbody>
    {#each featureds as featured (featured.name)}
      <tr>
        <td>
          <a href={resolve("/human/[id]", { id: featured.wb.id })}>
            {featured.name}
          </a>
        </td>
        <td>moar</td>
      </tr>
    {/each}
  </tbody>
</table>

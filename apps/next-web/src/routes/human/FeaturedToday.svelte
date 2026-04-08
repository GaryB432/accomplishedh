<script lang="ts">
  import type { AccomplishedHuman } from "$lib/wikibase/types";

  import { resolve } from "$app/paths";
  import FieldOfWorkIcon from "./FieldOfWorkIcon.svelte";

  let {
    featureds,
  }: {
    featureds: AccomplishedHuman[];
  } = $props();

  $inspect(featureds);
</script>

<h3>Featured Today</h3>
<table>
  <tbody>
    {#each featureds as featured (featured.name)}
      <tr>
        <td>
          <a
            data-sveltekit-reload
            href={resolve("/human/[id]", { id: featured.wb.id })}
          >
            {featured.name}
          </a>
        </td>
        <td>
          <FieldOfWorkIcon subject={{ ...featured.wb, type: "item" }}
          ></FieldOfWorkIcon>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

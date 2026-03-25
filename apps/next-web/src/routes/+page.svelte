<script lang="ts">
  import { resolve } from "$app/paths";

  let { data } = $props();
  let featureds = $derived(data.featureds);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation!
</p>

<table>
  <tbody>
    {#each featureds as featured (featured.name)}
      <tr>
        <td>
          <a href={resolve("/human/[id]", { id: featured.wb.id })}>
            page for {featured.name}</a
          >
        </td>
        <td>moar</td>
      </tr>
    {/each}
  </tbody>
</table>

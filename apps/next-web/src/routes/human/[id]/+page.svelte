<script lang="ts">
  let { data } = $props();
  let featureds = $derived(data.featureds);
</script>
<h1>{data.entity}</h1>
<table>
  <tbody>
    {#each featureds as featured (featured.id)}
      <tr>
        <td>
          {featured.id}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  h1 {
    all: unset;
    display: block;
    font-size: 6em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
</style>

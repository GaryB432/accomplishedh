<script lang="ts">
  let { data } = $props();
  $inspect(data);
</script>

<h1>{data.subject}</h1>

<table>
  <tbody>
    {#each data.featureds as featured (featured.wb.id)}
      <tr>
        <td>
          {featured.name}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  h1 {
    all: unset;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
</style>

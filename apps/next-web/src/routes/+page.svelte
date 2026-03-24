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

{JSON.stringify(data.featureds)}

<!-- const l = {"admin":false,"featureds":{"entities":{"Q982518":{"type":"item","id":"Q982518","labels":{"en":{"language":"en","value":"Charles-Jean de la Vallée Poussin"}},"claims":{"P1556":[{"mainsnak":{"snaktype":"value","property":"P1556","hash":"e0f163d8ffe25811ccf21e43f7672966ffdfa74e","datavalue":{"value":"de-la-vallee-poussin.charles-jean","type":"string"},"datatype":"external-id"},"type":"statement","id":"Q982518$b717d5d2-4acf-2cb9-bb75-823d83d1be1f","rank":"normal"}], -->


<!-- 
<table>
  <tbody>
    {#each featureds as featured (featured.name)}
      <tr>
        <td>
          <a href={resolve("/human/[id]", { id: featured.name })}>
            page for {featured.id}</a
          >
        </td>
        <td>moar</td>
      </tr>
    {/each}
  </tbody>
</table> 

-->

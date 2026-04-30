<script lang="ts">
  import cytoscape, {
    type ElementDefinition,
    type StylesheetJson,
  } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { graph } = $derived(data);

  let cydiv = $state<HTMLDivElement>();

  // let layout = $state(cytoscape.La)

  let { nodes, edges } = $derived(graph);

  let elements: ElementDefinition[] = $derived([
    ...nodes.map((node) => ({ data: { ...node } })),
    ...edges.map(([from, to]) => ({
      data: {
        id: from.id.concat("|").concat(to.id),
        source: from.id,
        target: to.id,
      },
    })),
  ]);

  const style: StylesheetJson = [
    {
      selector: "node",
      style: {
        shape: "hexagon",
        "background-color": "red",
        label: "data(id)",
      },
    },
  ];

  // let cy = $state<cytoscape.Core>();

  onMount(() => {
    cytoscape({
      container: cydiv,
      elements,
      style,
      layout: { name: "random" },
    });
    // const layout = cy.layout({ name: "cose" });
    // layout.run();
  });
</script>

<div id="cy" class="graph" bind:this={cydiv}></div>

<style>
  #cy {
    width: 90vw;
    height: 60vh;
    /* position: absolute; */
    top: calc(var(--header-h) + 1em);
    left: 0;
    border: thin solid red;
  }
</style>

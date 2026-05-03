<script lang="ts">
  import cytoscape, {
    type AnimatedLayoutOptions,
    type LayoutOptions,
    type StylesheetJson,
  } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { elements } = $derived(data);

  let cydiv = $state<HTMLDivElement>();

  const layouts: Record<string, LayoutOptions> = {
    breadthfirst: { name: "breadthfirst" },
    circle: { name: "circle" },
    concentric: { name: "concentric" },
    cose: { name: "cose" },
    grid: { name: "grid" },
    none: { name: "null" },
    preset: { name: "preset" },
    random: { name: "random" },
  };

  //       animate?: boolean;
  //       // duration of animation in ms if enabled
  //       animationDuration?: number;
  //       // easing of animation if enabled
  //       animationEasing?: Css.TransitionTimingFunction;
  //       /**
  //        * a function that determines whether the node should be animated.
  //        * All nodes animated by default on animate enabled.
  //        * Non-animated nodes are positioned immediately when the layout starts
  //        */
  //       animateFilter?(node: NodeSingular, index: number): boolean;

  // Object.values(layouts).forEach((l: AnimatedLayoutOptions)=> ({...l, anim }))

  let selectedLayoutName = $state<string>("none");

  const style: StylesheetJson = [
    {
      selector: "node",
      style: {
        shape: "hexagon",
      },
    },

    {
      selector: "node.field",
      style: {
        backgroundColor: "red",
        label: "data(label)",
      },
    },
    {
      selector: "node.person",
      style: {
        label: "data(id)",
      },
    },
  ];

  let cy = $state<cytoscape.Core>();

  onMount(() => {
    const anoth = Object.keys(layouts).map((s) => {
      return layouts[s];
    });

    const rr = {...layouts}
    const newLocal = rr[selectedLayoutName];
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: newLocal,
    });
  });
</script>

<section class="main">
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <div>
    <div class="buttons">
      <select
        name="lsel"
        bind:value={selectedLayoutName}
        onchange={(e) => {
          cy?.layout(layouts[selectedLayoutName]).run();
        }}
      >
        {#each Object.keys(layouts) as lopts}
          <option value={lopts}>{lopts}</option>
        {/each}
      </select>
    </div>
  </div>
</section>

<style>
  .main {
    display: grid;
    grid-template-columns: 1fr 20vw;
    border: thin solid lime;
  }

  #cy {
    width: 90vw;
    height: 60vh;
    border: thin solid silver;
  }
</style>

<script lang="ts">
  import cytoscape, {
    type LayoutOptions,
    type NodeSingular,
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
    {
      selector: "node.cat",
      style: {
        backgroundColor: "orange",
        label: "data(label)",
      },
    },
  ];

  let cy = $state<cytoscape.Core>();

  let dialog = $state<HTMLDialogElement>();

  onMount(() => {
    const newLocal = layouts[selectedLayoutName];
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: newLocal,
    });
    cy.on("tap", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      console.log(node.id());
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
        onchange={() => {
          cy?.layout(layouts[selectedLayoutName]).run();
        }}
      >
        {#each Object.keys(layouts) as lopts (lopts)}
          <option value={lopts}>{lopts}</option>
        {/each}
      </select>
    </div>
  </div>
</section>

<button
  id="openModal"
  onclick={() => {
    dialog?.showModal();
  }}>Open Modal</button
>

<dialog id="myDialog" bind:this={dialog}>
  <h2>Hello!</h2>
  <p>This is a native HTML modal dialog.</p>
  <p>Related to <a href="https://wikibase.asdf">moar</a></p>
  <button id="closeModal" onclick={() => dialog?.close()}>Close</button>
</dialog>

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

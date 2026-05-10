<script lang="ts">
  import cytoscape, { type NodeSingular } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import PersonSidebar from "./PersonSidebar.svelte";
  import { style } from "./cytoscape";
  import ToggleButton from "$lib/components/ToggleButton.svelte";

  let devmode = $state(false);

  let { data }: PageProps = $props();
  let elements = $derived(devmode ? data.elements.slice(0, 30) : data.elements);

  let cydiv = $state<HTMLDivElement>();

  let selectedPersonId = $state<string>();

  let cy = $state<cytoscape.Core>();

  onMount(() => {
    cytoscape.use(dagre);
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: { name: "breadthfirst" },
    });

    cy.style()
      .selector("node")
      .style("display", "none")
      .selector("node[type='cat']")
      .style("display", "element")
      .update();

    cy.on("tap", "node", (evt) => {
      const node = evt.target as NodeSingular;
      console.log(node.data());
    });
    cy.on("tap", "node[type='cat']", (evt) => {
      const node = evt.target as NodeSingular;
      const isClosed = node.incomers("node").every((n) => n.is(":hidden"));
      node.incomers().style({ display: isClosed ? "element" : "none" });
    });
    cy.on("tap", "node[type='field']", (evt) => {
      const node = evt.target as NodeSingular;
      const isClosed = node.incomers("node").every((n) => n.is(":hidden"));
      node.incomers().style({ display: isClosed ? "element" : "none" });
    });
    cy.on("tap", "node[type='person']", (evt) => {
      const node = evt.target as NodeSingular;
      selectedPersonId = node.id();
    });

    // cy.on("free", "node.person", (evt) => {
    //   const node = evt.target as NodeSingular;
    //   const nodeId = node.id();
    //   // draggingPersonId = undefined;

    //   if (hoveredPersonId === nodeId && entityPopover) {
    //     selectedPersonId = nodeId;
    //     placeAnchorAtNode(node);
    //     entityPopover.showPopover();
    //   }
    // });
  });
</script>

<section class="fields-shell">
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <aside class="panel" aria-label="Selected person details">
    <div class="panel-content">
      <PersonSidebar qid={selectedPersonId} />
    </div>
    <div class="panel-controls">
      <div class="buttons">
        <ToggleButton bind:checked={devmode} />
        <button
          class="btn"
          onclick={() =>
            cy?.layout({ name: "breadthfirst", animate: true }).run()}
        >
          redraw
        </button>
      </div>
    </div>
  </aside>
</section>

<style>
  .fields-shell {
    --pane-border: rgba(0, 0, 0, 0.22);
    display: grid;
    grid-template-columns: minmax(0, 1fr) clamp(22rem, 28vw, 28rem);
    width: 100%;
    height: min(86dvh, 62rem);
    min-height: 34rem;
    overflow: hidden;
    border: 1px solid var(--pane-border);
    border-radius: 0.6rem;
  }
  
  #cy {
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--pane-border);
  }

  .panel {
    min-width: 0;
    min-height: 0;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    background: var(--bg);
  }

  .panel-content {
    min-height: 0;
    overflow: hidden;
  }

  .panel-controls {
    border-top: 1px solid var(--pane-border);
    padding: 0.6rem 0.75rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 980px) {
    .fields-shell {
      grid-template-columns: 1fr;
      grid-template-rows: minmax(20rem, 52dvh) minmax(14rem, 1fr);
      height: min(92dvh, 68rem);
    }

    #cy {
      border-right: none;
      border-bottom: 1px solid var(--pane-border);
    }
  }
</style>

<script lang="ts">
  const icons = new Map<string, string>([
    ['a', 'canvas-easel-svgrepo-com.svg'],
    ['b', 'canvas-svgrepo-com.svg'],
    ['Art.West', 'easel-svgrepo-com.svg'],
    ['Music.West', 'music-svgrepo-com.svg'],
    ['Lit.West', 'open-book-svgrepo-com.svg'],
    ['f', 'painter-with-beret-and-canvas-svgrepo-com.svg'],
    ['Science', 'science-lab-svgrepo-com.svg'],
  ]);
  interface Props {
    inventory: string | string[];
  }

  let { inventory }: Props = $props();
  let inventories = $derived(
    Array.isArray(inventory) ? inventory : [inventory],
  );
</script>

<div class="inventory">
  {#each inventories.filter((i) => icons.has(i)) as invenx (invenx)}
    <div class="container">
      <div class="icon">
        <img src={`/icons/${icons.get(invenx)}`} alt="" />
      </div>
      <div class="text">{invenx}</div>
    </div>
  {/each}
</div>

<style>
  .inventory {
    display: flex;
    gap: 1.1em;
    flex-wrap: wrap;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .icon {
    width: 2em;
  }
</style>

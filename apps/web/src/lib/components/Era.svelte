<script lang="ts">
  interface Props {
    era: string;
  }

  let { era }: Props = $props();

  const eras = ['1200-1400', '1400-1600', '1600-1800', '1800+'];
</script>

<div class="era-viewport">
  {#each eras as shownEra (shownEra)}
    <div class:mine={shownEra === era} class:era>
      {shownEra}
    </div>
  {/each}
</div>

<style>
  .era-viewport {
    font-size: 0.7rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    height: 2rem;
  }
  .era {
    display: flex;
    justify-content: center;
    align-items: center;
    background: initial;
    border: thin solid var(--secondary-color);
  }
  .era.mine {
    background: var(--secondary-color);
    border-color: var(--primary-color);
    font-weight: bold;
  }
</style>

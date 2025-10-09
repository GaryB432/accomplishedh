<script lang="ts">
  import type { Laureate } from '$lib/types/nobel.types';
  import type { EuroHuman } from '@accomplishedh/shared';

  import { resolve } from '$app/paths';
  import data from './laureates.json';

  const dlaureates = data as unknown as LaureateHuman[];

  let laureates = $derived(
    dlaureates.sort((a, b) => a.prizes[0].year.localeCompare(b.prizes[0].year)),
  );

  interface LaureateHuman extends Laureate {
    human?: Pick<EuroHuman, 'id' | 'serial'>;
    reason?: 'NOTEUROPE' | 'NOTHUMAN' | 'PEACE' | 'YOUNG';
  }
</script>

{#each laureates as w (w.id)}
  <div class="laur">
    <h1>
      {w.firstname}
      {w.surname}
      <span class="born">
        {w.bornCountry}
      </span>
    </h1>
    {#if w.human}
      <div class="hum">
        <a href={resolve("/human/[serial=integer]", w.human)}
          >{w.firstname}
          {w.surname}</a
        >
      </div>
    {:else}
      <div class="reason">{w.reason}</div>
    {/if}
    {#each w.prizes as p (p.year.concat(p.category))}
      <p>
        {p.year}
        {p.category}
      </p>
      {#if p.url}
        {p.url}
      {/if}
    {/each}
  </div>
{/each}

<style>
  div.laur {
    margin: 1em;
  }
  h1 {
    font-size: 1.2em;
    font-weight: 700;
  }
  .born {
    background-color: rgb(91, 173, 47);
    font-size: 0.8em;
  }
  .hum {
    background-color: rgba(79, 243, 8, 0.453);
  }
  .reason {
    background-color: rgba(255, 66, 66, 0.453);
    font-weight: 600;
  }
</style>

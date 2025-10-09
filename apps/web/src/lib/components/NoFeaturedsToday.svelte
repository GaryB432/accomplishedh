<script lang="ts">
  import { onMount } from 'svelte';
  import StormyConditions from './StormyConditions.svelte';

  let msgs: string[] = $state([
    'There are no featured persons today',
    'Please try again on another day.',
    "We'll see you then.",
  ]);

  let msgElements: Array<HTMLDivElement> = $state([]);

  let pushx = $derived(
    msgElements.at(0)?.parentElement?.getBoundingClientRect().width ?? 1000,
  );

  onMount(() => {
    msgElements.forEach((el, i) => {
      const totalDuration = 2500;
      const kfs = [{ transform: `translateX(0)` }];
      el.animate(kfs, {
        duration: totalDuration,
        delay: i * 0.2 * totalDuration,
        fill: 'forwards',
        easing:
          'linear(0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077, 1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%, 1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%, 0.997 69.8%, 1.003 76.9%, 1.004 83.8%, 1)',
      });
    });
  });
</script>

<StormyConditions></StormyConditions>

<div class="none-today" style="--push-x: {pushx}px">
  {#each msgs as msg, i (msg)}
    <div bind:this={msgElements[i]}>
      {msg}
    </div>
  {/each}
</div>

<style>
  .none-today {
    --push-x: 200px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 2em;
    gap: 2em;
    box-shadow: var(--shadow-15);
    width: 40vw;
    overflow-x: hidden;
    > div {
      display: flex;
      background: var(--secondary-color);
      padding: 1em;
      transform: translateX(var(--push-x));
    }
  }
</style>

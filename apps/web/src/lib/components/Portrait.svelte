<script lang="ts">
  import type { Portrait } from '@accomplishedh/shared';
  interface Props {
    portrait: Portrait;
  }

  let { portrait }: Props = $props();

  let portraitImg = $derived(portrait.img);
</script>

<section class="portrait">
  <div class="above">{portrait.above ?? ''}</div>
  <div class="thumbnail">
    {#if portraitImg}
      <img src={portraitImg.src} alt="" />
    {/if}
  </div>
  <div class="caption">{portrait.caption ?? ''}</div>
</section>

<style>
  .portrait {
    background: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .above,
  .caption {
    padding: 1em;
    max-width: 100%;
    overflow: hidden;
  }

  .above {
    font-weight: bold;
  }
  .caption {
    font-size: 0.8em;
  }

  img {
    width: 220px;
    margin: 0 1em;
  }
</style>

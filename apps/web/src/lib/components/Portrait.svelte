<script lang="ts">
  import type { Portrait } from "@accomplishedh/shared";
  interface Props {
    portrait: Portrait;
  }

  let { portrait }: Props = $props();
</script>

<section class="portrait">
  <div class="above">{portrait.above ?? ""}</div>
  <img src="https://placehold.co/400x300" alt={portrait.caption} />
  <div class="caption">{portrait.caption ?? ""}</div>
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

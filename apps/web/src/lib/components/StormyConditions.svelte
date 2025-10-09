<script lang="ts">
  // TODO share the stormy experience with apps/extension
  let mjs = [0, 1, 2];
</script>

<svg class="stormy" width="90" viewBox="0 0 24 24">
  <g class="drops">
    {#each mjs as i (i)}
      {@const d = `M${i * 4 + 8} 18 l-1.5 3`}
      <path {d} style="--drip:{Math.hypot(3, 1.5)}"></path>
    {/each}
  </g>
  <g>
    <path
      d="M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6
      C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5
      C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
    />
  </g>
</svg>

<style>
  svg.stormy {
    justify-self: center;
    display: block;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    stroke: var(--primary-color);

    g.drops {
      path {
        stroke-dasharray: var(--drip);
        stroke-dashoffset: 0;
        animation: dash 2s linear infinite;
      }
      :nth-child(1) {
        animation-delay: 0.5s;
      }
      :nth-child(2) {
        animation-delay: 0.7s;
      }
      :nth-child(3) {
        animation-delay: 0.3s;
      }
    }

    @keyframes dash {
      from {
        stroke-dashoffset: var(--drip);
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
</style>

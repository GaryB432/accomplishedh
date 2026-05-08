<a
  class="try-next-web"
  href="https://accomplishedh-next-web.vercel.app/"
  aria-label="Try the next version of Human Accomplishment (BETA)"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg class="signal" viewBox="0 0 320 90" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="transparent" />
        <stop offset="45%" stop-color="rgb(255 255 255 / 0.06)" />
        <stop offset="52%" stop-color="rgb(255 255 255 / 0.36)" />
        <stop offset="58%" stop-color="rgb(255 255 255 / 0.06)" />
        <stop offset="100%" stop-color="transparent" />
      </linearGradient>
      <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="1.6" result="soft" />
        <feMerge>
          <feMergeNode in="soft" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="1" y="1" width="318" height="88" rx="44" class="frame" />
    <circle cx="35" cy="45" r="8" class="core" filter="url(#glow)">
      <animate attributeName="opacity" values="0.65;1;0.65" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <rect x="-150" y="0" width="120" height="90" fill="url(#sweep)">
      <animate attributeName="x" values="-150;390" dur="4.8s" repeatCount="indefinite" />
    </rect>
  </svg>
  <span class="copy">Try the next version of Human Accomplishment</span>
  <span class="beta">BETA</span>
</a>

<style>
  .try-next-web {
    --edge: #f4e38b;
    --ink: #2e1a00;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.55rem;
    min-height: 2.25rem;
    padding: 0.32rem 0.82rem 0.36rem 0.58rem;
    border-radius: 999px;
    overflow: hidden;
    text-decoration: none;
    background:
      radial-gradient(circle at 8% 50%, rgb(251 239 136 / 38%), transparent 24%),
      linear-gradient(110deg, rgb(255 255 255 / 24%), rgb(255 255 255 / 6%)),
      #271335;
    border: 1px solid rgb(255 255 255 / 24%);
    box-shadow:
      0 0 0 1px rgb(255 255 255 / 12%) inset,
      0 6px 18px rgb(8 0 19 / 28%);
    color: white;
    white-space: nowrap;
    isolation: isolate;
    transform: translateZ(0);
  }

  @supports (color: color-mix(in srgb, black, white)) {
    .try-next-web {
      --edge: color-mix(in srgb, var(--secondary-color) 72%, white);
      --ink: color-mix(in srgb, var(--primary-color) 58%, black);
      background:
        radial-gradient(
          circle at 8% 50%,
          rgb(251 239 136 / 38%),
          transparent 24%
        ),
        linear-gradient(110deg, rgb(255 255 255 / 24%), rgb(255 255 255 / 6%)),
        color-mix(in srgb, var(--primary-color) 78%, #190020);
    }
  }

  .signal {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .frame {
    fill: none;
    stroke: rgb(255 255 255 / 45%);
    stroke-width: 1.4;
  }

  .core {
    fill: var(--edge);
  }

  .copy {
    font-size: 0.67rem;
    letter-spacing: 0.01em;
  }

  .beta {
    font-size: 0.62rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink);
    padding: 0.25rem 0.45rem;
    border-radius: 999px;
    background: linear-gradient(
      120deg,
      #fff8cb 0%,
      #f7d45b 43%,
      #ffe9a6 50%,
      #f7d45b 57%,
      #fff8cb 100%
    );
    background-size: 200% 100%;
    box-shadow:
      0 0 0 1px rgb(67 30 2 / 30%) inset,
      0 0 6px rgb(255 237 148 / 60%);
    animation: gleam 3.2s linear infinite;
  }

  .try-next-web:hover {
    border-color: rgb(255 255 255 / 44%);
    box-shadow:
      0 0 0 1px rgb(255 255 255 / 20%) inset,
      0 8px 22px rgb(8 0 19 / 40%);
  }

  @keyframes gleam {
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 1000px) {
    .copy {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .try-next-web {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-inline: 0.5rem;
    }
  }
</style>

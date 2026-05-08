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
        <stop offset="45%" stop-color="rgba(255,255,255,0.1)" />
        <stop offset="52%" stop-color="rgba(255,255,255,0.95)" />
        <stop offset="58%" stop-color="rgba(255,255,255,0.1)" />
        <stop offset="100%" stop-color="transparent" />
      </linearGradient>
      <radialGradient id="pulse" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.6)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </radialGradient>
      <filter id="glow" x="-35%" y="-35%" width="170%" height="170%">
        <feGaussianBlur stdDeviation="2.8" result="soft" />
        <feMerge>
          <feMergeNode in="soft" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="1" y="1" width="318" height="88" rx="44" class="frame" />
    <rect x="6" y="6" width="308" height="78" rx="39" fill="url(#pulse)" opacity="0.4">
      <animate attributeName="opacity" values="0.25;0.75;0.25" dur="2.6s" repeatCount="indefinite" />
    </rect>
    <circle cx="35" cy="45" r="18" class="core" filter="url(#glow)">
      <animate attributeName="r" values="16;21;16" dur="2.1s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite" />
    </circle>
    <circle cx="35" cy="45" r="30" class="ring ring-1">
      <animate attributeName="r" values="24;42" dur="2.1s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0" dur="2.1s" repeatCount="indefinite" />
    </circle>
    <circle cx="35" cy="45" r="30" class="ring ring-2">
      <animate attributeName="r" values="24;42" dur="2.1s" begin="-1.05s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0" dur="2.1s" begin="-1.05s" repeatCount="indefinite" />
    </circle>
    <rect x="-130" y="0" width="140" height="90" fill="url(#sweep)">
      <animate attributeName="x" values="-130;380" dur="2.8s" repeatCount="indefinite" />
    </rect>
  </svg>
  <span class="copy">Try the next version of Human Accomplishment</span>
  <span class="beta">BETA</span>
</a>

<style>
  .try-next-web {
    --edge: #f4e38b;
    --ink: #2e1a00;
    --edge: color-mix(in srgb, var(--secondary-color) 72%, white);
    --ink: color-mix(in srgb, var(--primary-color) 58%, black);
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
      radial-gradient(circle at 8% 50%, rgb(251 239 136 / 72%), transparent 28%),
      linear-gradient(110deg, rgb(255 255 255 / 24%), rgb(255 255 255 / 6%)),
      #2a0a3d;
    background:
      radial-gradient(circle at 8% 50%, rgb(251 239 136 / 72%), transparent 28%),
      linear-gradient(110deg, rgb(255 255 255 / 24%), rgb(255 255 255 / 6%)),
      color-mix(in srgb, var(--primary-color) 82%, #190020);
    border: 1px solid rgb(255 255 255 / 24%);
    box-shadow:
      0 0 0 1px rgb(255 255 255 / 14%) inset,
      0 7px 24px rgb(8 0 19 / 38%);
    color: white;
    white-space: nowrap;
    isolation: isolate;
    transform: translateZ(0);
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

  .ring {
    fill: none;
    stroke: var(--edge);
    stroke-width: 2.2;
    opacity: 0.6;
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
    background: linear-gradient(180deg, #fffcc7 0%, #f8d452 100%);
    box-shadow:
      0 0 0 1px rgb(67 30 2 / 30%) inset,
      0 0 10px rgb(255 237 148 / 95%);
    animation: gleam 1.7s ease-in-out infinite;
  }

  .try-next-web:hover {
    border-color: rgb(255 255 255 / 44%);
    box-shadow:
      0 0 0 1px rgb(255 255 255 / 22%) inset,
      0 10px 28px rgb(8 0 19 / 50%);
  }

  @keyframes gleam {
    0%,
    100% {
      transform: translateY(0);
      filter: saturate(1) brightness(1);
    }
    50% {
      transform: translateY(-1px);
      filter: saturate(1.25) brightness(1.1);
    }
  }

  @media (max-width: 1000px) {
    .copy {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .try-next-web {
      padding-inline: 0.5rem;
    }
  }
</style>

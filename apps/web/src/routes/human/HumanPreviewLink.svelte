<script lang="ts">
  interface Props {
    entity?: { id: string };
  }
  let { entity = { id: "Q0" } }: Props = $props();
  let entityOnNextWeb = $derived(
    new URL(
      ["human", entity.id].join("/"),
      "https://accomplishedh-next-web.vercel.app/",
    ),
  );
</script>

<div class="container">
  <a
    rel="external nofollow noopener noreferrer"
    target="_blank"
    href={entityOnNextWeb.href}>Preview Next Web</a
  >
  <aside>
    <div>
      <svg aria-hidden="true" viewBox="0 0 1160 1020" width="102" height="90">
        <g transform="translate(170,40)">
          <circle cx="114" cy="245" r="22" fill="#C9C9C9" opacity="0">
            <animate
              attributeName="r"
              values="22; 22; 154; 174; 22; 22; 154; 174; 22; 22; 154; 174; 22; 22"
              keyTimes="0.0; 0.0584; 0.0829; 0.1657; 0.1714; 0.2844; 0.3089; 0.3917; 0.3974; 0.5104; 0.5348; 0.6177; 0.6234; 1.0"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
            <animate
              attributeName="opacity"
              values="0; 0; 0.6; 0; 0; 0; 0.6; 0; 0; 0; 0.6; 0; 0; 0"
              keyTimes="0.0; 0.0584; 0.0716; 0.1657; 0.1714; 0.2844; 0.2976; 0.3917; 0.3974; 0.5104; 0.5235; 0.6177; 0.6234; 1.0"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
          </circle>
          <circle
            cx="114"
            cy="245"
            r="34"
            fill="none"
            stroke="#8F8F8F"
            stroke-width="20"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="34; 34; 90; 274; 34; 34; 90; 274; 34; 34; 90; 274; 34; 34"
              keyTimes="0.0; 0.0678; 0.0866; 0.194; 0.1996; 0.2938; 0.3126; 0.42; 0.4256; 0.5198; 0.5386; 0.646; 0.6516; 1.0"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
            <animate
              attributeName="opacity"
              values="0; 0; 0.65; 0; 0; 0; 0.65; 0; 0; 0; 0.65; 0; 0; 0"
              keyTimes="0.0; 0.0678; 0.0772; 0.194; 0.1996; 0.2938; 0.3032; 0.42; 0.4256; 0.5198; 0.5292; 0.646; 0.6516; 1.0"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
            <animate
              attributeName="stroke-width"
              values="20; 20; 17; 7; 20; 20; 17; 7; 20; 20; 17; 7; 20; 20"
              keyTimes="0.0; 0.0678; 0.0866; 0.194; 0.1996; 0.2938; 0.3126; 0.42; 0.4256; 0.5198; 0.5386; 0.646; 0.6516; 1.0"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
          </circle>
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;0;1;1;0;0"
              keyTimes="0;0.0094;0.0722;0.5292;0.592;1"
              dur="5.3s"
              repeatCount="indefinite"
            >
            </animate>
            <g transform="translate(578,612)">
              <animateTransform
                attributeName="transform"
                type="translate"
                calcMode="spline"
                values="578 612; 578 612; 496 532; 578 612; 578 612; 496 532; 578 612; 578 612; 496 532; 578 612; 578 612"
                keyTimes="0.0; 0.0094; 0.0772; 0.1337; 0.2354; 0.3032; 0.3597; 0.4614; 0.5292; 0.5857; 1.0"
                keySplines="0 0 1 1; 0 0 0.2 1; 0.5 0 0.8 1; 0 0 1 1; 0 0 0.2 1; 0.5 0 0.8 1; 0 0 1 1; 0 0 0.2 1; 0.5 0 0.8 1; 0 0 1 1"
                dur="5.3s"
                repeatCount="indefinite"
                fill="freeze"
              >
              </animateTransform>
              <g transform="scale(1.99,1.99) translate(-225,-225)">
                <image
                  preserveAspectRatio="none"
                  href="/tap-hand.png"
                  x="0"
                  y="0"
                  width="450"
                  height="450"
                >
                </image>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </aside>
</div>

<style>
  .container {
    position: relative;
  }
  a {
    display: block;
    border: 0.2em solid var(--primary-color);
    font-weight: bold;
    padding: 0.5em;
    text-decoration: none;
    color: var(--primary-color);
    border-radius: 1em;
  }
  aside {
    position: absolute;
    top: -10px;
    right: -20px;
    pointer-events: none;
  }
</style>

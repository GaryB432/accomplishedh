<script lang="ts">
  import type { Property } from '@accomplishedh/shared';

  type UnsourcedProperty = Omit<Property, 'source'>;

  const topMap: Map<string, number> = new Map([
    ['Born', 1238],
    ['Died', 1238],
    ['Nationality', 741],
    ['Known for', 670],
    ['Fields', 476],
    ['Alma mater', 450],
    ['Occupation', 405],
    ['Awards', 358],
    ['Institutions', 337],
    ['Spouse(s)', 201],
  ]);

  interface RankedProp extends Property {
    rank: number;
  }
  interface Props {
    propz: Property[];
  }

  let { propz }: Props = $props();
  let sourcedProps = $derived(
    propz
      .map<RankedProp>((p: UnsourcedProperty) => ({
        source: 'wikimedia',
        ...p,
        rank: topMap.get(p.name) ?? -1,
      }))
      .sort((a, b) => {
        if (a.rank === b.rank) {
          return a.name.localeCompare(b.name, undefined, {
            sensitivity: 'accent',
          });
        }
        return b.rank - a.rank;
      }),
  );
</script>

<section class="box">
  {#each sourcedProps as prop (prop.name)}
    <div class="name" class:top-ten={prop.rank > 0}>
      {#if prop.source === 'wikimedia'}
        <svg width="20" height="20" viewBox="0 0 20 20">
          <title>From: Wikipedia</title>
          <path
            d="M11.14 4H14a.69.69 0 0 1 0 .65c-1 .16-1.36.91-1.81 1.83l-1.4 2.75 2.35 5.21h.07l3.52-8.1c.44-1.07.4-1.59-.79-1.7a.68.68 0 0 1 0-.65h3.45a.68.68 0 0 1 0 .65c-1.21.16-1.42.91-1.81 1.83l-4.37 10.08c-.13.3-.24.45-.44.45s-.33-.16-.42-.45l-2.48-5.73-2.72 5.73c-.11.3-.24.45-.44.45s-.31-.16-.42-.45l-4-10.09c-.57-1.4-.6-1.7-1.65-1.8A.68.68 0 0 1 .62 4h3.91a.68.68 0 0 1 0 .65c-1.16.13-1.21.45-.74 1.58l3.41 8.19h.05L9.3 10 7.78 6.45C7.17 5.05 7 4.77 6.24 4.66a.69.69 0 0 1 0-.65h3.32a.68.68 0 0 1 0 .65c-.74.12-.7.45-.19 1.58l.87 2 .08.09 1-2c.57-1.14.64-1.58-.15-1.7a.69.69 0 0 1-.03-.63z"
          />
        </svg>
      {/if}
      {#if prop.source === 'osf'}
        <svg width="20" height="20" viewBox="0 0 42 20">
          <title>From: Open Science Framework</title>
          <text
            x="0"
            y="18"
            style="font: bold 20px sans-serif; cursor: default"
          >
            OSF
          </text>
        </svg>
      {/if}
      {#if prop.source === 'ha'}
        <svg width="20" height="20" viewBox="0 0 42 20">
          <title>From: Human Accomplishment</title>
          <text
            x="0"
            y="18"
            style="font: bold 20px sans-serif; cursor: default"
          >
            HA
          </text>
        </svg>
      {/if}
      <div class="a" title={prop.rank > 0 ? 'Top 10 Property' : ''}>
        {prop.name}
      </div>
    </div>
    <div class="value">{prop.value}</div>
  {/each}
</section>

<style>
  .box {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    max-width: 80vw;
    gap: 0.2em;
  }

  .box > div {
    padding: 0.5em;
  }

  .name {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.7ch;
    align-items: center;
    background-color: var(--kf-bg-color);
  }
  .name.top-ten {
    font-weight: bold;
  }
  svg {
    fill: var(--text-color);
    display: block;
    transform: translateY(-2px);
    width: 20px;
    flex-shrink: 0;
  }
</style>

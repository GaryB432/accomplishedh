<script lang="ts">
  import type { Entity } from '@accomplishedh/wikibase';

  type WithId = Pick<Entity, 'id'>;

  interface Props {
    entity?: WithId;
  }

  function qidName(entity: WithId, pattern: Readonly<string>) {
    return pattern.replaceAll(/\{id\}/g, entity.id);
  }
  function qidAnchorName(entity: WithId) {
    return qidName(entity, 'w-qa-{id}');
  }
  function qidPopoverName(entity: WithId) {
    return qidName(entity, 'w-qp-{id}');
  }

  let { entity }: Props = $props();
</script>

{#if entity}
  <button
    popovertarget={qidPopoverName(entity)}
    id={qidAnchorName(entity)}
    class="plain"
    aria-label="wikidata"
  >
    <svg id="wikidata-logo" width="50" height="50" viewBox="0 0 50 50">
      <g fill="none">
        <path
          fill="#900"
          d="M0 40.767h1.795V10H0v30.767zm3.71 0h5.502V10H3.71v30.767zM11.006 10v30.766h5.504V10h-5.504z"
        />
        <path
          fill="#396"
          d="M44.28 40.77h1.796V10H44.28v30.77zM47.99 10v30.77h1.795V10H47.99zM18.365 40.77h1.795V10h-1.795v30.77zM22.075 10v30.768h1.795V10h-1.795z"
        />
        <path
          fill="#069"
          d="M25.723 40.77h5.504V10h-5.504v30.77zm7.299 0h1.914V10h-1.914v30.77zM36.73 10v30.768h5.503V10H36.73z"
        />
      </g>
    </svg>
  </button>
  <div class="po" id={qidPopoverName(entity)} popover="auto">
    <h1>
      {entity.id}
    </h1>
  </div>
{/if}

<style>
  .po {
    position: absolute;
    top: anchor(top);
    left: anchor(right);
    padding: 1em;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
    min-width: 30ch;
    > h1 {
      font-size: 1.2em;
      margin-bottom: 0.8em;
    }
  }

  #wikidata-logo {
    border: thin solid red;
    display: block;
    width: 100%;
  }
</style>

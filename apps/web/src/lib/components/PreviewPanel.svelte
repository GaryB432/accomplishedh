<script lang="ts">
  interface Props {
    vercelEnv: {
      GIT_COMMIT_MESSAGE: string;
      GIT_COMMIT_REF: string;
      GIT_COMMIT_SHA: string;
    };
  }

  const MASTER = 'master';

  let { vercelEnv }: Props = $props();
  let isPreview = $derived(vercelEnv.GIT_COMMIT_REF !== MASTER);
</script>

{#if isPreview}
  <button id="btn" popovertarget="pop">
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>

    Preview
  </button>

  <div class="ff" id="pop" popover>
    <div class="gr">
      <div class="th">GIT_COMMIT_MESSAGE</div>
      <div class="td">{vercelEnv.GIT_COMMIT_MESSAGE}</div>
      <div class="th">GIT_COMMIT_REF</div>
      <div class="td">{vercelEnv.GIT_COMMIT_REF}</div>
      <div class="th">GIT_COMMIT_SHA</div>
      <div class="td">
        <a
          target="_blank"
          href={'https://github.com/GaryB432/human-accomplishment/commit/'.concat(
            vercelEnv.GIT_COMMIT_SHA,
          )}
        >
          <span>
            {vercelEnv.GIT_COMMIT_SHA.slice(0, 10)}
          </span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  .size-6 {
    height: 1.5em;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  #btn {
    display: flex;
    anchor-name: --preview-btn;
    font-size: 12px;
    background-color: var(--warn-yellow);
    border-radius: 4px;
    padding: 0.5em 1.5em;
    align-items: center;
    gap: 0.2em;
  }
  #pop {
    position-anchor: --preview-btn;
    font-size: 11px;
    box-shadow: var(--shadow-15);
    inset-block-start: anchor(--preview-btn top);
    inset-inline-start: anchor(--preview-btn right);
    margin-left: 10px;
    max-width: 40vw;
  }
  .th,
  .td {
    font-weight: unset;
    padding: 0.5em;
    font-weight: normal;
  }
  .th {
    font-weight: bold;
  }
  .td a {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
  .gr {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.5em;
  }
</style>

<script lang="ts">
  import { version } from '$app/environment';

  interface Props {
    GIT_COMMIT_REF?: string | null;
    GIT_COMMIT_SHA?: string | null;
  }

  let { GIT_COMMIT_REF = null, GIT_COMMIT_SHA = null }: Props = $props();

  function parseBuildId(buildId: string): string {
    return new Date(parseInt(buildId, 10)).toISOString();
  }
</script>

<div class="venvStamp">
  <div>BUILDID</div>
  <div>{parseBuildId(version)}</div>
  <div>GIT_COMMIT_REF</div>
  <div>{GIT_COMMIT_REF}</div>
  <div>GIT_COMMIT_SHA</div>
  <div>{GIT_COMMIT_SHA}</div>
</div>

<style>
  .venvStamp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }
</style>

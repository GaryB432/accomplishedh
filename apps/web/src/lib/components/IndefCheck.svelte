<script lang="ts">
  import { highlightDefiniteArticle } from '@accomplishedh/shared';
  interface Props {
    message?: string;
  }

  let { message = '' }: Props = $props();

  let partInfo = $derived(highlightDefiniteArticle(message));
  let [p0, p1] = $derived(partInfo.p);
</script>

<span>{p0}</span><span>{p1}</span>

<style>
  span:nth-child(1) {
    background-color: var(--warn-yellow);
    color: var(--alert-red);
  }
  span:nth-child(2) {
    background-color: rgb(158, 252, 158);
    background-color: var(--kf-bg-color);
    color: var(--text-color);
  }
</style>

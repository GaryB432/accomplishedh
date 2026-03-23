<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
  let subject = $derived(`${data.subject} - Generated`);
</script>

<h1>{subject} works</h1>

<style>
  h1 {
    all: unset;
    display: block;
    font-size: 6em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
</style>

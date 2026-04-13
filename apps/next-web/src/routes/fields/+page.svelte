<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let keys = $derived(
    [...data.fieldsOfWork.keys()].toSorted(
      (a, b) => data.fieldsOfWork.get(b)! - data.fieldsOfWork.get(a)!,
    ),
  );
</script>

<main>
  <div class="container">
    <h1>Some Fields Of Work Remarks</h1>
    {#each keys as q (q)}
      <div style="border: thin solid lime">
        {q}
        {data.fieldsOfWork.get(q)}
      </div>
    {/each}
  </div>
</main>

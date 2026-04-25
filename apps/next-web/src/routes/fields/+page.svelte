<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let asdf = $derived(
    Object.entries(data.fieldsOfWork.people)
      .map(([human, j]) => {
        return j.fows.map((fow) => ({ ...fow, human }));
      })
      .flat(),
  );
//   $inspect(asdf);
</script>

{JSON.stringify(
  asdf.map((g) => g.category),
  undefined,
  1,
)}

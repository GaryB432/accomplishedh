<script lang="ts">
  import type { PageData } from "../$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<section class="about-page">
  <p>about myself</p>
  <p>
    {data.admin}
  </p>
</section>

<style>
  .about-page {
    margin-inline: auto;
    max-width: 1080px;
  }
</style>

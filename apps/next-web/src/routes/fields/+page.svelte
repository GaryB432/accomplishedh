<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<h1>lottsa fields</h1>

{JSON.stringify(data.featureds.length)}

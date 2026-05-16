<script lang="ts">
  /* eslint-disable @typescript-eslint/no-unsafe-argument */
  import { greet } from "./greet";

  let { host = "SvelteKit", guest = "Vitest" } = $props();
</script>

<h1>{greet(host)}</h1>
<p>{greet(guest)}</p>

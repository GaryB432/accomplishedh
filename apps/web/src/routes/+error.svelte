<script>
  import { page } from '$app/state';
</script>

<div class="error-vp">
  <h1>{page.status}</h1>
  <svg
    width="145"
    height="145"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1="9" y1="9" x2="9" y2="9" />
    <line x1="15" y1="9" x2="15" y2="9" />
  </svg>
  <pre>{page.error?.message}</pre>
</div>

<style>
  .error-vp {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  svg {
    display: block;
    width: 20vh;
    color: gainsboro;
  }
</style>

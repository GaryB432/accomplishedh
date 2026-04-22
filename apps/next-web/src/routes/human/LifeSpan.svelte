<script>
  let name = $state("Lifespan");

  let message = $derived(`${name ?? "dunt"} works`);
</script>

<article>
  {message}
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    max-width: 30ch;
    outline: 1px solid var(--some-color);
    overflow: hidden;
    padding: 0.5em;
    text-align: center;
  }
</style>

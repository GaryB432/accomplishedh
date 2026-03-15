<script lang="ts">
  interface Props {
    entity?: { id: string };
  }
  let { entity = { id: "Q0" } }: Props = $props();
  let title = $derived(`Reasonator ${entity.id}`);
  // TODO use reasonator logo (reasonator logo is broken on its own site March '26)
</script>

<a
  target="_blank"
  rel="external nofollow noopener noreferrer"
  href={`https://reasonator.toolforge.org/?q=${entity.id}&lang=mul`}
  {title}
>
  {entity.id}
</a>

<style>
  a {
    display: block;
    height: 100%;
  }
</style>

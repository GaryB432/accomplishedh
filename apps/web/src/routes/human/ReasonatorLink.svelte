<script lang="ts">
  interface Props {
    entity?: { id: string };
  }
  let { entity = { id: 'Q0' } }: Props = $props();
  let title = $derived(`Reasonator ${entity.id}`);
</script>

<a
  target="_blank"
  rel="external nofollow noopener noreferrer"
  href={`https://reasonator.toolforge.org/?q=${entity.id}&lang=mul`}
  {title}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Reasonator_logo_proposal.png/24px-Reasonator_logo_proposal.png"
    alt={entity.id}
  />
</a>

<style>
  a {
    display: block;
    height: 100%;
  }
</style>

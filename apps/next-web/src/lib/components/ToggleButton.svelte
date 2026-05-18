<script lang="ts">
  let {
    checked = $bindable(false),
    width = "70px",
    height = "34px",
  }: {
    checked: boolean;
    width?: string;
    height?: string;
  } = $props();
</script>

<label
  class="toggle"
  style={`--toggle-width: ${width}; --toggle-height: ${height};`}
>
  <input type="checkbox" id="btnToggle" name="btnToggle" bind:checked />
  <span class="slider"></span>
</label>

<style>
  .toggle {
    --toggle-width: 90px;
    --toggle-height: 34px;
    --toggle-padding: 4px;
    --thumb-size: calc(var(--toggle-height) - (var(--toggle-padding) * 2));

    position: relative;
    display: inline-block;
    width: var(--toggle-width);
    height: var(--toggle-height);
  }

  .toggle input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    transition: 0.4s;
    border-radius: var(--toggle-height);
    overflow: hidden;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--thumb-size);
    width: var(--thumb-size);
    left: var(--toggle-padding);
    bottom: var(--toggle-padding);
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:checked + .slider:before {
    left: calc(100% - var(--thumb-size) - var(--toggle-padding));
  }
</style>

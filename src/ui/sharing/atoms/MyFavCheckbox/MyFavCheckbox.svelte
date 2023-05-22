<script>
	export let checked = false;
</script>

<label class="favbutton">
	<input aria-hidden="true" type="checkbox" bind:checked />
	{#if checked}
		💛
	{:else}
		🖤
	{/if}
</label>

<style>
	.favbutton {
		font-size: 2.5rem;
		position: relative;
		left: 110px;
		top: -160px;
	}
	input {
		opacity: 0;
	}
</style>

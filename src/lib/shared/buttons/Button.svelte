<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let disabled = false;
</script>

<button
	{disabled}
	type="submit"
	on:click={() => dispatch('submit')}
	class="group relative inline-block overflow-hidden border-2 border-brand-primary px-8 py-3 focus:outline-none focus:ring"
>
	<span
		class="absolute inset-y-0 left-0 w-0 bg-brand-primary transition-all duration-150 ease-linear group-hover:w-full group-active:bg-brand-primary"
	></span>

	<span
		class="relative text-sm font-medium text-brand-primary transition-colors duration-150 ease-linear group-hover:text-brand-black"
	>
		<slot />
	</span>
</button>

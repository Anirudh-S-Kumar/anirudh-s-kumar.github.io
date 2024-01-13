<script>
	import WorkExp from '$lib/shared/WorkExp.svelte';

	/**
	 * @type {any}
	 */
	export let experiences;
</script>

<h1
	class="mt-20 text-center text-3xl font-extrabold capitalize text-white sm:text-4xl"
	id="experience"
>
	EXPERIENCE
</h1>

<hr class="border-1 mx-auto mb-12 mt-8 w-1/2 border-gray-500" />

<div class="relative mx-auto hidden w-full max-w-4xl p-10 md:block">
	{#each experiences as experience}
		<WorkExp {experience} />
	{/each}
</div>

<div class="relative mx-auto w-full md:hidden">
	{#each experiences as experience}
		<WorkExp {experience} />
	{/each}
</div>

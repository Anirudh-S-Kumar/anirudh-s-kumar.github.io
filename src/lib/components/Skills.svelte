<script lang="ts">
	import SkillCard from '$lib/shared/cards/SkillCard.svelte';
	export let skills: string[];
</script>

<h1 class="mt-20 text-center text-3xl font-extrabold capitalize text-white sm:text-4xl">SKILLS</h1>

<hr class="border-1 mx-auto mb-12 mt-8 w-1/2 border-gray-500" />

<ul class="mx-auto flex max-w-xl flex-wrap justify-center space-x-2 space-y-4">
	{#each skills as skill}
		<li class=""></li>
		<SkillCard>
			{skill}
		</SkillCard>
	{/each}
</ul>

<script lang="ts">
	interface Experience {
		startDate: string;
		endDate: string;
		title: string;
		company: string;
		tasks: string[];
	}

	export let experience: Experience;
</script>

<div class="relative mb-2 ml-60 text-white">
	<div class="absolute bottom-0 left-0 top-8 ml-3 w-2 bg-white pb-2 pt-2"></div>
	<div class="ml-16 flex flex-col items-start">
		<div class="flex">
			<div class="-translate-y-5 text-6xl">{experience.company}</div>
			<div class="absolute left-0 top-0 ml-1 h-6 w-6 rounded-full bg-brand-primary"></div>
			<div class="absolute left-0 top-0 -ml-60 text-xl">
				{experience.startDate} - {experience.endDate}
			</div>
		</div>
		<div class="-mt-1 text-2xl text-gray-400">{experience.title}</div>
		<ul class="mb-14 mt-1 list-inside list-disc text-xl text-white">
			{#each experience.tasks as task (task + Math.random())}
				<li class="my-2">{task}</li>
			{/each}
		</ul>
	</div>
</div>

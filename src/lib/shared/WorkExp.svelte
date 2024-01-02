<script lang="ts">
	interface Experience {
			startDate: string;
			endDate: string;
			title: string;
			company: string;
			logo: string;
			tasks: string[];
	}

	export let experience:Experience;
</script>

<div class="relative -ml-20 text-white mb-2 h-60">
	<div class="absolute top-7 left-0 ml-3 h-52 bg-brand-white w-2"></div>
	<div class="absolute -top-1 left-0 ml-1 w-6 h-6 bg-brand-primary border-2 border-gray-500 rounded-full"></div>
	<div class="absolute -top-1 left-0 -ml-52 text-lg">{experience.startDate} - {experience.endDate}</div>
	<div class="absolute -top-5 left-0 ml-16 w-full">
			<div class="text-6xl mb-4">{experience.company}</div>
			<div class="mt-1 mb-6 text-brand-white text-xl">{experience.title}</div>
			<ul class="mt-1 list-disc list-inside text-white">
					{#each experience.tasks as task (task)}
							<li>{task}</li>
					{/each}
			</ul>
	</div>
</div>
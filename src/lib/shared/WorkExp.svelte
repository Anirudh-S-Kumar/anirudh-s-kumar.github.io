<script lang="ts">
	interface Experience {
		start_date: string;
		end_date: string;
		company: string;
		work: [
			{
				title: string;
				start_date: string;
				end_date: string;
				tasks: string[];
			}
		];
		
	}

	export let experience: Experience;
</script>

<div class="hidden md:block relative mb-2 ml-60 text-white">
    <div class="absolute bottom-0 left-0 top-8 ml-3 w-2 bg-white pb-2 pt-2"></div>
    <div class="ml-16 flex flex-col items-start">
        <div class="flex">
            <div class="-translate-y-2 text-4xl font-semibold">{experience.company}</div>
            <div class="absolute left-0 top-0 ml-1 h-6 w-6 rounded-full bg-brand-primary"></div>
            <div class="absolute left-0 top-0 -ml-60 text-xl">
                {experience.start_date} - {experience.end_date}
            </div>
        </div>
        
        {#each experience.work as work (work.title + Math.random())}
            <div class="-mt-1 text-xl text-gray-500 font-semibold">{work.title} ({work.start_date} - {work.end_date}) </div>
            <ul class="mb-8 mt-1 list-inside list-disc text-lg text-white">
                {#each work.tasks as task (task + Math.random())}
                    <li class="my-2">{task}</li>
                {/each}
            </ul>
        {/each}

    </div>
</div>

<div class="md:hidden text-white">
	<div class="text-3xl font-semibold">{experience.company}</div>
	<div class="text-lg">
		{experience.start_date} - {experience.end_date}
	</div>
	{#each experience.work as work (work.title + Math.random())}
	<div class="mt-2 text-xl text-gray-500 font-semibold">{work.title} ({work.start_date} - {work.end_date}) </div>
	<ul class="mb-12 mt-1 list-inside list-disc text-md text-white">
		{#each work.tasks as task (task + Math.random())}
			<li class="my-2">{task}</li>
		{/each}
	</ul>
	{/each}

</div>
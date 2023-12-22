<script>
    export let project = {
        title: 'Project Title',
        description: 'This is a short description of the project.',
        stack: ['Stack Item'],
        link: '#'
    };
    export let cardRef;
</script>

<div
    bind:this={cardRef}
    class="flex h-full transform justify-between flex-col rounded-xl bg-brand-gray p-8 text-center text-brand-white shadow-lg transition-transform duration-200 ease-linear hover:-translate-y-2 sm:min-h-[20em] md:min-h-[25em] lg:min-h-[30em]"
>
    <h1 class="text-4xl font-semibold text-white sm:text-3xl md:text-4xl">
        {project.title}
    </h1>
    <p class="mt-6 flex-grow text-sm sm:text-base md:text-lg">
        {project.description}
    </p>

    <div class="my-6 flex flex-wrap justify-center space-x-4">
        {#each project.stack as item (item)}
            <span class="text-sm font-medium text-gray-500">
                {item}
            </span>
        {/each}
    </div>

    <a href={project.link} class="ml-3 text-lg"> Link Icon </a>
</div>
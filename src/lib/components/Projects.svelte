<script lang="ts">
    import { onMount } from 'svelte';
    import ProjectCard from '$lib/shared/cards/ProjectCard.svelte';

    let cardRefs:any[] = [];

    let projects = [
        {
            id: 0,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Sed euismod, diam eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },

        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet,',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },
        {
            id: 2,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet,',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },
        {
            id: 3,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet,',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },
        {
            id: 4,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet,',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },
        {
            id: 5,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet,',
            stack: ['Stack Item 1', 'Stack Item 2', 'Stack Item 3'],
            link: '#'
        },

    ]

    onMount(() => {
        window.onload = () => {
            const maxHeight = Math.max(...cardRefs.map(ref => ref.offsetHeight));
            cardRefs.forEach(ref => {
                ref.style.height = `${maxHeight}px`;
            });
        };
    });

</script>

<h1 class="font-extrabold text-3xl sm:text-4xl capitalize text-center text-white mt-20">
    PROJECTS
</h1>

<hr class="w-1/2 mx-auto mt-8 mb-12 border-1 border-gray-500" />

<div class="max-w-4/5 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
    {#each projects as project (project.id)}
        <ProjectCard bind:cardRef={cardRefs[project.id]} {project} />
    {/each}
</div>
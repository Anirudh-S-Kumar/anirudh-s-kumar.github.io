<script lang="ts">
    import { onMount } from 'svelte';
    import ProjectCard from '$lib/shared/cards/ProjectCard.svelte';

    let cardRefs:any[] = [];

    interface Project {
        id: number,
        title: string,
        description: string,
        stack: string[],
        extern_link: string,
        gh_link: string,
        gh: boolean,
        external: boolean
    }

    export let projects: Project[];

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
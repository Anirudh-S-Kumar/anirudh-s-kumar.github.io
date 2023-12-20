<script lang="ts">
    import Button from '$lib/shared/buttons/Button.svelte';
    import SlideButton from '$lib/shared/buttons/SlideButton.svelte';
</script>

<div class="flex items-center justify-center sm:justify-end">
    <nav class="flex justify-around mt-10 w-full sm:w-96">
        <!-- <SlideButton>Experience</SlideButton> -->

        <SlideButton>Projects</SlideButton>

        <SlideButton>Contact</SlideButton>
    </nav>
</div>


<!-- <script lang="ts">
    import { onMount } from 'svelte';
    import Button from '$lib/shared/buttons/Button.svelte';
    import SlideButton from '$lib/shared/buttons/SlideButton.svelte';

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<div class="flex items-center justify-center sm:justify-end fixed top-0 right-0 p-4">
    <button class="sm:hidden flex flex-col justify-around w-6 h-6 text-white" on:click={toggleMenu}>
        <span class="block w-6 h-0.5 bg-white transform transition-transform duration-500 {isOpen ? 'rotate-45' : ''}"></span>
        <span class="block w-6 h-0.5 bg-white transform transition-transform duration-500 {isOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-6 h-0.5 bg-white transform transition-transform duration-500 {isOpen ? '-rotate-45' : ''}"></span>
    </button>

    <nav class="fixed inset-0 flex items-center justify-center sm:justify-end sm:relative sm:items-start sm:flex-row mt-10 w-full sm:w-96 {isOpen ? '' : 'hidden'} sm:block">
        <SlideButton>Experience</SlideButton>
        <SlideButton>Projects</SlideButton>
        <SlideButton>Contact</SlideButton>
    </nav>
</div> -->
<script lang="ts">
    import Button from '$lib/shared/buttons/Button.svelte';
    import SlideButton from '$lib/shared/buttons/SlideButton.svelte';
    import Hamburger from './Hamburger.svelte';
</script>

<div class="hidden sm:flex sm:items-center md:justify-end sm:justify-center">
    <nav class="flex justify-around mt-10 w-full sm:w-96">
        <SlideButton href="#experience">Experience</SlideButton>

        <SlideButton href="#projects">Projects</SlideButton>

        <SlideButton href="#contact">Contact</SlideButton>
    </nav>
</div>

<div class="sm:hidden">
    <Hamburger />
</div>
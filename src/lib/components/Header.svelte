<script lang="ts">
	import Button from '$lib/shared/buttons/Button.svelte';
	import SlideButton from '$lib/shared/buttons/SlideButton.svelte';
	import Hamburger from './Hamburger.svelte';
</script>

<div class="hidden sm:flex sm:items-center sm:justify-center md:justify-end">
	<nav class="mt-10 flex w-full justify-around sm:w-96">
		<SlideButton href="#experience">Experience</SlideButton>

		<SlideButton href="#projects">Projects</SlideButton>

		<SlideButton href="#contact">Contact</SlideButton>
	</nav>
</div>

<div class="sm:hidden">
	<Hamburger />
</div>

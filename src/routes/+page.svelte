<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Header from '$lib/components/Header.svelte';
	import Terminal from '$lib/components/Terminal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import { onMount } from 'svelte';

	let content: any;

	onMount(async () => {
		const res = await fetch('/content.json');
		content = await res.json();
	});
</script>

{#if content}
	<div class="m-auto max-w-5xl px-10 text-inherit">
		<Header />
		<Hero 
            text={content.Metadata.Pseudonym}
            about={content.Metadata.About} />
		<Terminal qna_list={content.Terminal}/>
	</div>

	<div class="m-auto max-w-screen-xl px-10 text-inherit">
		<Experience experiences={content.Experience}/>
		<Projects projects={content.Projects}/>

		<Skills />
	</div>

	<div class="m-auto max-w-5xl px-10 text-inherit">
		<Contact />

		<Footer />
	</div>
{/if}

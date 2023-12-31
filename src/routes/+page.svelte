<script lang="ts">
    import Button from "$lib/shared/buttons/Button.svelte";
    import Hero from "$lib/components/Hero.svelte";
	import Header from "$lib/components/Header.svelte";
	import Terminal from "$lib/components/Terminal.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Skills from "$lib/components/Skills.svelte";

</script>

<div class="max-w-5xl m-auto px-10 text-inherit">
    <Header/>
    <Hero/>
    <Terminal/>
</div>

<div class="max-w-screen-xl m-auto px-10 text-inherit">
    <Projects/>

    <Skills/>
</div>

<div class="max-w-5xl m-auto px-10 text-inherit">
    <Contact/>
    
    <Footer/>

</div>


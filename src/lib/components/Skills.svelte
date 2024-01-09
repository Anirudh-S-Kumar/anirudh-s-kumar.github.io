<script lang="ts">
	import SkillCard from "$lib/shared/cards/SkillCard.svelte";
    export let skills:string[];
</script>

<h1 class="font-extrabold text-3xl sm:text-4xl capitalize text-center text-white mt-20">
    SKILLS
</h1>

<hr class="w-1/2 mx-auto mt-8 mb-12 border-1 border-gray-500" />

<ul class="max-w-xl mx-auto flex flex-wrap justify-center space-x-2 space-y-4">
    {#each skills as skill}
        <li class=""></li>
        <SkillCard>
            {skill}
        </SkillCard>
    {/each}

</ul>
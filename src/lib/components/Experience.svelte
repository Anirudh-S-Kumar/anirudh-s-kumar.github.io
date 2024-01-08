<script>
	import WorkExp from "$lib/shared/WorkExp.svelte";



  /**
	 * @type {any}
	 */
   export let experiences;
</script>


<h1 class="font-extrabold text-3xl sm:text-4xl capitalize text-center text-white mt-20" >
  EXPERIENCE
</h1>

<hr class="w-1/2 mx-auto mt-8 mb-12 border-1 border-gray-500" />



<div class="hidden md:block relative mx-auto w-full max-w-4xl p-10">
  {#each experiences as experience }
    <WorkExp {experience}/>
  {/each}
</div>

<div class="md:hidden relative mx-auto w-full">
  {#each experiences as experience }
    <WorkExp {experience}/>
  {/each}
</div>
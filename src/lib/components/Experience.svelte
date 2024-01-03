<script>
	import WorkExp from "$lib/shared/WorkExp.svelte";



  let experiences = [
    {
      startDate: "Jan, 2020",
      endDate: "Aug, 2021",
      title: "Software Engineer Software",
      company: "Google",
      logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
      tasks: [
        "Built a search engine",
        "Built a web browser",
        "Built a mobile OS"
      ]
    },

    {
      startDate: "Jan, 2020",
      endDate: "Aug, 2021",
      title: "Software Engineer",
      company: "Google",
      logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
      tasks: [
        "Built a search engine Built a search engine Built a search engine Built a search engine ",
        "Built a web browser",
        "Built a mobile OS",
        "Built a search engine",
        "Built a web browser",
        "Built a mobile OS",
        "Built a search engine",
        "Built a web browser",
        "Built a mobile OS"
      ]
    },

  ]
</script>


<h1 class="font-extrabold text-4xl capitalize text-center text-white mt-20">
  EXPERIENCE
</h1>

<hr class="w-1/2 mx-auto mt-8 mb-12 border-1 border-gray-500" />



<div class="relative mx-auto w-full max-w-4xl p-10">
  {#each experiences as experience }
    <WorkExp {experience}/>
  {/each}
</div>
<script>
	import WorkExp from "$lib/shared/WorkExp.svelte";



  let experiences = [
    {
      startDate: "Jan, 2020",
      endDate: "Aug, 2021",
      title: "Software Engineer Software",
      company: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
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
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      tasks: [
        "Built a search engine",
        "Built a web browser",
        "Built a mobile OS"
      ]
    },

  ]
</script>


<div class="relative mx-auto w-full max-w-xl p-10">
  {#each experiences as experience }
    <WorkExp {experience}/>
  {/each}
</div>
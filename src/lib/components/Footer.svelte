<script lang="ts">
	import LogoSlideButton from '$lib/shared/buttons/LogoSlideButton.svelte';

	let year = new Date().getFullYear();

	interface Links {
		github: string;
		linkedin: string;
		mail: string;
	}

	export let links: Links;
</script>

<footer class="body-font text-gray-600">
	<div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
		<p
			class="md:text-md mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-gray-200 sm:py-2 sm:pl-4"
		>
			©{year} AfterChange
		</p>
		<span class="mt-4 inline-flex justify-center space-x-6 sm:ml-auto sm:mt-0 sm:justify-start">
			<!-- <a class="ml-6 text-gray-500" href="mailto:${links.mail}">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;" data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
              <path stroke="none" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></path>
              <circle cx="4" cy="4" r="2" stroke="none" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></circle>
            </svg>
          </a>  
        <a class="ml-6 text-gray-500" href="{links.github}">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;" data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
              <path stroke="none" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></path>
              <circle cx="4" cy="4" r="2" stroke="none" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></circle>
            </svg>
          </a>
      <a class="ml-6 text-gray-500" href="{links.linkedin}">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24" style="--darkreader-inline-fill: currentColor; --darkreader-inline-stroke: currentColor;" data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></path>
          <circle cx="4" cy="4" r="2" stroke="none" style="--darkreader-inline-stroke: none;" data-darkreader-inline-stroke=""></circle>
        </svg>
      </a> -->
			<LogoSlideButton href="mailto:{links.mail}" type="mail" />
			<LogoSlideButton href={links.github} type="github" />
			<LogoSlideButton href={links.linkedin} type="linkedin" />
		</span>
	</div>
</footer>

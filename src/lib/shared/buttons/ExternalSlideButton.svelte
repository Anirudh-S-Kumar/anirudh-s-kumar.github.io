<script lang="ts">
	export let link: string = '#';
	let isHovered = false;
</script>

<a
	class="flex-shrink-0s inline-flex items-center bg-transparent py-2"
	on:mouseover={() => (isHovered = true)}
	on:focus={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	on:blur={() => (isHovered = false)}
	href={link}
	target="_blank"
>
	<span class="relative">
		<span
			class="{isHovered
				? 'text-brand-primary'
				: 'text-neutral-100'} text-xl transition-all duration-200 ease-in-out"
		>
			<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
				></path>
			</svg>
		</span>
		<span
			class="absolute left-0 mt-2 h-1 bg-brand-primary transition-all duration-200 ease-in-out"
			style="width: {isHovered ? '100%' : '0'};"
		></span>
	</span>
</a>

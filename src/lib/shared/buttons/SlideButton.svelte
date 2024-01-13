<script lang="ts">
	let isHovered = false;
	export let href: string;
</script>

<a
	{href}
	class="inline-flex items-center bg-transparent py-2"
	on:mouseover={() => (isHovered = true)}
	on:focus={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	on:blur={() => (isHovered = false)}
>
	<span class="relative">
		<span
			class="{isHovered
				? 'text-brand-primary'
				: 'text-neutral-100'} text-xl transition-all duration-200 ease-in-out"
		>
			<slot />
		</span>
		<span
			class="absolute left-0 h-1 bg-brand-primary transition-all duration-200 ease-in-out"
			style="width: {isHovered ? '100%' : '0'}; bottom: -5px;"
		></span>
	</span>
</a>

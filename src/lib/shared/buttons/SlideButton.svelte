<script>
	let isHovered = false;
</script>

<button
	class="inline-flex items-center py-2 bg-transparent"
	on:mouseover={() => (isHovered = true)}
	on:focus={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	on:blur={() => (isHovered = false)}
>
	<span class="relative">
		<span
			class="{isHovered
				? 'text-brand-primary'
				: 'text-neutral-100'} transition-all ease-in-out duration-200 text-xl"
		>
			<slot />
		</span>
		<span
			class="absolute left-0 h-1 bg-brand-primary transition-all ease-in-out duration-200"
			style="width: {isHovered ? '100%' : '0'}; bottom: -5px;"
		></span>
	</span>
</button>

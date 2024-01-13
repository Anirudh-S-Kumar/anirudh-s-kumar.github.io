<script lang="ts">
	export let question: string;
	const banner = '\u276F \u276F \u276F '.split(' ');
	const colors = ['#ef4444', '#eab308', '#22c55e'];
</script>

<p class="whitespace-pre-wrap px-4 text-sm text-gray-200 sm:text-base md:text-lg">
	{#each banner as char, i (i)}
		<span
			class="char-{i % colors.length}"
			style="--color-{i % colors.length}: {colors[i % colors.length]}; margin-right:1px"
			>{char}</span
		>
	{/each}
	{question}
</p>

<style>
	.char-0 {
		color: var(--color-0);
	}
	.char-1 {
		color: var(--color-1);
	}
	.char-2 {
		color: var(--color-2);
	}
</style>

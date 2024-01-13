<script lang="ts">
	export let answer: string = '';
	export let link: string = '';
	export let answer_list: string[] = [];
	export let link_list: string[] = [];
	export let is_link: boolean = false;
	export let is_list: boolean = false;
</script>

<div class="mb-6 pl-4 text-sm sm:mb-8 sm:text-base md:text-lg">
	{#if is_list}
		<span class="text-[#E5C07A]">[</span>{#each answer_list as ans, i (i)}<span
				class="text-[#E5C07A]">"</span
			>{#if is_link}<a class="text-[#62AEEF]" href={link_list[i]}>{ans}</a>{:else}<span
					class="text-[#E5C07A]">{ans}</span
				>{/if}<span class="text-[#E5C07A]">"</span><span class="text-[#E5C07A]"
				>{i === answer_list.length - 1 ? '' : ', '}</span
			>{/each}<span class="text-[#E5C07A]">]</span>
	{:else if is_link}
		<a class="text-[#62AEEF]" href={link}>"{answer}"</a>
	{:else}
		<span class="text-[#E5C07A]">"{answer}"</span>
	{/if}
</div>

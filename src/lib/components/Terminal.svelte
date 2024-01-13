<script lang="ts">
	import TerminalAnswer from '$lib/shared/terminal/TerminalAnswer.svelte';
	import TerminalQuestion from '$lib/shared/terminal/TerminalQuestion.svelte';

	interface TerminalQnA {
		question: string;
		answer: string;
		link: string;
		is_link: boolean;
		is_list: boolean;
		answer_list: string[];
		link_list: string[];
	}

	export let qna_list: TerminalQnA[];
</script>

<div class="mt-20 w-full rounded-lg bg-brand-gray font-mono text-black sm:w-auto">
	<div class="relative flex items-center rounded-t-lg bg-gray-300 p-3">
		<div class="flex space-x-2">
			<div class="h-3 w-3 rounded-full bg-red-500"></div>
			<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
			<div class="h-3 w-3 rounded-full bg-green-500"></div>
		</div>
		<p class="absolute left-0 right-0 mx-auto text-center">/about</p>
	</div>
	<div class="p-4 text-gray-200 sm:p-10">
		{#each qna_list as qna, i (i)}
			<TerminalQuestion question={qna.question} />
			<TerminalAnswer
				answer={qna.answer}
				link={qna.link}
				is_link={qna.is_link}
				is_list={qna.is_list}
				answer_list={qna.answer_list}
				link_list={qna.link_list}
			/>
		{/each}
	</div>
</div>

<script lang="ts">
    import TerminalAnswer from "$lib/shared/terminal/TerminalAnswer.svelte";
    import TerminalQuestion from "$lib/shared/terminal/TerminalQuestion.svelte";

    interface TerminalQnA{
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

<div class="w-full sm:w-auto bg-brand-gray rounded-lg mt-20 text-black font-mono">
    <div class="flex items-center bg-gray-300 rounded-t-lg p-2">
        <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p class="mx-auto ">/about</p>
    </div>
    <div class="p-4 sm:p-10 text-gray-200">
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
<script lang="ts">
    import TerminalAnswer from "$lib/shared/terminal/TerminalAnswer.svelte";
import TerminalQuestion from "$lib/shared/terminal/TerminalQuestion.svelte";
</script>

<div class="w-auto bg-gray-800 rounded-lg mt-20 text-black font-mono">
    <div class="flex items-center bg-gray-300 rounded-t-lg p-2">
        <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p class="mx-auto">/about</p>
    </div>
    <div class="p-10 text-gray-200">
        <TerminalQuestion prompt="afterchange.real_name" />
        <TerminalAnswer answer_list={["Siddharth Singh", "Lorem Ipsum"]} link_list={['#', '#']} is_link={true} is_list={true}  />
        <TerminalQuestion prompt="afterchange.real_name" />
        <TerminalAnswer answer={"Anirudh"} />
        <TerminalQuestion prompt="afterchange.real_name" />
        <TerminalAnswer answer={"Anirudh"} link={"#"} is_link={true} />
        <TerminalQuestion prompt="afterchange.real_name" />
        <TerminalAnswer answer_list={["Siddharth Singh", "Lorem Ipsum"]} link_list={['#', '#']}  is_list={true}  />



    </div>
</div>  
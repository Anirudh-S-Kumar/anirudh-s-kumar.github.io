<script lang="ts">
    import TerminalPrompt from "$lib/shared/TerminalPrompt.svelte";
</script>

<div class="w-auto bg-black rounded-lg text-black font-mono">
    <div class="flex items-center bg-gray-300 rounded-t-lg p-2">
        <div class="flex space-x-3">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p class="mx-auto">/about</p>
    </div>
    <div class="p-2 text-white">
        <TerminalPrompt prompt="> whoami" answer="afterchange" />
        <TerminalPrompt prompt="> whoami" answer="afterchange" />
    </div>
</div>  
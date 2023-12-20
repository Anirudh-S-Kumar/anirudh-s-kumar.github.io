<script lang="ts">


    export let color: string = "teal";

    let btnClass: string = "";

    if (color === "teal"){
        btnClass = "text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2";
    }
    else if (color === "teal_outline"){
        btnClass = "text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2";
    }

</script>

<button
	type="button"
	class="{btnClass}"
    on:click
	><slot></slot>
    
    </button
>
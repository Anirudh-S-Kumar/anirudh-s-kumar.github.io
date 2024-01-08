<script lang="ts">
	export let text:string;
	export let about:string;
	let displayText:string = "";
	let index:number = 0;


	
	function type() {
		if (index < text.length) {
			displayText += text.charAt(index);
			index++;
			setTimeout(type, 100);
		}
	}


	setTimeout(type, 1000);
</script>

<div>
	<div class="terminal py-5 font-mono font-semibold text-2xl lg:text-9xl mt-8 text-white overflow-hidden" >
		{displayText}
	</div>

  <div class="text-gray-200 text-md mt-5 lg:mt-10 sm:text-xl md:text-2xl">
	{about}
  </div>

</div>

<style>
	@keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink {
        0%, 100% { opacity: 0 }
        50% { opacity: 1 }
    }

    .terminal {
        letter-spacing: .15em; /* Adjust as needed */
        direction: ltr; /* Makes the animation start from left to right */
    }

	@media (min-width: 400px) {
		.terminal {
			font-size: 2rem;
			margin-top: 3rem;
		}
	}

	@media (min-width: 640px) {
		.terminal {
			font-size: 3rem;
			margin-top: 4rem;
		}
	}

	@media (min-width: 768px) {
		.terminal {
			font-size: 4.5rem;
			margin-top: 5rem;
		}
	}

	.terminal::before {
		content: '>\A0';
	}

	.terminal::after {
		content: '\00a0';
		background-color: whitesmoke;
		animation: blink 1s step-end infinite;
		animation-delay: 3s; /* adjust as needed */
	}
</style>	
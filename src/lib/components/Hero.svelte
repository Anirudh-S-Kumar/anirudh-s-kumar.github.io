<script lang="ts">
	let text:string = "AfterChange";
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
	<div class="terminal">
		{displayText}
	</div>

  <div class="text-gray-200 text-lg mt-10 sm:text-xl md:text-2xl">
    I am a 3rd year Undergraduate student at IIIT Delhi, interested in all things related to Software Development and Cybersecurity
    
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
		padding-top: 20px;
		padding-bottom: 20px;
		font-family: 'Fira Mono', monospace;
		font-weight: 500;
		font-size: 1.6rem;
		margin-top: 2rem;
        color: whitesmoke;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
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
	}
</style>	
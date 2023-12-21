<div>
	<div class="terminal">Anirudh</div>

  <div class="text-gray-200 text-2xl mt-10">
    I am a 3rd year Undergraduate student at IIIT Delhi, interested in all things related to Software Development and Cybersecurity
    
  </div>

</div>

<style>
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.terminal {
		color: whitesmoke;
		padding: 20px;
		font-family: 'Fira Mono', monospace;
		font-size: 2rem;
		margin-top: 5rem;
	}

	@media (min-width: 640px) {
		.terminal {
			font-size: 3rem;
		}
	}

	@media (min-width: 768px) {
		.terminal {
			font-size: 4.5rem;
		}
	}

	.terminal::before {
		content: '>\A0';
	}

	.terminal::after {
		content: '\00a0';
		background-color: whitesmoke;
		animation: blink 1s infinite;
	}
</style>

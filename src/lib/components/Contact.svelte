<script lang="ts">
	import Button from '$lib/shared/buttons/Button.svelte';

	export let token: string = "#";
	let displayStatus: boolean = false;
	let isLoading: boolean = false;

	const handleSubmit = async (data: { currentTarget: HTMLFormElement | undefined; }) => {
		isLoading = true;
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			displayStatus = true;
			isLoading = false;
			setTimeout(() => {
				displayStatus = false;
			}, 5000);
		}
	};
</script>

<section class="body-font relative text-gray-600">
	<div class="container mx-auto px-5">
		<div class="mb-12 flex w-full flex-col text-center">
			<h1 class="mt-20 text-center text-3xl sm:text-4xl font-extrabold capitalize text-white" id="contact">GET IN TOUCH</h1>
			<hr class="border-1 mx-auto mb-12 mt-8 w-1/2 border-gray-500" />
		</div>
		<form class="mx-auto lg:w-4/5" on:submit|preventDefault={handleSubmit}>
			<input type="hidden" name="access_key" value={token} />
			<div class="-m-2 flex flex-wrap">
				<div class="w-full px-4 sm:w-1/2">
					<div class="relative">
						<label
							for="input-group-1"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Name</label
						>
						<div class="relative mb-6">
							<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="user"
									><path
										class="h-4 w-4 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
										viewBox="0 0 20 16"
									></path></svg
								>
							</div>
							<input
								name="name"
								type="text"
								id="name"
								class="block w-full rounded-lg border border-brand-gray bg-brand-gray p-2.5 ps-10 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-brand-primary"
								placeholder="John Doe"
							/>
						</div>
					</div>
				</div>
				<div class="w-full px-4 sm:w-1/2">
					<div class="relative">
						<label
							for="input-group-1"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</label
						>
						<div class="relative mb-6">
							<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
								<svg
									class="h-4 w-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<path
										d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
									/>
									<path
										d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
									/>
								</svg>
							</div>
							<input
								name="email"
								type="email"
								id="email"
								class="block w-full rounded-lg border border-brand-gray bg-brand-gray p-2.5 ps-10 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-brand-primary"
								placeholder="john.doe@domain.com"
							/>
						</div>
					</div>
				</div>
				<div class="w-full p-2">
					<div class="relative">
						<label
							for="message"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Your message</label
						>
						<textarea
							name="message"
							id="message"
							rows="4"
							class="block w-full rounded-lg border border-brand-gray bg-brand-gray p-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-brand-primary"
							placeholder="Write your thoughts here..."
						></textarea>
					</div>
					<div class="mt-10 flex justify-center">
						<Button disabled={isLoading}>Submit</Button>
					</div>
				</div>
				{#if displayStatus}
					<div
						class="mx-auto mb-3 mt-10 inline-flex w-1/2 items-center rounded-lg bg-brand-primary px-10 py-4 text-base text-brand-black"
						role="alert"
					>
						<span class="mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
						Message sent successfully!
					</div>
				{/if}
			</div>
		</form>
	</div>
</section>

<script>
	import Button from '$lib/shared/buttons/Button.svelte';
</script>

<section class="body-font relative text-gray-600">
	<div class="container mx-auto px-5">
		<div class="mb-12 flex w-full flex-col text-center">
			<h1 class="mt-20 text-center text-4xl font-extrabold capitalize text-white">GET IN TOUCH</h1>
			<hr class="border-1 mx-auto mb-12 mt-8 w-1/2 border-gray-500" />
		</div>
		<form class="mx-auto lg:w-4/5">
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
								type="text"
								id="input-group-1"
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
								type="email"
								id="input-group-1"
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
							id="message"
							rows="4"
							class="block w-full rounded-lg border border-brand-gray bg-brand-gray p-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-brand-primary"
							placeholder="Write your thoughts here..."
						></textarea>
					</div>
					<div class="mt-10 flex justify-center">
						<Button>Submit</Button>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>

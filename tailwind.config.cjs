/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sans' : ["Poppins", "monospace"],
				'mono' : ['Fira Mono', 'monospace']
			},
		}
	},

	plugins: []
};

module.exports = config;

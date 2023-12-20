/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sans' : ["Poppins", "Fira Monp", "monospace"]
			},
		}
	},

	plugins: []
};

module.exports = config;

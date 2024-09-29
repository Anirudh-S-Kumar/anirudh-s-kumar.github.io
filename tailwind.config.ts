import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
			fontFamily: {
				sans: ['Poppins', 'monospace'],
				mono: ['Fira Mono', 'monospace']
			},
			colors: {
				'brand-black': '#0B0C10',
				'brand-gray': '#1F2833',
				'brand-primary': '#66FCF1',
				'brand-secondary': '#45A29E',
				'brand-white': '#C5C6C7'
			} 
    }

  },

  plugins: []
} as Config;

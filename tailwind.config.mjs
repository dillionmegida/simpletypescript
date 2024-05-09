/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      main: "var(--main-color)",
      course: "var(--course-color)",
      tips: "var(--tips-color)",
      errors: "var(--errors-color)",
      blue: "rgb(41, 151, 246)",
      yellow: "rgb(246, 243, 41)",
      green: "rgb(188, 246, 41)",
      white: "#fff"
    },

		extend: {},
	},
	plugins: [],
}
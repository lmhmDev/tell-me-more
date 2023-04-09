/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#FFD9DA',
				mainColor: '#EA638C',
				mainColorHover: '#E7527F',
				textColor: '#30343F'
			},
			animation: {
				blinking: 'blink 1s steps(5, start) infinite'
			},
			keyframes: {
				blink: {
					to: { visibility: 'hidden' }
				}
			}
		}
	},
	plugins: []
}

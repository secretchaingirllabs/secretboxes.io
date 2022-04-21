module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		colors: {
			yellow: '#F8D948',
			green: '#48F881',
			pink: '#F848BF',
			blue: '#4867F8',
			white: '#FFFFFF',
			black: '#282828',
			gray: {
				100: '#939597',
				200: '#797B7E',
				300: '#4E4B66',
			}
		},
		// Note: Sans will default for all text.
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			heading: ['Gobold High', 'sans-serif'],
		},
		borderRadius: {
			'none': '0',
      		'sm': '.125rem',
      		DEFAULT: '.25rem',
      		'lg': '.5rem',
      		'full': '9999px',
		},
	},
	plugins: [],
}

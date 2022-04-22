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
		fontSize: {
				'h1': '6rem',
				'h2': '3.75rem',
				'h3': '3rem',
				'h4': '2.125rem',
				'h5': '1.5rem',
				'h6': '1.25rem',
				'large': '1.25rem',
				'regular': '1rem',
				'small': '0.875rem',
				'xs': '0.75rem',
				'2xs': '0.625rem',
			},
		borderRadius: {
			'none': '0',
      		'sm': '.125rem',
      		DEFAULT: '.25rem',
      		'lg': '.5rem',
      		'full': '9999px',
		},
		extend: {
			letterSpacing: {
				'0': '0px',
				'0.1': '0.1px',
				'0.15': '0.15px',
				'0.5': '0.5px',
				'1.25': '1.25px',
				'1.5': '1.5px',
				'2.5': '2.5px',

				// Same sizes as before, but is relative to font-size of element
				// 'tracking-0': '0em',
				// 'tracking-0.1': '0.00625em',
				// 'tracking-0.15': '0.009375em',
				// 'tracking-0.5': '0.03125em',
				// 'tracking-1.25': '0.078125em',
				// 'tracking-1.5': '0.09375em',
				// 'tracking-2.5': '0.15625em',

			},
		}
	},
	plugins: [],
}

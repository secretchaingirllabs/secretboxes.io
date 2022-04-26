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
			// Base
			transparent: 'transparent',
			current: 'currentColor',
			background: '#1E2022',

			// Brand Colors
			primary: '#F8D948',
			secondary: '#939597',

			// Buttons & Input Text
			black: '#1B1B1B',
			yellow: '#FFEC8B', // Main Button Hover
			tan: 'rgba(255, 242, 183, 0.4)', // Button Focus
			blue: {
				200: '#7C93FF', // Linear Gradient 1 (ButtonCTA Hover)
				300: '#6782FF', // Linear Gradient 1
				400: '#5C79FF', // Linear Gradient 2 (ButtonCTA)
				500: '#3A5DFF', // Linear Gradient 2
				600: '#4261EE', // Button Text
				700: '#4867F8', // Blue Icons
				800: '#528AD3' // Beginner Tag (Note: this is out of tailwindcss color ordering)
			},
			gray: '#E3E3E3', // Button Disable Color
			white: '#FFFFFF',
			purple: {
				100: '#4E4B66', // Primary Button Color
				200: '#6E7191', // Primary Button Hover Color
			},
			orange: {
				100: '#FF6A1E', // Intermidate Tag Text + Icon
				200: '#FF7A00' // Used for text sometimes
			},
			green: '#4DAE00', // Advanced Tag Text + Icon
			// Dropdown
			dropdown: '#FFED98'
		},
		fontFamily: {
			sans: ['Golos', 'Arial', 'sans-serif'],
			display: ['Chaney Wide', 'Arial', 'sans-serif'],
		},
		fontSize: {
			// For display font (Chaney Wide)
			display: ['4.25rem', '4.5rem'], // 68px, 72px
			h1: ['4.25rem', '4.5rem'], // 68px, 72px
			h2: ['2.625rem', '3rem'], // 42px, 48px
			h3: ['2.125rem', '2.375rem'], // 34px, 38px
			h4: ['1.625rem', '3rem'], // 26px, 48px
			h5: ['1rem', '1.5rem'], // 16px, 24px

			// For sans font (Golos)
			lg: ['1.625rem', '3rem'], // 26px 48px
			DEFAULT: ['1rem', '1.5rem'], // 16px 24px
			sm: ['0.875rem', '1.5rem'], // 14px 24px
			xsm: ['0.75rem', '1rem'], // 12px 16px
			xsm2: ['0.625rem', '1rem'], // 10px 16px
		},
		extend: {
			letterSpacing: {
				DEFAULT: '0.0016em',
				'0.5': '0.5px',
				'1.25': '1.25px',
				'1': '1px',
				'1.5': '1.5px',
				'2': '2px',
			},
			colors: {
				// These are used for Tag backgrounds
				'blue-rgba': 'rgba(82, 138, 211, 0.12)', // Beginner Tag BG
				'green-rgba': 'rgba(77, 174, 0, 0.12)', // Advanced Tag BG
				'orange-rgba': 'rgba(255, 116, 45, 0.12)', // Intermediate Tag BG
			},
			gridTemplateRows: {
				'page': 'auto 1fr auto',
				'footer-left': '5fr auto'
			},
			gridTemplateColumns: {
				'footer': '2fr, minmax(0,1fr)'
			},
			gridAutoRows: {
				'fit': 'minmax(min-content, max-content)'
			},
			boxShadow: {
				'input': '0 0 0 3px #ffec8b',
				'input-double': '0 0 0 1px #F8D948, 0 0 0 3px #ffec8b',
			},
			backgroundImage: {
				'hero': "url('/illustrations/home_illustration.svg')",
				'hero-sky': "url('/illustrations/hero_sky_illustration.svg')",
				'footer': "",
				'search': "url('/icons/search_icon.svg')",
			},
			backgroundPosition: {
				'left-center': 'left 8px center',
			},
		}
	},
	plugins: [],
}

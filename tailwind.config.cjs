const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			red: '#FC4747',
			white: '#FFFFFF',
			blue: {
				'semi-dark': '#161D2F',
				dark: '#10141E',
				grey: '#5A698F'
			},
		},
		fontFamily: {
			sans: ['Outfit', ...defaultTheme.fontFamily.sans]
		},
		fontSize: {
			small: '13px',
			base: '15px',
			'heading-xs': ['18px', { fontWeight: 500 }],
			'heading-s': ['24px', { fontWeight: 500 }],
			heading: '24px',
			'heading-l': ['32px', { letterSpacing: '-0.5px' }]
		}
	},

	plugins: []
};

module.exports = config;

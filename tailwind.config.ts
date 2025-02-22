import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			// => @media (max-width: 1119px) { ... }
			md: { max: '1199px' }, // tablet

			// => @media (max-width: 743px) { ... }
			sm: { max: '743px' }, // mobile
		},
		fontSize: {
			// <p class="text-12-400 ...">The quick brown fox ...</p> 처럼 사용

			//fontsize: 12px
			'12-400': [
				'1.2rem',
				{
					fontWeight: '400',
				},
			],
			'12-500': [
				'1.2rem',
				{
					fontWeight: '500',
				},
			],
			'12-600': [
				'1.2rem',
				{
					fontWeight: '600',
				},
			],
			'12-700': [
				'1.2rem',
				{
					fontWeight: '700',
				},
			],

			//fontsize: 14px
			'14-400': [
				'1.4rem',
				{
					fontWeight: '400',
				},
			],
			'14-500': [
				'1.4rem',
				{
					fontWeight: '500',
				},
			],

			//fontsize: 16px
			'16-400': [
				'1.6rem',
				{
					fontWeight: '400',
				},
			],
			'16-500': [
				'1.6rem',
				{
					fontWeight: '500',
				},
			],
			'16-600': [
				'1.6rem',
				{
					fontWeight: '600',
				},
			],

			//fontsize: 18px
			'18-500': [
				'1.8rem',
				{
					fontWeight: '500',
				},
			],
			'18-700': [
				'1.8rem',
				{
					fontWeight: '700',
				},
			],

			//fontsize: 20px
			'20-500': [
				'2rem',
				{
					fontWeight: '500',
				},
			],
			'20-600': [
				'2rem',
				{
					fontWeight: '600',
				},
			],
			'20-700': [
				'2rem',
				{
					fontWeight: '700',
				},
			],

			//fontsize: 24px
			'24-700': [
				'2.4rem',
				{
					fontWeight: '700',
				},
			],
		},
		extend: {
			fontFamily: {
				// 예시) <p className="text-pretendard">
				pretendard: ['Pretendard Variable'],
			},
			colors: {
				// 예시) <p className="bg-gray-D">
				black: {
					0: '#000000',
					1: '#171717',
					3: '#333236',
					4: '#4B4B4B',
				},
				gray: {
					7: '#787486',
					9: '#9FA6B2',
					D: '#D9D9D9',
					E: '#EEEEEE',
					F: '#FAFAFA',
				},
				white: {
					DEFAULT: '#FFFFFF',
				},
				violet: {
					5: '#5534DA',
					F: '#F1EFFD',
				},
				red: {
					DEFAULT: '#D6173A',
				},
				green: {
					DEFAULT: '#7AC555',
				},
				purple: {
					DEFAULT: '#760DDE',
				},
				orange: {
					DEFAULT: '#FFA500',
				},
				blue: {
					DEFAULT: '#76A5EA',
				},
				pink: {
					DEFAULT: '#E876EA',
				},
			},
		},
	},
	plugins: [],
};
export default config;

export const tokens = {
	colors: {
		primary: {
			50: '#e6fffb',
			100: '#bff7f2',
			200: '#99eee8',
			300: '#4fe0d9',
			400: '#26cfc8',
			500: '#0ea5a4',
			600: '#0a8b86',
			700: '#066e69',
			800: '#04524e',
			900: '#023b3a',
		},
		secondary: {
			50: '#fff7f0',
			100: '#ffe6d9',
			200: '#ffd2b8',
			300: '#ffb889',
			400: '#ff9a52',
			500: '#ff7a1a',
			600: '#e66100',
			700: '#b94a00',
			800: '#8f3700',
			900: '#6f2a00',
		},
		neutral: {
			50: '#f9fafb',
			100: '#f3f4f6',
			200: '#e5e7eb',
			300: '#d1d5db',
			400: '#9ca3af',
			500: '#6b7280',
			600: '#4b5563',
			700: '#374151',
			800: '#1f2937',
			900: '#111827',
		},
		success: '#16a34a',
		danger: '#dc2626',
		warning: '#f59e0b',
		info: '#3b82f6',
		white: '#ffffff',
		black: '#000000',
	},

	spacing: {
		none: 0,
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
		'2xl': 48,
	},

	typography: {
		fontFamily: {
			base: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
			mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
		},
		fontSize: {
			xs: 12,
			sm: 14,
			md: 16,
			lg: 20,
			xl: 24,
			'2xl': 32,
		},
		fontWeight: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		lineHeight: {
			tight: 1.1,
			normal: 1.4,
			relaxed: 1.6,
		},
	},

	sizes: {
		avatar: 40,
		icon: 16,
		container: 1200,
	},

	radii: {
		none: 0,
		sm: 4,
		md: 8,
		lg: 12,
		full: 9999,
	},

	zIndex: {
		dropdown: 1000,
		sticky: 1100,
		modal: 1200,
		popover: 1300,
	},

	breakpoints: {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	},

	shadows: {
		sm: '0 1px 2px rgba(0,0,0,0.05)',
		md: '0 4px 6px rgba(0,0,0,0.1)',
		lg: '0 10px 15px rgba(0,0,0,0.15)',
	},

	motion: {
		duration: {
			fast: 100,
			normal: 250,
			slow: 450,
		},
		easing: {
			standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
		},
	},
}

export type Tokens = typeof tokens
export default tokens

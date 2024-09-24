/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-dark-grayish-cyan': "var(--Dark-grayish-cyan)",
	      'custom-desaturated-dark-cyan': "var(--Desaturated-dark-cyan)",
	      'custom-very-dark-grayish-cyan': "var(--Very-dark-grayish-cyan)",
	      'custom-light-grayish-cyan-background': "var(--Light-grayish-cyan-background)",
	      'custom-light-grayish-cyan-filter-tablets': "var(--Light-grayish-cyan-filter-tablets)",
      }
    }
  },
  plugins: []
}

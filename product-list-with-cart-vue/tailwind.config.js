/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "custom-Red": "var(--Red)",
	      "custom-Green": "var(--Green)",
	      "custom-Rose-50": "var(--Rose-50)",
	      "custom-Rose-100": "var(--Rose-100)",
	      "custom-Rose-300": "var(--Rose-300)",
	      "custom-Rose-400": "var(--Rose-400)",
	      "custom-Rose-500": "var(--Rose-500)",
	      "custom-Rose-900": "var(--Rose-900)",
      }
    }
  },
  plugins: []
}

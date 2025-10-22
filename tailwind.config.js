/** @type {import('tailwindcss').Config} */
const accentColors = ['sky', 'red', 'green', 'purple', 'yellow', 'indigo', 'blue', 'cyan', 'pink', 'orange', 'emerald', 'teal'];
const accentGroup = accentColors.join('|');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: new RegExp(`^(from|to|via)-(${accentGroup})-(200|300|400|500|600|700)$`),
    },
    {
      pattern: new RegExp(`^(bg|text|border|shadow)-(${accentGroup})-(100|200|300|400|500|600|700)(\/(10|20|25|30))?$`),
      variants: ['hover', 'group-hover'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


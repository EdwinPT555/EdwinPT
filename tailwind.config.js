/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',               // Ensure index.html is included
    './src/**/*.{js,ts,jsx,tsx}',  // Include all relevant file extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

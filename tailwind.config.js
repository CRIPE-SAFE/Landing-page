/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "lightRed":"#fe6471",
        "darkerRed":"#ff8b5d",
        // "bglightRed":"#FE6376",
        // "bgdarkRed":"#FF8B5B"
      }
    },
  },
  plugins: [],
}


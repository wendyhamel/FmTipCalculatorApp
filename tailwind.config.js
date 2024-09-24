/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/calculate.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space\\ Mono', 'sans-serif']
      },
      colors: {
        'cyan-dark': 'hsl(183, 100%, 15%)',
        'cyan': 'hsl(172, 67%, 45%)',
        'cyan-gray': 'hsl(184, 14%, 56%)',
        'cyan-light': 'hsl(185, 41%, 84%)',
        'cyan-bleak': 'hsl(189, 41%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
        'red': 'hsl(16,53%,61%)',
      },
    },
  },
  plugins: [],
}


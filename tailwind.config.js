module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'league': ['League Spartan', 'sans-serif'],
      'fira': ['Fira Code', 'monospace'], // Ensure fonts with spaces have " " surrounding it.
      'inter': ['Inter', 'sans-serif'],
      'poppin': ['Poppins', 'sans-serif'],
      'mono':['Jetbrains Mono','monospace'],
      'pacifico':['Pacifico', 'cursive'],
      'kaushan':['Kaushan Script', 'cursive']
    },
    colors: {
      'green' : '#65FFBE',
      'dark' : '#1d1d1d',
      'white' : '#fff',
      'orange' : "#ffdc00",
      'subtext' : "#fdfdfd",
      'light': "#BDE6F1"
    }
  },
  plugins: [],
}
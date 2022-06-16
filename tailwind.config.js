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
      'dark' : '#16161a',
      'lightDark':"#242629",
      'purple':'#7f5af0',
      'paragraph':"#94a1b2",
      'black':"#000",
      'white' : '#fffffe',
      'orange' : "#ff8906",
      'subtext' : "#fdfdfd",
      'subheadline':"#2e2f3e",
      'light': "#BDE6F1",
      'linkdin': "#00a0dc",
      'instagram': "#e1306c"
    }
  },
  plugins: [],
}
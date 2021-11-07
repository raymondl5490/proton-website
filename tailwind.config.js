module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('/home/mountains.png')",
        'mountains-2': "url('/home/mountains-2.jpg')",
        'person-whiteboard': "url('/home/person-in-front-of-whiteboard.jpg')",
        'map': "url('/home/map.webp')",
        'map-dots': "url('/home/map-dots.jpg')",
      },
      colors: {
        'pm-1': '#505061',
        'pm-2': '#9497ce',
        'pm-3': '#505061',
        'pm-4': '#9199cb',
        'pm-5': '#474f8f',
      }
    },
  },
  variants: {
    extend: {},
  },
};

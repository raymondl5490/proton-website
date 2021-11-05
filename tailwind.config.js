module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('/home/mountains.png')",
        'mountains-2': "url('/home/mountains-2.jpg')",
      },
      colors: {
        'pm-1': '#505061',
        'pm-2': '#9497ce',
        'pm-3': '#505061',
      }
    },
  },
  variants: {
    extend: {},
  },
};

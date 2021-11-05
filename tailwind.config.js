module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('/home/mountains.png')",
      },
      colors: {
        'pm-1': '#505061',
        'pm-2': '#9497ce',
      }
    },
  },
  variants: {
    extend: {},
  },
};

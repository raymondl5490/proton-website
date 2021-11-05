module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('/home/mountains.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
};

export const config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: "scoped",
            },
          },
        ],
      },
    ],
  },
};
export default config;

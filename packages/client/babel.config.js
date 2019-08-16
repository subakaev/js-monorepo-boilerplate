module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        useBuiltIns: "usage",
        corejs: 3,
      }
    ],
    "@babel/react",
  ],

  plugins: ["@babel/plugin-proposal-class-properties"],

  retainLines: true,
};

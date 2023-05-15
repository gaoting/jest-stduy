module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins:["@babel/plugin-transform-runtime"],
  // transform: {
  //   "\\.js$": "babel-jest",
  // },
};

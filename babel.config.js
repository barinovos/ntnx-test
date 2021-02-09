module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "@nutanix-ui/babel-plugin-prism-import",
      {
        libraryName: "prism-reactjs",
        style: "less",
      },
    ],
  ],
}

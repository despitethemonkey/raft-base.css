module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-variables-prefixer")({ prefix: "raft-" }),
  ],
};

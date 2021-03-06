const path = require("path");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const buble = require("rollup-plugin-buble");
const json = require("rollup-plugin-json");
const alias = require("rollup-plugin-alias");
const { terser } = require("rollup-plugin-terser");
const image = require("@rollup/plugin-image");
const { isProduction } = require("./utlils");
const projectRootDir = path.resolve(__dirname);

const inputOptions = {
  input: "src/main.js",
  plugins: [
    alias({
      "@": [
        {
          find: "src",
          replacement: path.resolve(projectRootDir, "src"),
        },
      ],
    }),
    json({
      compact: true,
    }),
    resolve(),
    buble({
      exclude: ["node_modules/**"],
    }),
    commonjs(),
    isProduction() && terser(),
  ],
  external: ["less","uri-js"]
};

const output = {
  name: "compile-less-loader",
  file: "dist/compile-less-loader.cjs.js",
  format: "cjs"
};
const exportModule = {
  ...inputOptions,
  output,
};
isProduction() &&
  (exportModule["watch"] = {
    include: "src/**",
  });
  
module.exports = exportModule;

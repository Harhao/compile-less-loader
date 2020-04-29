# compile-less-loader

> A webpack loader that compile less to css stylesheet

## Usage

### install the webpack loader by npm script

```bash
$ npm install compile-less-loader -D
```
import the compile-less-loader on webpack config file

```js
moudle.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "compile-less-loader"]
            }
        ]
    },
});
```
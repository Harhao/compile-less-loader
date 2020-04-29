const less = require("less");
const { schema } = require("./config/options");
const validateOptions = require("schema-utils");
const { getOptions } = require("loader-utils");
module.exports = function(source) {
  const options = getOptions(this);
  validateOptions(schema, options, {
    name: "compile-less-loader",
    baseDataPath: "options",
  });
  const callback = this.async();
  less.render(source, options, function(error, output) {
    if (error) {
      console.error(error);
      return;
    }
    const result = output.css;
    callback(null, result);
  });
};

const less = require("less");
const validateOptions = require("schema-utils");
const { getOptions } = require("loader-utils");
module.exports = function(source) {
  const callback = this.async();
  const options = getOptions();
  const result = less.render(source, options).then((output) => {
    return output.css;
  });
  callback(null, result.toString(), sourceMap);
};

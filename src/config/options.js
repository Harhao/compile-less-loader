const schema = {
  "type": "object",
  "properties": {
    "dumpLineNumbers": {
      "description": "Whether output file information and line numbers in compiled CSS code.",
      "type": "string"
    },
    "compress": {
      "description": "If compress is true, compress using less built-in compression.",
      "type": "boolean"
    },
    "silent": {
      "description": "If silent is true, stops any warnings from being shown..",
      "type": "boolean"
    },
    "globalVars": {
      "description": "Defines a variable that can be referenced by the file.",
      "type": "object"
    },
    "sourceMap": {
      "description": "Defines a variable that can be referenced by the file.",
      "type": "object"
    }
  },
  "additionalProperties": false
}

exports.schema = schema
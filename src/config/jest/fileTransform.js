"use strict";

const path = require("path");
const camelcase = require("camelcase");

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    return `module.exports = ${assetFilename};`;
  },
};
#!/usr/bin/env node

// Disables code splitting into chunks
// See https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838

const rewire = require("rewire")
const webpack = require("webpack")
const defaults = rewire("react-scripts/scripts/build.js")
let config = defaults.__get__("config")

config.plugins.push(
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 2,
  })
)

config.optimization.runtimeChunk = false

'use strict';
var webpack = require('webpack');
var  path = require('path');
module.exports ={
    context: path.resolve(__dirname, ''),
        entry: "./entry.js",
    output: {
    path: path.resolve(__dirname, 'app'),
        filename: "main.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.css$/, loaders: ["style", "css"] },
        ]
    },
    watch:true

}
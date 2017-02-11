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

            {
                test: /\.(scss|sass)$/i,
                loader: "style!css!sass"
            },
            {
                test: /\.(less)$/i,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file?name=images/[name].[ext]"
            },
            {
                test: /\.(mp4|ogg)$/i,
                loader: "file?name=videos/[name].[ext]"
            },
            {
                test: /\.(mp3)$/i,
                loader: "file?name=audio/[name].[ext]"
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: "file?name=fonts/[name].[ext]"
            },

            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    watch:true

}
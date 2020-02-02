//adding webpack - Clean plugins //
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
//isntalling plugins - html webpack //
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    //adding a new mode //
    mode: 'production',
    // add new entry here //
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        //adding rules for Babel-Loader //
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    // TODO: Add the plugin for index.html
    plugins: [
        new HtmlWebPackPlugin ( {
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin ( {
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
};

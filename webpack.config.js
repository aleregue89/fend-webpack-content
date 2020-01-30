const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    }
};

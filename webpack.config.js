const webpack = require('webpack');
const path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
const BUILD_DIR = path.resolve(__dirname, 'public');
//Thư mục chứa dự án - các component React
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    mode: 'development',
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
module.exports = config;

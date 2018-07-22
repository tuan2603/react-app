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
    resolve: {
        extensions: ['.js', '.jsx']
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
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            }
        ]
    }
};
module.exports = config;

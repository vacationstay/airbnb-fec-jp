const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/client',
    entry: './index.js',
    module: {
        rules: [{
            test: [/\.jsx$/],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        }]
        },
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
    }
};
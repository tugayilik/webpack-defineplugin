const path = require('path');
const webpack = require('webpack');
const settings = require('./generated.json');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname),
    },
    plugins: [
        new webpack.DefinePlugin({
            SETTINGS: JSON.stringify(settings),
        }),
    ],
    mode: 'production',
};

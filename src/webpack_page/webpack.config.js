const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './entry.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [new HTMLWebpackPlugin()],
    mode: 'production',
}
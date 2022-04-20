const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     //{ from: 'src/img', to: 'dist/img' },
        // ]),
    ],
});
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './jsx/main.jsx',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            }
        ],
    },
};
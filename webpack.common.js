const webpack = require('webpack');
const path = require('path');
const json5 = require('json5');
//獨立css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 清空dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        app: './src/jsx/main.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'//這邊以上是新增
        }),
        new HtmlWebpackPlugin({
              template: './src/index.html' ,
              minify: {
                  collapseWhitespace: false,// 不壓縮html
                  removeComments: false, // 不移除註釋
              },
          })
    ],
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            // 'img': path.resolve(__dirname, 'src/img'),
            // 'components': path.resolve(__dirname, 'src/components'),
            // 'page': path.resolve(__dirname, 'src/page'),
            // 'fonts': path.resolve(__dirname, 'src/fonts'),
            // 'data': path.resolve(__dirname, 'src/data'),
        }
    },

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                ],
                generator: {
                    filename: 'css/[name][ext][query]'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext][query]'
                }

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },


            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    }
};
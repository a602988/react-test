const webpack = require('webpack');
const path = require('path');
const json5 = require('json5');
//獨立css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 產出 html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlconfig =require("./html-conf");
const htmlarr=[];
for(let i in htmlconfig) {
    htmlarr.push(new HtmlWebpackPlugin(htmlconfig[i]));
}
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        app: './src/app.js',
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
        new CopyWebpackPlugin({
            patterns: [{
                from: "src/img",
                to: "img"
            }]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:3].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'//這邊以上是新增
        }),
        ...htmlarr,
    ],
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'page': path.resolve(__dirname, 'src/page'),
            'fonts': path.resolve(__dirname, 'src/fonts'),
            'data': path.resolve(__dirname, 'src/data'),
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
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: false,
                    sources: false,
                },
            },
            {
                //解析pug原始碼與圖片
                test: /\.(pug)$/,
                use: [
                    {   //編譯html內的檔案，例如圖片
                        loader: 'html-loader',
                        options: {
                            // 不壓縮 HTML
                            minimize: false,
                            sources: false,
                        }
                    },
                    {   //編譯pug檔案
                        loader: 'pug-html-loader',
                        options: {
                            // 美化 HTML 的編排 (不壓縮HTML的一種)
                            pretty: false,
                            minimize: false,
                            sources: false,
                        }
                    }
                ],

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
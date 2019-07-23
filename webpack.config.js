const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Terser = require('terser');

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    devtool: false,
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: `${__dirname}/build`,
        filename: `bundle.js`
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './imgs/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['src/styles']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!libs/*.*']
        }),
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './libs/*',
                transform: content => {
                    return process.env.NODE_ENV === 'production'
                        ? Terser.minify(content.toString()).code
                        : content;
                }
            }
        ])
    ]
};

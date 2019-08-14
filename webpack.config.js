const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Terser = require('terser');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

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
                include: [/src/, /libs/],
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.(jpg|png|svg|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/[name].[ext]'
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
            cleanAfterEveryBuildPatterns: ['!libs/*.*', '!images/**/*.*']
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
        ]),
        new CopyWebpackPlugin([
            { from: './libs/*', copyUnmodified: true },
            {
                from: './images',
                to: 'images',
                context: 'src'
            }
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new ImageminWebpWebpackPlugin()
    ]
};

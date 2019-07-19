const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
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
                    presets: ['react']
                }
            },
            {
                test: /\.(jpg|png|svg|webp)$/,
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new CopyWebpackPlugin([{ from: './libs/*' }])
    ]
};

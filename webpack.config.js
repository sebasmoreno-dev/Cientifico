const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main .js'
    },
    resolve: {
        extensions: ['.js'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: 'true',
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        /* new CopyWebpackPlugin({
            patterns:[{
                from: './src/styles/styles.css',
                to: ''
            }],
        }), */
        new CopyWebpackPlugin({
            patterns:[{
                from: './src/images',
                to: './src/images/'
            }]
        })
    ]
}
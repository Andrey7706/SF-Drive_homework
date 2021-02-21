const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetwebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetwebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config; 
}

const plugins = [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, './src/about.html'),
        filename: 'about.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, './src/faq.html'),
        filename: 'faq.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            {from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')},
            {from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img')},
            {from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts')}
        ]
    }),
    new MiniCssExtractPlugin({
        filename: filename('css')
    }),
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './js/index.js',
        collapsible: './js/collapsible.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        hot: isDev
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: isDev,
                      reloadAll: true
                    },
                  }, 
                  'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: isDev,
                      reloadAll: true
                    },
                  }, 
                  'css-loader',
                  'less-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, 'dist'),
                            esModule: false
                        },
                    },
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ],
            },
        ]
    }
}
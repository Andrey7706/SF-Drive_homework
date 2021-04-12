const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetwebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development';

const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (extra) => {
    const loaders = [
        'style-loader',
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: path.resolve(__dirname, 'dist/css'),
                esModule: false
            },
        },
        {
            loader: 'css-loader',
            options: {
                url: false
            }
        }
    ]
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}

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

const plugins = () => {
    const base = [
        // new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist')},
                {from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img')},
                {from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts')}
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style/style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
  
    if (isProd) {
      base.push(new BundleAnalyzerPlugin())
    }
  
    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        hot: isDev,
        port: 8080
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
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
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                        ]
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                        ]
                    }
                }
            },
        ]
    }
}
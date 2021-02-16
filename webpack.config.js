const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/script.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'style-loader',
                    miniCss.loader,
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'img' }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
        ]
    },
    plugins: [
        new miniCss ({
            filename: 'style.css',
        }),
    ]
};
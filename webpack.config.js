const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    resolve: {
        alias: {
            fs: 'pdfkit/js/virtual-fs.js'
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {enforce: 'post', test: /fontkit[/\\]index.js$/, loader: "transform-loader?brfs"},
            {enforce: 'post', test: /unicode-properties[/\\]index.js$/, loader: "transform-loader?brfs"},
            {enforce: 'post', test: /linebreak[/\\]src[/\\]linebreaker.js/, loader: "transform-loader?brfs"},
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /src[/\\]assets/,
                loader: 'arraybuffer-loader',
                exclude: /\.css$/
            },
            {
                test: /\.afm$/,
                loader: 'raw-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                exclude: /src[/\\]index\.js$/ // not working
            })
        ]
    },

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};

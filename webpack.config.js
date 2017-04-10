var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //页面入口文件配置
    entry: {
        main: './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //插件项
    plugins: [
        new CopyWebpackPlugin([{
            from: __dirname + '/src/assets',
            to: __dirname + '/dist',
            ignore: '.gitignore'
        }]),
        new ExtractTextPlugin("/css/[name].css"),
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: __dirname + '/src/app/index.html',
            inject: 'body',
            favicon: __dirname + '/src/assets/favicon.ico',
            minify: false,
            hash: false,
            cache: false,
            showErrors: false,
            xhtml: false
        })
    ]
};
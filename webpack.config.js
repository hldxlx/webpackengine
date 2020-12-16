//配置文件
const path = require('path')
const Webpack  = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        'app': './app.js',
        'page': './page.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: 'dist/',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,// exclude表示该文件不匹配，因为node_modules是我们下载的依赖包，不需要用babel来处理。
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env",{
                                "targets": {
                                    "browsers": ['>1%', 'last 2 version']
                                }
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use:  ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: false
        }),
        new UglifyJsPlugin(),
        new Webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html')
        })
    ]
}
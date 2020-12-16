//配置文件
const path = require('path')
const Webpack  = require('webpack')

module.exports = {
    entry: {
        'app': './app.js',
        'page': './page.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            chunks: ['app', 'page']

        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            minChunks: Infinity
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        })
    ],
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
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}
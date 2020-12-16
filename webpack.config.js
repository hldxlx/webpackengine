//配置文件
const path = require('path')

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}
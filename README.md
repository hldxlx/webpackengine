## https://www.jianshu.com/p/51c6f4b81ad3
## 新建A.js B.js app.js webpack.config.js   建app.css 在app.js引入 
    npm i style-loader --save-dev
    npm i css-loader --save-dev
    折行webpack命令
    
    2使用babel打包es6语法 
   
    app.js写上一些es6语法 建立.babelrc文件 
    npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env --save-dev
    npm i babel-polyfill -save
    npm install @babel/plugin-transform-runtime --save-dev
    
    3提取公共代码
    npm install webpack@3.10.0 -D
    npm i jquery -s
    
    !第三方依赖 单独打包失败？？
    在webpack4中，CommonsChunkPlugin已经不支持了，替代它的是一个叫SplitChunksPlugin的插件，惊不惊喜，意不意外
    
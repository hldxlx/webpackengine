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
    
    ! 第三方依赖 单独打包失败？？
    在webpack4中，CommonsChunkPlugin已经不支持了，替代它的是一个叫SplitChunksPlugin的插件
    
    ! 用CommonsChunkPlugin在plugin抽离公共代码后,index.html在浏览器打开，会Uncaught ReferenceError: webpackJsonp is not defined
    用https://www.cnblogs.com/hcxy/p/7999360.html暂时解决不了
    
    4 处理less
    npm i less-loader --save-dev
    建立base.less 并在app.js中引入，折行webpack,运行index.html
    
    cnpm install extract-text-webpack-plugin --save-dev 使得js文件和css文件单独分开的
    打包多一个app.min.css   
    
    
    5 tree shaking 去除用不到的方法，变量
    cnpm install uglifyjs-webpack-plugin --save-dev 后，在webpack.config.js加 new UglifyJsPlugin(),折行webpack,
    报 Cannot read property 'compilation' of undefined
    package.json里面降低uglifyjs-webpack-plugin的版本，再install再webpack，无报错
    
    
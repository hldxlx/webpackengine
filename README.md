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
    
    6 文件处理
    cnpm install file-loader --save-dev 报错‘ Path must be a string. Received undefined’
    解决方法： pageage.json里面降低file-loader的版本
    
    打包成功，但是页面上依然没有图片，我们可以打开开发工具看一下，这张图片的地址，发现图片的地址不对，应该是从dist下面取，所以我们在output中加一个publicPath
     output: {
            filename: '[name].bundle.js',
            publicPath: 'dist/',
            path: path.join(__dirname, 'dist')
        },
    cnpm install url-loader --save-dev    
    
    ! 装img-loader压缩时有问题 暂没解决
    
    
    7 html in webpack
    cnpm install html-loader --save-dev
    ! 再在webpack.config.js里配rules
     再打包后有问题
     
     08 webpack dev server
      Failed at the my-webpacktwo@1.0.0 dev script
     解决方法
     https://www.jianshu.com/p/ba7cbf6e57f0
     webpack 3.x 要使用 webpack-dev-server 2.x
     webpack 4.x 要使用 webpack-dev-server 3.x
     
     ! hot  new Webpack.HotModuleReplacementPlugin() 热更新没用 ？？      
                 
    
         
    
    
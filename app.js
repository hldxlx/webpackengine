// //app.js 入口文件
// import css from './app.css'
// import test from './B'
// import "babel-polyfill"
// let a =  require('./A')
//
//
// a()
// console.log('1+2=', test(1,2))
//
// console.log('this is app')
//
//
// function test2() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             let str = 'this is promise'
//             resolve(str)
//         }, 1000)
//     })
// }
//
// async function dolist() {
//     let str = await test2()
//     console.log(str)
//     console.log('this is async')
// }
//
// dolist()

//app.js  03(提取公共代码)
// import './childA'
// import './childB'
// import $ from 'jquery'

//app.js 04 css处理
// import './src/commom/base.css'
// import './src/commom/base.less'
// export default 'app'


// 05tree shaking  去除用不到的方法，变量
import { methosA }  from './src/methods/A'
import { chunk } from 'lodash-es'


console.log(chunk([1,2,3,4,5,6,7],2))
if(false) {
    console.log('this is need delete code')
}
console.log(methosA())
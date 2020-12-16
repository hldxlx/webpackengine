//app.js 入口文件
import css from './app.css'
import test from './B'
import "babel-polyfill"
let a =  require('./A')


a()
console.log('1+2=', test(1,2))

console.log('this is app')


function test2() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            let str = 'this is promise'
            resolve(str)
        }, 1000)
    })
}

async function dolist() {
    let str = await test2()
    console.log(str)
    console.log('this is async')
}

dolist()

//app.js  03(提取公共代码)
import './childA'
import './childB'
import $ from 'jquery'
export default 'app'
/**
 * Created by nocoolyoyo on 2018/10/18.
 */
import { Client, langAdapt, isMobile, isOSAndroid, lineCase } from '../src/index'

Client.init('zh-CN')

const $div = document.createElement('div')
$div.style.backgroundColor = 'green'
$div.style.height = '55500px'
$div.style.width = '500px'

document.body.appendChild($div)
console.log($div.getBoundingClientRect())
// setInterval(() => {
//     console.log(isMobile())
// }, 500)
console.log(lineCase('ElDom'))

// const str = `{
//     "signature" = "dfreree...."; //也是base64
//     "purchase-info" = "ewoJIm9x....."; //也是base64，这个里面存放详细时间，流水号等
//     "environment" = "Sandbox";
//     "pod" = "100";
//     "signing-status" = "0";
// }`
// console.log(str.match(/"purchase-info" = "(.*)";/))
//
// docu.addEventListener('scroll', () => {
//     console.log(1)
// })
// console.log(Client)
//
// console.log(langAdapt('zh-tw'))

// import { initClient, isStyleUnit, RegexMap,
// 	     scrollToXView, scrollToYView, scrollToX, scrollToY, scrollTo, getClient, copy2Board, appendUrlParams } from '../src/index'
// console.log(RegexMap)
// console.log(isStyleUnit('400px'))
//
//
//
//
// document.querySelector('.scroller').scrollTop = 9000
// document.querySelector('.scroller').scrollLeft = 9000
// let step = 1000
// setTimeout(()=> {
// 	// justify = justify ==='start' ? 'end' : 'start'
//
//
// 	scrollToY(document.querySelector('.scroller'), {
// 		target: 'end',
// 		justify: 0
// 	})
// 	scrollToX(document.querySelector('.scroller'), {
// 		target: 'end',
// 		justify: 0
// 	})
// 	// scrollToX(document.querySelector('.scroller'), {
// 	// 	target: 200,
// 	// 	position: 'top',
// 	// 	justify: 0
// 	// })
// 	// scrollToY(document.querySelector('.scroller'), {
// 	// 	target: 200,
// 	// 	position: 'top',
// 	// 	justify: 0
// 	// })
//
// }, 500)
//
// setInterval(()=>{
// 	initClient()
// },1000)
// console.log(getClient())
//
// console.log(appendUrlParams({
// 	haha: 1
// }))
//
// console.log(appendUrlParams({
// 	haha: 1,
// 	hehhe: 12213
// }, 'http://www.baidu.com?es=111'))
// document.querySelector('#clipboard').addEventListener('click', function () {
// 	copy2Board('哈哈哈哈哈哈哈')
// })
//
//
//



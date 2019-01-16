/**
 * Created by nocoolyoyo on 2018/10/18.
 */
import { initClient, isStyleUnit, RegexMap,
	     scrollToXView, scrollToYView, scrollToX, scrollToY, scrollTo, getClient, copy2Board, appendUrlParams } from '../src/index'
console.log(RegexMap)
console.log(isStyleUnit('400px'))




document.querySelector('.scroller').scrollTop = 9000
document.querySelector('.scroller').scrollLeft = 9000
let step = 1000
setTimeout(()=> {
	// justify = justify ==='start' ? 'end' : 'start'


	scrollToY(document.querySelector('.scroller'), {
		target: 'end',
		justify: 0
	})
	scrollToX(document.querySelector('.scroller'), {
		target: 'end',
		justify: 0
	})
	// scrollToX(document.querySelector('.scroller'), {
	// 	target: 200,
	// 	position: 'top',
	// 	justify: 0
	// })
	// scrollToY(document.querySelector('.scroller'), {
	// 	target: 200,
	// 	position: 'top',
	// 	justify: 0
	// })

}, 500)

setInterval(()=>{
	initClient()
},1000)
console.log(getClient())

console.log(appendUrlParams({
	haha: 1
}))

console.log(appendUrlParams({
	haha: 1,
	hehhe: 12213
}, 'http://www.baidu.com?es=111'))
document.querySelector('#clipboard').addEventListener('click', function () {
	copy2Board('哈哈哈哈哈哈哈')
})






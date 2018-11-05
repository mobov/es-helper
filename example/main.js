/**
 * Created by nocoolyoyo on 2018/10/18.
 */
import { initClient, isStyleUnit, RegexMap,
	     scrollToXView, scrollToYView, scrollToX, scrollToY, scrollTo, getClient } from '../src/index'
console.log(RegexMap)
console.log(isStyleUnit('400px'))


initClient()

// document.querySelector('.scroller').scrollTop = 9000
// document.querySelector('.scroller').scrollLeft = 9000
let step = 1000
setTimeout(()=> {
	// justify = justify ==='start' ? 'end' : 'start'


	scrollToY(document.querySelector('.scroller'), {
		target: document.querySelector('.target'),
		justify: 0
	})
	scrollToX(document.querySelector('.scroller'), {
		target: document.querySelector('.target'),
		justify: 0
	})

}, 500)
console.log(getClient())




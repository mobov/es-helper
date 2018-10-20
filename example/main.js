/**
 * Created by nocoolyoyo on 2018/10/18.
 */
import { initClient,
	     scrollToXView, scrollToYView, scrollToX, scrollToY } from '../src/index'



initClient()
let justify = 'end'
setInterval(()=> {
	// justify = justify ==='start' ? 'end' : 'start'
	justify = -100
	scrollToY(document.querySelector('.scroller'), justify)
}, 1000)


/**
 * Created by nocoolyoyo on 2018/6/11.
 */
export { default as copy2Board } from './copy2Board'
export { initClient, getClient } from './device'
export { getStyle, strStyle } from './styleUtils'
export { getUrlParam, appendUrlParams } from './urlParams'
export { default as imageLoaded } from './imageLoaded'
export { default as RegexMap } from './regexMap'
export {
  isTrimEmpty, isEmail, isLowerCase, isUpperCase, isURL,
  isEmptyObject, isHexColor, isStyleUnit,
  isOSWindows, isOSIos, isOSAndroid, isMobile,
} from './validate'
export { scrollToY, scrollToX } from './easeScroll'
export { sineaseOut, easeIn, strongEaseOut, strongEaseIn, sineaseIn, linear } from './tween'
export { default as findNode } from './findNode'
export { default as deepCopy } from './deepCopy'
export { default as deepEqual } from './deepEqual'
export { arrayUnique, uniqueArrayByField } from './arrayUnique'

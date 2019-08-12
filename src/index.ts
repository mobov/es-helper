/**
 * Created by nocoolyoyo on 2018/6/11.
 */
export { arrayClear, arraySwap, arrayUnique, arrayUniqueByField, deepCopy, deepEqual, findNode, getAbsArray, getAbsObject } from './collectionUtils'

export { default as clip2Board } from './copy2Board'

export { default as Client } from './device'

export { scrollToX, scrollToY } from './easeScroll'

export { imageLoaded } from './image'

export { camelCase, lineCase } from './stringUtils'

export { haveDomRectIntersection } from './physX'

export { strStyle, getStyle } from './styleUtils'

export { easeIn, linear, sineaseIn, sineaseOut, strongEaseIn, strongEaseOut } from './tween'

export { getUrlParam, getUrlParams, appendUrlParams } from './urlParams'

export { langMap, langAdapt } from './langUtils'

export { REGEX_UA_OS_WINDOWS, REGEX_UA_OS_ANDROID, REGEX_UA_OS_IOS, REGEX_UA_CLIENT_MOBILE,
         REGEX_STYLE_UNIT, REGEX_LOWER_CASE, REGEX_BASE64, REGEX_EMAIL, REGEX_HEX_COLOR, REGEX_UPPER_CASE, REGEX_URL,
         isOSAndroid, isOSIos, isBase64, isEmail, isEmptyObject, isHexColor, isLowerCase, isMobile, isOSWindows,
         isStyleUnit, isTrimEmpty, isUpperCase, isURL } from './validate'

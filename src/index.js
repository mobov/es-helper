/**
 * Created by nocoolyoyo on 2018/6/11.
 */
// import debug from 'debug'
import copy2Board from './copy2Board'
import { initClient, getClient } from './device'
import { getStyle, strStyle } from './styleUtils'
import { getUrlParam as getParam, getUrlParam, appendUrlParam } from './urlParams'
import imageLoaded from './imageLoaded'
import RegexMap from './regexMap'
import {
  isTrimEmpty, isEmail, isLowerCase, isUpperCase, isURL, isEmptyObject, isHexColor, isStyleUnit,
} from './validate'


module.exports = {
  RegexMap,
  copy2Board,
  initClient,
  getClient,
  getParam, // 旧版本做兼容
  getUrlParam,
  appendUrlParam,
  getStyle,
  strStyle,
  imageLoaded,
  isEmail,
  isLowerCase,
  isUpperCase,
  isURL,
  isTrimEmpty,
  isEmptyObject,
  isHexColor,
  isStyleUnit,
}
module.exports.default = module.exports

/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import { isEmptyObject } from './validate'
import { isMobile, isOSAndroid, isOSIos, isOSWindows } from './validate'
const Client = { 
  get version () {
    if (/Android (\d+(\.\d+)+)/.test(navigator.userAgent)) {
      return navigator.userAgent.match(/Android (\d+(\.\d+)+)/)[1]
    } else if (/iPhone OS (\d+(_\d+)+)/.test(navigator.userAgent)) {
      return navigator.userAgent.match(/iPhone OS (\d+(_\d+)+)/)[1].replace(/_/g, '.')
    } else {
      return ''
    }
  }
}

/**
 * @function 初始化硬件信息
 * @param lang
 * @param isMount
 */
export function initClient(lang, isMount = true) {
  if (isMobile()) {
    Client.type = 'mobile'
  } else {
    Client.type = 'pc'
  }

  if (isOSIos()) {
    Client.OS = 'IOS'
  } else if (isOSAndroid()) {
    Client.OS = 'Android'
  } else if (isOSWindows()) {
    Client.OS = 'Windows'
  }

  if (!!lang) {
    lang = lang.split('-')
    if (lang.length > 1) {
      lang = `${lang[0]}-${lang[1].toUpperCase()}`
    } else {
      lang = lang[0]
    }
    Client.lang = lang
  } else {
    Client.lang = navigator.language
  }
  // 挂载硬件信息到节点属性
  if (isMount) {
    const $root = document.documentElement
    $root.setAttribute('data-client-os', Client.OS)
    $root.setAttribute('data-client-type', Client.type)
    $root.setAttribute('lang', Client.lang)

    if (Client.lang === 'ar') {
      $root.setAttribute('dir', 'rtl')
    } else if($root.hasAttribute('dir')) {
	    $root.removeAttribute('dir')
    }
  }
  return Client
}

/**
 * @function 获取硬件信息
 * @returns {object}
 */
export function getClient() {
  if (isEmptyObject(Client)) { initClient(null, false) }
  return Client
}

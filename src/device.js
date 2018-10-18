/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import { isEmptyObject } from './validate'

const Client = { }

/**
 * @function 初始化硬件信息
 * @param lang
 * @param isMount
 */
export function initClient(lang, isMount = true) {
  if (/mobile/gi.test(navigator.userAgent)) {
    Client.type = 'mobile'
  } else {
    Client.type = 'pc'
  }

  if (/ipad|iphone|mac/gi.test(navigator.userAgent)) {
    Client.OS = 'IOS'
  } else if (/android/gi.test(navigator.userAgent)) {
    Client.OS = 'Android'
  } else if (/window/gi.test(navigator.userAgent)) {
    Client.OS = 'Windows'
  }

  if (lang && lang !== '') {
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
  console.log(123123123223)
  // 挂载硬件信息到节点属性
  if (isMount) {
    const $root = document.documentElement
    $root.setAttribute('data-client-os', Client.OS)
    $root.setAttribute('data-client-type', Client.type)
    $root.setAttribute('lang', Client.lang)

    if (Client.lang === 'ar') {
      $root.setAttribute('dir', 'rtl')
    }
  }
}

/**
 * @function 获取硬件信息
 * @returns {object}
 */
export function getClient() {
  if (isEmptyObject(Client)) { initClient() }
  return Client
}

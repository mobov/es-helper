import ClipboardJS from 'clipboard';
/**
 * 封装clipboard的复制功能
 * @param text
 */
var clip2Board = function (text) {
    if (text === void 0) { text = ''; }
    var domId = "clipDom" + new Date().getTime();
    var $dom = document.createElement('button');
    var $container = document.body;
    $dom.style.display = 'hidden';
    $dom.style.position = 'fixed';
    $dom.setAttribute('id', domId);
    $dom.setAttribute('data-clipboard-text', text);
    $container.appendChild($dom);
    var Clipboard = new ClipboardJS("#" + domId);
    return new Promise(function (resolve, reject) {
        Clipboard.on('success', function (e) {
            e.clearSelection();
            $container.removeChild($dom);
            resolve(e.text);
        });
        Clipboard.on('error', function (e) {
            $container.removeChild($dom);
            reject(e.text);
        });
        $dom.click();
    });
};
export default clip2Board;

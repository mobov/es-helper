import ClipboardJS from 'clipboard';
/**
 * 封装clipboard的复制功能
 * @param text
 */
export default function clip2Board(text = '') {
    const domId = `clipDom${new Date().getTime()}`;
    const $dom = document.createElement('button');
    const $container = document.body;
    $dom.style.display = 'hidden';
    $dom.style.position = 'fixed';
    $dom.setAttribute('id', domId);
    $dom.setAttribute('data-clipboard-text', text);
    $container.appendChild($dom);
    const Clipboard = new ClipboardJS(`#${domId}`);
    return new Promise((resolve, reject) => {
        Clipboard.on('success', (e) => {
            e.clearSelection();
            $container.removeChild($dom);
            resolve(e.text);
        });
        Clipboard.on('error', (e) => {
            $container.removeChild($dom);
            reject(e.text);
        });
        $dom.click();
    });
}
//# sourceMappingURL=copy2Board.js.map
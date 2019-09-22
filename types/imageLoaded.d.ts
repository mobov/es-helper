/**
 * 图片预加载完返回图片的信息
 * @param url
 */
declare const imageLoaded: (url: string) => Promise<{
    width: number;
    height: number;
}>;
export default imageLoaded;

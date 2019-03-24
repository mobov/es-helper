/**
 * 图片预加载完返回图片的信息
 * @param url
 */
export declare function imageLoaded(url: string): Promise<{
    width: number;
    height: number;
}>;

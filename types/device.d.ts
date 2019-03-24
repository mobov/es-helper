declare class Client {
    lang: string;
    type: 'mobile' | 'pc';
    version: string;
    OS: 'IOS' | 'Android' | 'Windows';
    constructor();
    init(lang?: string, isMount?: boolean): void;
}
declare const _default: Client;
export default _default;

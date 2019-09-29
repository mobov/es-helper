declare class ClientConstructor {
    lang: string;
    type: 'mobile' | 'pc';
    version: string;
    OS: 'IOS' | 'Android' | 'Windows' | 'Linux' | 'Mac';
    constructor();
    init(lang?: string, isMount?: boolean): void;
}
declare const Client: ClientConstructor;
export default Client;

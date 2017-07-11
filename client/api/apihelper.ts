

const ACCEPT :string = 'Accept';
const ACCEPT_LANGUAGE: string = 'Accept-Language';
    
const DEFALUT_ACCEPT: string = 'application/json';
const DEFALUT_ACCEPT_LANGUAGE: string = 'ko_KR';

class ApiHelper{
    static createHeaders(options): any {
        const apiHeaders = new Headers();
        apiHeaders.append(ACCEPT, DEFALUT_ACCEPT || options.accept);
        apiHeaders.append(ACCEPT_LANGUAGE , DEFALUT_ACCEPT_LANGUAGE || options.acceptLanguage);
    }

    static 
}
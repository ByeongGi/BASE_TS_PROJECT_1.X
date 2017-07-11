
import { BASE_URL } from "./constants";

function api(){
    let url = `${BASE_URL}/postall`;
    let apiHeaders = new Headers();

    apiHeaders.append('Accept', 'application/json');
    apiHeaders.append('Accept-Language', 'ko_KR');

    let init: RequestInit = {
        method: 'GET',
        headers: apiHeaders,
        mode: 'no-cors',
        cache: 'default'
    };
    return fetch(url, init);
}


 
export default api;
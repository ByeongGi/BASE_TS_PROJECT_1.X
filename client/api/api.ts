

const baseUrl = "http://localhost:3000/"; 

// class ApiUtils {
//     static call(url:string): Promise<Response> {
//             let apiHeaders = new Headers();
//             apiHeaders.append('Accept', 'application/json');
//             apiHeaders.append('Accept-Language', 'ko_KR');
//             let init: RequestInit = {
//                 method: 'GET',
//                 headers: apiHeaders,
//                 mode: 'no-cors',
//                 cache: 'default'
//             };
//             return fetch(url, init);
//     }
// }


function api(){
    let url = 'http://localhost:3000/postall';
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
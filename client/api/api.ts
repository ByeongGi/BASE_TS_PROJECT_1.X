var url = 'http://localhost:3000/service';

var apiHeaders = new Headers();
apiHeaders.append('Accept','application/json');
apiHeaders.append('Accept-Language',' ko_KR');
var init = { method: 'GET',
               headers: apiHeaders,
               mode: 'no-cors',
               cache: 'default' };


export default fetch(url,init);
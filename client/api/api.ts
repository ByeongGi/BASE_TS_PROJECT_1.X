let url = 'http://localhost:3000/postall';

let apiHeaders = new Headers();
apiHeaders.append('Accept','application/json');
apiHeaders.append('Accept-Language','ko_KR');

let init :RequestInit= { method: 'GET',
               headers: apiHeaders,
               mode: 'no-cors',
               cache: 'default' };
               
  
export default fetch(url,init);
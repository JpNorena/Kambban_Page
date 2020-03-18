class ApiService{
     fetchGet = (url) => {
        fetch(url, {
            method: 'GET',
            headers: '',
            mode: 'cors',
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        })
    }


     fetchPostLogin = (url, data) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLhttpRequest'
            },
            mode: 'cors'
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
     }
     

     fetchPost = (url, data) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLhttpRequest'
            },
            mode: 'cors'
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
     }
}

export default ApiService
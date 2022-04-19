import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export async function register (username, password) {    

    let res = await instance.post('/register', {
        name: username,
        password
    })

    console.log(res.data == "Ok")

    return res.data == "Ok"        
}

export async function login (username, password) {
    instance.post('/login', {
        name: username,
        password
    })
    .then(x => {
        console.log(x)
    })
}

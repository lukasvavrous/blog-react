import axios from 'axios'

const instance = axios.create({
    baseURL: false ? 'http://127.0.0.1:5000/' : 'https://blogos-backend.herokuapp.com/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
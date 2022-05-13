
import { login as _login } from "../features/loged/logedSlice"
import axios from 'axios'
import { store } from "../app/store";

var instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export async function register (username, password) {    
    let response = null;

    try{
        response = await instance.post('/register', { name: username, password })    


        if(response.data){

            console.log("Davam do dispatch", username, "token");        

            store.dispatch(_login({name: username, token: response.data.token}));
        }
        else {
            response = false;
        }
    }
    catch {
        response = false;
    }    
    
    return !!response;    
}

export async function login (username, password) {
    let response = null;

    try{
        response = await instance.post('/login', { name: username, password })    

        if(response.data){
            console.log("Davam do dispatch", username, "token");        

            store.dispatch(_login({name: username, token: response.data.token}));
        }
        else {
            response = false;
        }
    }
    catch {
        response = false;
    }    
    
    return response.data;    
}

export async function editPost(id, type, content){
    let res = await instance.post('/updatePost', { id, type, content })                    

    return res.data == "Ok"        
}

export async function sendPost(title, content){
    let author = store.getState().loged.user.name;

    let data = { title, content, author };

    console.log(data)

    let res = instance.put('/posts', data)

    return res;
}       
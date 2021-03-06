import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../services/UserService'
import { login as _login } from "../features/auth/authSlice"
import { toast } from 'react-toastify';


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()
    const navigate = useNavigate();    
    
    const LoginClick = async () =>{
        let sucess = await login(name, password)         
                
        if(!sucess){
            toast("Bad login", 'warning')

            return;
        }                                   

        navigate('/blog', {replace: false})
    }   

    return (
        <Form>
            <h2>Login</h2> 

            <InputContainer>
                <input type="text" value={name} onChange={ (e) => setName(e.target.value) } placeholder="Username" name="uname" required ></input>
                <br/>            
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" name="psw" required/>
            </InputContainer>
            <br/>

            <button onClick={LoginClick}>Login</button>
            
            <br/>
            <br/>

            <p>Doesn´t have an account? <Link to='/register'><b>Register</b></Link></p>
        </Form>
    )    
}


const Form = styled.div`    

    margin: 25px;

    button {   
        padding: 10px 50px;
        border-color: black;
        border-radius: 5px;

        border: 1px solid transparent;       
        cursor: pointer;         
        
        &:hover,
        &:focus {
            border: 1px solid rgba(0, 0, 0, 0.25);
        }           
    }

    b{
        cursor: pointer;
        color: black;        
    }
`

const InputContainer = styled.div`    
    display: inline-block;

    margin: 30px;
    
    input {       
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        border: 1px solid transparent;        

        transition: all .1s ease-in-out; 

        &:hover,
        &:focus {            
            border: 1px solid rgba(0, 0, 0, 0.25);
        }
    }
`

export default Login;
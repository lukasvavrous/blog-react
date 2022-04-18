import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Form>
            <h2>Login</h2> 

            <InputContainer>
                
                <input type="text" placeholder="Username" name="uname" required></input>
                <br/>            
                <input type="password" placeholder="Password" name="psw" required/>
            </InputContainer>
            <br/>

            <button>Login</button>
            
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => (
    <Form>
        <h2>Register</h2> 

        <InputContainer>
            
            <input type="text" placeholder="Username" name="uname" required></input>
            <br/>            
            <input type="password" placeholder="Password" name="psw" required/>
            <br/>            
            <input type="password" placeholder="Confirm Password" name="psw_conf" required/>
        </InputContainer>
        <br/>

        <button>Register</button>

        <br/>
        <br/>
        
        <p>Already have an account? <Link to='/Login'><b>Log in</b></Link></p>
    </Form>
)    


const Form = styled.div`    

    margin: 25px;

    button {   
        padding: 10px 50px;
        border-color: black;
        border-radius: 5px;

        border: 1px solid black;       
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

export default Register;
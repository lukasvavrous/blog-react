import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { register } from '../services/UserService'
import { toast } from 'react-toastify'

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');    

    const navigate = useNavigate();

    const registerClick = () =>{        

        if( name && password && password == confirmPassword ){            
            let isRegistered = register(name, password)
            
            if(isRegistered){
                toast.success("Registration was sucessfull")
                navigate('/blog', {replace: false})
            }
            else{                
                toast.warning("Name is already somebody using!")
            }
        }
        else{
            alert("You must set your credentials correctly !")
        }       
    }    

    return(
    <Form>
        <h2>Register</h2> 
        <InputContainer>                
            <input type="text" value={name} onChange={ (e) => setName(e.target.value) } placeholder="Username" name="uname" required ></input>
            <br/>            
            <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" name="psw" required/>
            <br/>            
            <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } placeholder="Confirm Password" name="psw_conf" required/>
        </InputContainer>
        <br/>
        <button onClick={registerClick}>Register</button>
        <br/>
        <br/>
        <p>Already have an account? <Link to='/Login'><b>Log in</b></Link></p>
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

export default Register;
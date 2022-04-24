import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { toast } from 'react-toastify';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');    

    const addPost = () =>{
        if( title && content){
            let isRegistered = true;//register(name, password)
            
            if(isRegistered){
                toast.success("Registration was sucessfull")
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
        <h2>Add post</h2> 
        <InputContainer>                
            <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } placeholder="Title" name="utitle" required ></input>
            <br/>            
            <input className="txtContent" type="text" value={content} onChange={ (e) => setContent(e.target.value) } placeholder="Content" name="content" required/>                        
        </InputContainer>
        <br/>

        <button onClick={addPost}>Add post</button>
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

    .txtContent{
        min-height: 20vh;
        min-width: 30vw;
    }
`
export default AddPost
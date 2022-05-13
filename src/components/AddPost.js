import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


import { toast } from 'react-toastify';
import { sendPost } from "../services/UserService";


const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');          
       
    const navigate = useNavigate()
    
    const addPost = async () =>{
        if( title && content){
            let isSended = await sendPost(title, content)


            if(isSended)
                navigate('/blog', {replace: false})                
            else
                toast.warning("Somethink went wrong")
            
        }
        else{
            alert("You have to fill up the inputs !")
        }       
    }    

    const changedContent = (text) => {
        console.log(text)
    }

    return(
    <Form>
        <h2>Add post</h2> 
        <InputContainer>                
            <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } placeholder="Title" name="utitle" required ></input>
            <br/>            
            <textarea className="txtContent" type="text" value={content} onInput={ (e) => changedContent(e.target.value) } placeholder="Content" name="content" required></textarea>                      
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
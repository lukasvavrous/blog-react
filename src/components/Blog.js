import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";

import ContentEditable from 'react-contenteditable'
import { EditText, EditTextarea } from 'react-edit-text';
import { editPost } from "../services/UserService";
import { store } from "../app/store";

/*
const Editables = (props) => {    

    const handleChange = evt => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return <ContentEditable html={text.current} onBlur={handleBlur} onChange={handleChange} />
}
*/

const PostsContainer = styled.div`    
`

const StyledSection = styled.section`    
    & > a{
        color: rgb(0,200,0);
        font-size: 2rem;
        text-decoration: none;
    }
`

const StyledPostElement = styled.div`    
    display:flex;
    flex-direction:column;

    background: rgba(150, 150, 150, 0.3);
    
    border: 1px solid rgba(150, 150, 150, 1);;
    padding: 5px;
    margin: 10px;    
    min-height: 10vh;    

    a{
        align-self:flex-start;
        color: blue;
    }

    .editing{
        color: rgba(0, 0, 0, 0.5);
    }

`

const StyledButtonEdit = styled.button`
    align-self: flex-end;

    border: 1px solid black;
    background-color: rgba(255,255,255,0.4);
    padding: 5px;
    margin: 5px;

    .activeButton{
        background-color: red;
    }
`

const Posts = (props) => {

    const PostElement = (props) => {
        const [isEditable, setIsEditable] = useState(true)     
        const [isEdited, setIsEdited] = useState(false)     

        const [title, setTitle] = useState(props.data.title)     
        const [content, setContent] = useState(props.data.content)

        const makeEditable = () => {   

            setIsEditable(!isEditable)
            console.title("now: ",isEditable)
        }

        const changeHandler = (a) => {
            console.log("UPDATE" + a);
        }

        const onSaveHandler = async ({name, value}) =>{                        
            let success = await editPost(props.data._id, name, value);
            console.log(success, isEdited);
            setIsEdited(success);
        }
        
        return (
            <StyledPostElement style={isEditable ? {color: 'rgba(255,255,255,0.6)'} : {}}>                
                <StyledButtonEdit onClick={makeEditable} className={isEditable ? 'activeButton' : ''}>E</StyledButtonEdit>                
                <h2>{props.data.title}</h2>                
                <p contentEditable={isEditable}>{props.data.content}</p>
                <Link to={`/users/${props.data._id}`}>{props.data.author}</Link>
            </StyledPostElement>
        )
    }    
    
    return (
        <PostsContainer>
            {props.data && props.data.map(x => <PostElement key={x._id} data={x}></PostElement>)}
        </PostsContainer>
    )
}


const getPosts = () => {
    return axios.get('http://127.0.0.1:5000/posts')
}

const Blog = () => {
    useEffect(() => {
        const unSubscribe = store.subscribe(() => {            
            
            const storeState = store.getState();
    
            const _user = storeState.loged.user;

            console.log('',_user)
    
            let isLoged = !(_user && Object.keys(_user) == 0)
            
            setLoged(isLoged)                     
        })

        return () => {
            unSubscribe();
        }
    })

    const [loged, setLoged] = useState(false);

    const {isLoading, data} = useQuery('posts', getPosts)             

    if(isLoading){
        return <LoadingPage/>
    }        

    return(    
        <StyledSection>                        
            <Posts data={data.data}/>            
        </StyledSection>        
    )
}

export default Blog;
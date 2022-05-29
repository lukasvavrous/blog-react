import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";

import { EditText, EditTextarea } from 'react-edit-text';
import { editPost } from "../services/UserService";
import { store } from "../app/store";

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

const StyledLink = styled(Link) `
    margin-top: auto !important;
`

const StyledEditTextarea = styled(EditTextarea) `
    height: auto !important;
`

const Posts = (props) => {
    console.log("Posts")
    const PostElement = (props) => {        
        const [canEdit, setCanEdit] = useState(props.data.author == undefined || props.data.author == store.getState().loged.user.name)
        const [isReaonly, setIsReaonly] = useState(true)     
        const [isEdited, setIsEdited] = useState(false)     

        const [title, setTitle] = useState(props.data.title)     
        const [content, setContent] = useState(props.data.content)        

        const makeEditable = () => {   
            setIsReaonly(!isReaonly)

            console.log("now: ",isReaonly)
        }

        const onSaveHandler = async ({name, value}) =>{                        
            let success = await editPost(props.data._id, name, value);
            console.log(success, isEdited);
            setIsEdited(success);
        }
        
        return (
            <StyledPostElement style={!isReaonly ? {color: 'rgba(10,10,255,0.6)'} : {}}>                
                { canEdit && <StyledButtonEdit onClick={makeEditable} className={!isReaonly ? 'activeButton' : ''}>E</StyledButtonEdit> }
                <EditText name="title" onChange={(x) => setTitle(x)} defaultValue={props.data.title} onSave={onSaveHandler} readonly={isReaonly}></EditText>                
                <StyledEditTextarea name="content" onChange={(x) => setContent(x)} defaultValue={props.data.content} onSave={onSaveHandler} readonly={isReaonly}></StyledEditTextarea>
                <StyledLink to={`/users/${props.data._id}`}>{props.data.author}</StyledLink>
            </StyledPostElement>
        )
    }    
    
    return (
        <PostsContainer>
            {props.data && props.data.map(x => <PostElement key={x._id} data={x}></PostElement>)}
        </PostsContainer>
    )
}

const getPosts = () => axios.get('http://127.0.0.1:5000/posts')

const Blog = () => {
    const [loged, setLoged] = useState(false);
    const {isLoading, data} = useQuery('posts', getPosts)             

    console.log("Blog")

    const isLoged = () => Object.keys(getUser());    

    console.log("tady je jedna fase")
    const getUser = () => store.getState().loged.user;        

    console.log("Only reading store value -> dont refresh")


    useEffect(() => {                
        const unSubscribe = store.subscribe(() => {        

            let is = isLoged();

            console.log("change", is)

            setLoged(is)                  
        })
        return () => unSubscribe();    
    }, [loged])

    if(isLoading){
        return <LoadingPage/>
    }        

    return(    
        <StyledSection>         
            {loged && <Link to='/addPost'></Link>}
            <Posts data={data.data}/>            
        </StyledSection>        
    )
}

export default Blog;
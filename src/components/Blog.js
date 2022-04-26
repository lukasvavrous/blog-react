import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon, regular, brands } from '@fortawesome/fontawesome-svg-core'

import ContentEditable from 'react-contenteditable'


const Editables = (props) => {
    const text = useRef(props.text);    

    const handleChange = evt => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return <ContentEditable html={text.current} onBlur={handleBlur} onChange={handleChange} />
}

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
        const [isEditable, setIsEditable] = useState(false)        

        const makeEditable = () => {        
            setIsEditable(!isEditable)
            console.log("now: ",isEditable)
        }
        
        return (
            <StyledPostElement style={isEditable ? {color: 'rgba(255,255,255,0.6)'} : {}}>                
                <StyledButtonEdit onClick={makeEditable} className={isEditable ? 'activeButton' : ''}>E</StyledButtonEdit>                
                <Editables>{props.data.title}</Editables>
                <h4 contentEditable={isEditable}>{props.data.title}</h4>
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
    const {isLoading, data} = useQuery('posts', getPosts)            

    if(isLoading){
        return <LoadingPage/>
    }    

    return(    
        <StyledSection>
            <Link to={'/addPost'}>+</Link>
            <Posts data={data.data}/>            
        </StyledSection>        
    )
}

export default Blog;
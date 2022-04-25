import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";


const PostsContainer = styled.div`    

`


const StyledPostElement = styled.div`    
    background: rgba(150, 150, 150, 0.3);
    
    border: 1px solid rgba(150, 150, 150, 1);;
    padding: 5px;
    margin: 10px;    
    height: 15vh;    
`


const Posts = (props) => {
    const PostElement = (props) => 
    (
        <StyledPostElement>
            {console.log(props)}
            <h4>{props.data.title}</h4>
            <p>{props.data.content}</p>
            <Link to={`/users/${props.data._id}`}>{props.data.author}</Link>
        </StyledPostElement>
    )
    
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
        <section>
            <Link to={'/addPost'}>Přidat příspěvek</Link>
            <Posts data={data.data}/>            
        </section>        
    )
}

export default Blog;
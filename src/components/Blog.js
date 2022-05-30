import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";
import { store } from "../app/store";
import Post from "../fragments/Post";

const StyledSection = styled.section`    
    & > a{
        color: rgb(0,200,0);
        font-size: 2rem;
        text-decoration: none;
    }
`

const getPosts = () => axios.get('http://127.0.0.1:5000/posts')

const Blog = () => {
    const [loged, setLoged] = useState(store.getState().loged.user);
    const {isLoading, data, refetch} = useQuery('posts', getPosts)             

    const isLoged = () => Object.keys(getUser()) != 0;    

    const getUser = () => store.getState().loged.user;        

    useEffect(() => {          
        setLoged(isLoged())        
        
        const unSubscribe = store.subscribe(() => {                                            
            setLoged(isLoged())                  
        })
        
        return () => unSubscribe();    
    }, [loged])

    if(isLoading){
        return <LoadingPage/>
    }        

    return(    
        <StyledSection>         
            <Link to='/addPost'>+</Link>            
            <div>
                {data.data && data.data.map(x => <Post key={x._id} data={x} refetch={refetch}></Post>)}
            </div>      
        </StyledSection>        
    )
}

export default Blog;
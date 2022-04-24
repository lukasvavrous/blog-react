import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPostElement = styled.div`    
    background: rgba(150, 150, 150, 0.3);
    
    border: 1px solid rgba(150, 150, 150, 1);;
    padding: 5px;
    margin: 10px;    
    height: 15vh;    
`

const getPosts = (posts) => {
    return [
        {
            "id": 0,
            "title": "Prvni nadpis",
            "content": "Obsah prvniho clanecku",
            "author": "Jaroušek Z Trocnova"
        },
        {
            "id": 1,
            "title": "druhy nadpis",
            "content": "Obsah prvniho clanecku",
            "author": "Jaroušek Z Trocnova"
        },              
        {
            "id": 2,
            "title": "Prvni nadpis",
            "content": "Obsah prvniho clanecku",
            "author": "Jaroušek Z Trocnova"
        },     
        {
            "id": 3,
            "title": "3 nadpis",
            "content": "Obsah prvniho clanecku",
            "author": "Jaroušek Z Trocnova"
        },     
        {
            "id": 4,
            "title": "4546153 nadpis",
            "content": "Obsah prvniho clanecku",
            "author": "Jaroušek Z Trocnova"
        }       
    ]
}

const PostElement = (props) => {
    return(
        <StyledPostElement>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <Link to={`/users/${props.id}`}>{props.author}</Link>
        </StyledPostElement>
    )
}

const Posts = (props) => 
(
    <div>
        {props.data && props.data.map(x => <PostElement key={x.id} id={x.id} title={x.title} content={x.content} author={x.author}></PostElement>)};
    </div>
)

const Blog = () => {
    const posts = getPosts();

    return(    
        <section>
            <Link to={'/addPost'}>Přidat příspěvek</Link>
            <Posts data={posts}/>            
        </section>        
    )
}

export default Blog;
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Post from "../fragments/Post";
import LoadingPage from "./LoadingPage";
import { store } from "../app/store";
import instance from "../services/AxiosConf";


const getPosts = (name) => instance.get(`/posts/${name}`)
    
const Posts = () => {    
    const isLoged = () => Object.keys(getUser()) != 0;    
    const getUser = () => store.getState().loged.user;        

    const { name } = useParams();

    const [loged, setLoged] = useState(store.getState().loged.user);
    const {isLoading, isFetching, data, refetch} = useQuery('posts', () => getPosts(name))             

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
        <>
            <h1>Příspěvky od {name}</h1>
            <div>
                {data && data.data && data.data.map(x => <Post key={x._id} data={x} refetch={refetch}></Post>)}
            </div>  
        </>         
    )
}

export default Posts;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "./LoadingPage";

import { useDispatch } from 'react-redux'
import userIcon from '../images/userIcon.png'
import { store } from "../app/store"
import { getUser, logout } from "../features/loged/logedSlice"

const UserPage = () => {

    useEffect(() => {
        setUser(store.getState().loged.user);

        const unSubscribe = store.subscribe(() => {          
            console.log("subscribe")
                          
            const _user = store.getState().loged.user;

            console.log("dispach", _user)

            setUser(_user);                
    
            if(!_user || Object.keys(_user) == 0) navigate("/login")                         

            console.log(_user);
        })
     
        return () => {
            unSubscribe();
        }
    })
    const [user, setUser] = useState(null);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    
    return (
        <>
            <h1>{JSON.stringify(user)}</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </>
    )
}

export default UserPage;

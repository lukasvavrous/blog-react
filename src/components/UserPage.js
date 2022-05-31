import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { store } from "../app/store"
import { logout } from "../features/auth/authSlice"

const UserPage = () => {

    useEffect(() => {        
        const unSubscribe = store.subscribe(() => {                                                
            const _user = store.getState().loged.user;        

            setUser(_user);                
    
            if(!_user || Object.keys(_user) == 0) navigate("/login")                                     
        })
     
        return () => {
            unSubscribe();
        }
    })

    const [user, setUser] = useState(store.getState().loged.user);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    
    return (
        <>
            <h1>Já jsem: {user?.name}</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </>
    )
}

export default UserPage;

import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { Link, NavLink } from "react-router-dom";
import Logo from '../images/blogosLogoCroped.png'
import userIcon from '../images/userIcon.png'
import { store } from "../app/store"
import { getUser } from "../features/auth/authSlice"

const Nav = () => {
 
    const isLoged = () => {
        let storeState = store.getState();
        let _user = storeState.loged.user;
        return !(_user && Object.keys(_user) == 0)
    }

    useEffect(() => {                        
        setLoged(isLoged());     

        const unSubscribe = store.subscribe(() => setLoged(isLoged()))

        return () => unSubscribe();
    })    

    const [loged, setLoged] = useState(false);

    return (
        <StyledNav>
            <Link to='/'>
                <img src={Logo} alt='Blogos logo'></img>        
            </Link>
            <ul>
                <NavLink to='/about' activeclassname='is-active'>
                    <li>About</li>
                </NavLink>
    
                <NavLink to='/blog' activeclassname='is-active'>
                    <li>Blog</li>
                </NavLink>
                
                { !loged &&
                    <NavLink to='/login' activeclassname='is-active'>
                        <li>Login</li>
                    </NavLink>
                }

                { loged &&
                    <NavLink to='/chat' activeclassname='is-active'>
                        <li>Chat</li>
                    </NavLink>
                }
    
                <NavLink to='/users' activeclassname='is-active'>
                    <li>Users</li>
                </NavLink>
                
                { loged && 
                    <NavLink to='/user' activeclassname='is-active'>
                        <img src={userIcon} alt="user icon"></img>
                    </NavLink> 
                }
            </ul>            
        </StyledNav>
    )
}
            
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background: rgba(90, 75, 110, 0.6);
    
    * {
        color: white;
        text-decoration:none ;
    }
    
    ul {
        width: 50vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        
        img{
            width: 50px;
            height: 50px;
        }
    }

    a {        
        padding: 10px;
        cursor: pointer;     
        
        font-size: large;
    }

    li{
        &:hover{
            color:rgba(90, 80, 75, 0.5);
        }
    }

    .active * {
        color:rgba(90, 80, 75, 1);
    }
`

export default Nav;
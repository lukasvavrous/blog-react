import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Logo from '../images/blogosLogoCroped.png'

const Nav = () => (
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
            
            <NavLink to='/login' activeclassname='is-active'>
                <li>Login</li>
            </NavLink>

            <NavLink to='/users' activeclassname='is-active'>
                <li>Users</li>
            </NavLink>
        </ul>            
    </StyledNav>
)

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
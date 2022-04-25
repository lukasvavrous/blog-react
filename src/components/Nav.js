import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../images/blogosLogoCroped.png'

const Nav = () => (
    <StyledNav>
        <Link to='/'>
            <img src={Logo} alt='Blogos logo'></img>        
        </Link>
        <ul>
            <Link to='/about'>
                <li>About</li>
            </Link>

            <Link to='/blog'>
                <li>Blog</li>
            </Link>
            
            <Link to='/login'>
                <li>Login</li>
            </Link>

            <Link to='/counter'>
                <li>Counter</li>
            </Link>

            <Link to='/users'>
                <li>Users</li>
            </Link>
        </ul>            
    </StyledNav>
)

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background: rgba(90, 80, 75, 0.5);
    
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

        &:hover{
         color: red;
        }
    }
`

export default Nav;
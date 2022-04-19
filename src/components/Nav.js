import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => (
    <StyledNav>
        <Link to='/'>
            <h3>Logo</h3>
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
        </ul>            
    </StyledNav>
)

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background: rgb(93, 79, 82);
    
    * {
        color: white;
        cursor: pointer;        
        text-decoration:none ;
    }
    
    ul {
        width: 50vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
`

export default Nav;
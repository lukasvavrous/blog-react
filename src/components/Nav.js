import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import Logo from '../images/blogosLogoCroped.png'
import userIcon from '../images/userIcon.png'
import { store } from "../app/store"
import {Container, Navbar,  Nav as _Nav} from "react-bootstrap"


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
        <Navbar style={NavbarStyle} expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt='Blogos logo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <_Nav className="me-auto">
              <_Nav.Link href="/about">O projektu</_Nav.Link>
              <_Nav.Link href="/blog">Blog</_Nav.Link>

              {!loged && 
              <_Nav.Link href='/login' > Log-In</_Nav.Link>
              }

                { loged &&
                    <_Nav.Link href='/chat' activeclassname='is-active'>
                        Chat
                    </_Nav.Link>
                }

              <_Nav.Link href='/users' > Uživatelé</_Nav.Link>


                { loged && 
                    <_Nav.Link href='/user' activeclassname='is-active'>
                        <img src={userIcon} style={{height: 30 + 'px'}} alt="user icon"></img>
                    </_Nav.Link> 
                }
              
            </_Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
        
const NavbarStyle = {    
    backgroundColor: 'rgba(90, 75, 110, 0.6)',

};
            
const StyledNavbar = styled.div`
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";


const StyledTable = styled.table`   
    align-self: center;

    background: rgba(150, 150, 150, 0.3);
    
    border: 1px solid rgba(150, 150, 150, 1);
    padding: 15px;
    margin: 0 auto;            
    
    thead {
        font-size: 2rem;
        font-style:oblique;
        margin: 10px;
    }

    td{
        font-style:normal;
        padding: 10px;
    }
`

const getUsers = () => {
    return axios.get('http://127.0.0.1:5000/users')
}

const Users = () => {
    const {isLoading, data} = useQuery('users', getUsers)
        
    let response = data;

    if(isLoading){
        return <h2>fwafawf...</h2>
    }
    
    const Header = () => {  
        let headers = Object.keys(response.data[0])

        return(
            <thead>
                <tr>
                    {headers && headers.map((x, i) => <th key={i}>{x}</th>)}
                </tr>
            </thead>
        ) 
    }

    const Content = () => {        
        const UserAttributes = () => {            
            
            let attributes = response.data.map(user => (
                <tr>
                    {Object.values(user).map((att, i) => (<td key={i}><div contenteditable="true">{att}</div></td>))}                            
                </tr>
            ))     

            return attributes;
        }
        
        return (
            <tbody>
                <UserAttributes/>
            </tbody>            
        )
    }    
    
    const Users = () => (
        <div>        
            <StyledTable>            
                <Header/>                        
                <Content/>
            </StyledTable>          
        </div>
    )        

    return <Users/>
}


export default Users
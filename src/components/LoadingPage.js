import React from 'react'

import styled from "styled-components";

const DivLoader = styled.div`
    margin: 0 auto;
    border: 16px solid #f3f3f3; 
    border-top: 16px solid rgba(100, 100, 100, 0.4);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;    

    margin-top: 15vh;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default () => <DivLoader/>    
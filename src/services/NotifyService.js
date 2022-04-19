import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SucessNotify = (text) => {
    
    console.log("sucess: " + text)
    toast(text, 'sucess')

    return (<ToastContainer />)
}

export const WarningNotify = (text) => {
    toast(text, 'warning')
}

export const ErrorNotify = (text) => {
    toast(text, 'error')
}
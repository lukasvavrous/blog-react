import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import Blog from './components/Blog'
import CounterPage from './components/CounterPage'

import Narrower from './containers/Narrower'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const App = () => (
    
    <Router>        
        <Nav/>
        <Narrower>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/about' element={ <About/> }></Route>
                <Route path='/login' element={ <Login/> }></Route>
                <Route path='/register' element={ <Register/> }></Route>
                <Route path='/counter' element={ <CounterPage/> }></Route>
                <Route path='/blog' element={ <Blog/> }></Route>
            </Routes>
        </Narrower>                
        <ToastContainer position="top-center"/>

    </Router>
)


export default App;

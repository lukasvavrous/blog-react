import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import CounterPage from './components/CounterPage'

import Narrower from './containers/Narrower'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'

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
            </Routes>
        </Narrower>                
    </Router>
)


export default App;

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
import Users from './components/Users'
import {QueryClient, QueryClientProvider} from 'react-query'
import AddPost from './components/AddPost'


import Loged from './features/loged/Loged'
import LoginPage from './components/Login'
import UserPage from './components/UserPage'

const queryClient= new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>

        <Router>        
            <Nav/>
            <Narrower>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                    <Route path='/about' element={ <About/> }></Route>
                    <Route path='/login' element={ <LoginPage/> }></Route>
                    <Route path='/register' element={ <Register/> }></Route>
                    <Route path='/loged' element={ <Loged/> }></Route>
                    <Route path='/counter' element={ <CounterPage/> }></Route>
                    <Route path='/blog' element={ <Blog/> }></Route>
                    <Route path='/user' element={ <UserPage/> }></Route>
                    <Route path='/users' element={ <Users/> }></Route>
                    <Route path='/addPost' element={ <AddPost/> }></Route>
                </Routes>
            </Narrower>                
            <ToastContainer position="top-center"/>

        </Router>
    </QueryClientProvider>
)


export default App;

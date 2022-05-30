import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Users from './components/Users'
import AddPost from './components/AddPost'
import LoginPage from './components/Login'
import UserPage from './components/UserPage'
import Posts from './components/Posts'
import Chat from './components/Chat'
import Register from './components/Register'
import Narrower from './containers/Narrower'
import Loged from './features/auth/Auth'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {QueryClient, QueryClientProvider} from 'react-query'

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
                    <Route path='/blog' element={ <Blog/> }></Route>
                    <Route path='/user' element={ <UserPage/> }></Route>
                    <Route path='/users' element={ <Users/> }></Route>
                    <Route path='/addPost' element={ <AddPost/> }></Route>
                    <Route path='/chat' element={ <Chat/> }></Route>
                    <Route path='/posts/:name' element={ <Posts/> }></Route>
                </Routes>
            </Narrower>                
            <ToastContainer position="top-center"/>
        </Router>
    </QueryClientProvider>
)

export default App;

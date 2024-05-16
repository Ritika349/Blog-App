import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects' 
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footerr from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <div className='min-h-screen'>
    <Header/>
    <Routes>

      
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Projects/>} path='/projects'/>
      <Route element={<SignIn/>} path='/signin'/>
      <Route element={<SignOut/>} path='/signout'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
    </Routes>
    </div>
    <Footerr/>
    </BrowserRouter>
     
  )
}

export default App

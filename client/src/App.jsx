import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products' 
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Products/>} path='/products'/>
      <Route element={<SignIn/>} path='/signin'/>
      <Route element={<SignOut/>} path='/signout'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

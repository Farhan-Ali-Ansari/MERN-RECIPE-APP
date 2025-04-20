import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import AddRecipe from './components/AddRecipe'
import Saved from './components/Saved'
import Home from "./components/Home"
import Profile from'./components/Profile'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/AddRecipe' element={<AddRecipe/>}/>
    
    
    </Routes>
    </Router>
    </>
  )
}

export default App
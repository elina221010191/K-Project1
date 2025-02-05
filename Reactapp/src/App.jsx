//import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Venders from './components/Venders'
import Contact from './components/Contact'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './components/HomePage'
import SinglePage from './components/SinglePage'



function App() {
  
   return(
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout/>}>
          <Route  path="/" index element={<Home/>} />
          <Route path='Shop' index element={<Shop/>}/>
          <Route path='Venders' index element={<Venders/>}/>
          <Route path='Blog' index element={<Blog/>}/>
          <Route path='Contact' index element={<Contact/>}/>
          <Route path='/view' element={<HomePage/>}/>
          <Route path="/SinglePage/:id" element={<SinglePage/>}/>
          </Route>
          </Routes> 
    </BrowserRouter>
   )
}
export default App

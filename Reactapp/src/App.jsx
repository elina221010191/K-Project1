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
//import ShopPage from './components/ShopPage'
import HomeProduct from './components/HomeProduct'
import Contact1 from './components/Contact1'
import DashboardLayout from './Dashboard/DashboardLayout'
import Dashboardview from './Dashboard/Dashboardview'
import Dash2_Layout from './Dash2/Dash2_Layout'
import Dash2_View from './Dash2/Dash2_View'
import Dash2_Navbar from './Dash2/Dash2_Navbar'
import Profile from './Dashboard/Profile'
import Utilities from './Dashboard/Utilities'
import { ThemeProvider } from './Dashboard/DarkMode'
import Dashboard from './Dashboard/DashboardNavbar'
// import Message from './Dashboard/Message'
// import Settings from './Dashboard/Settings'



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
          <Route path="/singlepage/:id" element={<SinglePage/>}/>
          <Route path='/Homeproduct' element={<HomeProduct/>}/>
          <Route path='/Contact1' element={<Contact1/>}/>
          </Route>
          <Route path="/" element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<Dashboardview/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Utilities" element={<Utilities/>}/>
            {/* <Route path="/Message" element={<Message/>}/>
            <Route path="/Settings" element={<settings/>}/> */}
          </Route>
          <Route path="/" element={<Dash2_Layout/>}>
            <Route path="/dash2" index element={<Dash2_View/>}/>
            </Route>
          </Routes> 
    </BrowserRouter>
   )
}
export default App

import HomePage from "./HomePage"
import BlogPage from "./BlogPage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"

import React from 'react'
import{ BrowserRouter, Routes, Route } from "react-router-dom"


/* import HomeAbout from './HomeAbout'
import HomeBlogs from './HomeBlogs'
import HomeContact from './HomeContact' */


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/home" element={<HomePage />} />
            <Route path="/blogs/" element={<BlogPage />}/>
            <Route path="/About/" element={<AboutPage />}/>
            <Route path="/Contact/" element={<ContactPage />}/>
         
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
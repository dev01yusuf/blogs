import HomePage from "./HomePage"

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
            {/* <Route path="/About/" element={<About />}/>
            <Route path="/blogs/" element={<Blogs />}/>
            <Route path="/Contact/" element={<Contact />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
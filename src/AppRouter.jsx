import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'

const AppRouter = () => 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs />}/>
    <Route />
  </Routes>

export default AppRouter;
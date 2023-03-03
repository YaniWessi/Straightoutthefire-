import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Artist from './pages/Artist';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';
import Shop from './pages/Shop';

const AppRouter = () => 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs />}/>
    <Route path='/artist' element={<Artist />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/team' element={<OurTeam />} />
    <Route path='/shop' element={<Shop />}/>    
  </Routes>

export default AppRouter;
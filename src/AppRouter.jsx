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
    <Route path='/artist' elememt={<Artist />} />
    <Route path='/gallery' elememt={<Gallery />} />
    <Route path='/team' elememt={<OurTeam />} />
    <Route path='/shop' elememt={<Shop />} />
    
  </Routes>

export default AppRouter;
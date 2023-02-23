import React from 'react';
import AppHeader from "../components/templates/header/AppHeader"
// import ScrollingImg from './components/Slider/ScrollingImg';

import Slider from '../components/templates/Slider/Slider'
import MidBody from '../components/midbody/MidBody'
import MerchLabelLink from "../components/midbody/MerchLabelLink";
import MidVideo from "../components/midbody/MidVideo";
import Footer from "../components/templates/footer/Footer";

const Home = () => 
 <>
  <AppHeader />
  <Slider />
  <MerchLabelLink/>
  <MidBody />
  <MidVideo/>
  <Footer/>
</> 

export default Home;
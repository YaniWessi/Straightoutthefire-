import React from 'react';
import AppHeader from "../components/templates/header/AppHeader"
// import ScrollingImg from './components/Slider/ScrollingImg';

import Slider from '../components/templates/Slider/Slider'
import MidBody from '../components/templates/midbody/MidBody'
import MerchLabelLink from "../components/templates/midbody/MerchLabelLink";
import MidVideo from "../components/templates/midbody/MidVideo";
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
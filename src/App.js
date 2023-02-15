// import './index.css'

import AppHeader from "./components/header/AppHeader"
// import ScrollingImg from './components/Slider/ScrollingImg';

import Slider from './components/Slider/Slider'
import MidBody from './components/midbody/MidBody'
import MerchLabelLink from "./components/midbody/MerchLabelLink";
import MidVideo from "./components/midbody/MidVideo";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <AppHeader />
      <Slider />
      <MerchLabelLink/>
      <MidBody />
      <MidVideo/>
      <Footer/>

   </>
  );
}

export default App;

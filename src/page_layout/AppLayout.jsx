import React from 'react';
import AppHeader from '../components/templates/header/AppHeader'


const AppLayout = ({ children }) => {

  return(
    <>
     <AppHeader />
     { children }
    </>
  )
}

export default AppLayout;
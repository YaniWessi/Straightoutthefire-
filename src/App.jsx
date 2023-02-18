import React from 'react';
import AppRouter from './AppRouter'
import AppLayout from './page_layout/AppLayout';


function App() {
  return (
    <AppLayout>
      <AppRouter />
   </AppLayout>
  );
}

export default App;

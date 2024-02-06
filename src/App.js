import React from 'react';
import MainRoutes from './routes/MainRoutes';

import Header from './components/navbar/Header';


const App = () => {
  return (
    <div>
      <MainRoutes />

      <Header/>

    </div>
  );
}

export default App;

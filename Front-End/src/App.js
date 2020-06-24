import React from 'react';
import './App.scss';

import ControlledCarousel from './components/Carrousel';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ControlledCarousel />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;

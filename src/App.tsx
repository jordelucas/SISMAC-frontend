import React from 'react';

import './App.css'

import GlobalStyle from './styles/global'
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      
      <div id="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

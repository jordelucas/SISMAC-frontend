import React from 'react';

import './App.css'

import GlobalStyle from './styles/global'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      
      <div id="app">
        <Routes />
      </div>
    </>
  );
}

export default App;

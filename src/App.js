import React from 'react';

import './globals.css'
import './App.css'
import './Navbar.css'
import './Main.css'
import './Footer.css'

function App() {
  return (
    <div id="app">

      <header className="navbar">
        <span className="brand">SISMAC</span>
        
        <div className="user">
          <div className="welcome">
            <small>Bem-vindo(a)</small>
            <strong>Usuário</strong>
          </div>
        
          <img 
            src="https://avatars2.githubusercontent.com/u/33496399?s=460&u=ba659f521711486b87e6f5e9ea7f19b770c7fa0c&v=4"
            alt="Foto do perfil"
          />
        </div>
      </header>
      
      <main>
        <h1>Main</h1>
      </main>
      
      <footer>
        <p>&copy; SISMAC 2020. Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;

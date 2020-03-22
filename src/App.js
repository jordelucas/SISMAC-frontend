import React from 'react';

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

// import './globals.css'
import './App.css'
import './Navbar.css'
import './Main.css'

import GlobalStyle from './styles/global'
import Footer from './components/footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="app">
        <header className="navbar">
          <span className="brand">SISMAC</span>
          
          <div className="user-info">
            <div className="welcome">
              <small>Bem-vindo(a)</small>
              <strong>Jordevá L.</strong>
            </div>
          
            <img 
              src="https://avatars2.githubusercontent.com/u/33496399?s=460&u=ba659f521711486b87e6f5e9ea7f19b770c7fa0c&v=4"
              alt="Foto do perfil"
            />
          </div>
        </header>
        
        <main>
          <ul className="options">
            <li>
              <button>
                <EventNoteIcon style={{ fontSize: 50 }}/>
                <span>Agendamentos</span>
              </button>
            </li>
            <li>
              <button>
                <LocalHospitalIcon style={{ fontSize: 50 }}/>
                <span>Consultas e procedimentos</span>
              </button>
            </li>
            <li>
              <button>
                <PeopleAltIcon style={{ fontSize: 50 }}/>
                <span>Usuários</span>
              </button>
            </li>
          </ul>
        </main>
        
        <Footer />
      
      </div>
    </>
  );
}

export default App;

import React from 'react';

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import './App.css'
import './Main.css'

import GlobalStyle from './styles/global'
import Footer from './components/footer'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="app">
        <Navbar />
        
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

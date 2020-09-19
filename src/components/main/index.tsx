import React from 'react'

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import StyledMain from './styles'

const Main: React.FC = () => {
    return (
        <StyledMain>
            <ul>
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
        </StyledMain>  
    )
}

export default Main;
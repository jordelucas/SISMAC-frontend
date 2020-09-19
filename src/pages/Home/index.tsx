import React from 'react';

import { Link } from 'react-router-dom';

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { Container, List, Item } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/">
            <EventNoteIcon style={{ fontSize: 50 }}/>
            <span>Agendamentos</span>
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <LocalHospitalIcon style={{ fontSize: 50 }}/>
            <span>Consultas e procedimentos</span>
          </Link>
        </Item>
        <Item>
          <Link to="/users">
            <PeopleAltIcon style={{ fontSize: 50 }}/>
            <span>Pacientes</span>
          </Link>
        </Item>
      </List>
    </Container>
  );
}

export default Home;
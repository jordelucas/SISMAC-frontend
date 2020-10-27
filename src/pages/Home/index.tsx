import React from 'react';

import { Link } from 'react-router-dom';

import { 
  EventNote, 
  LocalHospital, 
  PeopleAlt } from '@material-ui/icons/';

import { Container, List, Item } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/scheduling">
            <EventNote style={{ fontSize: 50 }}/>
            <span>Agendamentos</span>
          </Link>
        </Item>
        <Item>
          <Link to="/management">
            <LocalHospital style={{ fontSize: 50 }}/>
            <span>Consultas e exames</span>
          </Link>
        </Item>
        <Item>
          <Link to="/users">
            <PeopleAlt style={{ fontSize: 50 }}/>
            <span>Pacientes</span>
          </Link>
        </Item>
      </List>
    </Container>
  );
}

export default Home;
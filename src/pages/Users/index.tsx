import React from 'react';

import { Link } from 'react-router-dom';

import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Filter from '../../components/Filter';

import {
  Header,
  Table,
  TableHead,
  TableBody,
  ArrowForwardIcon } from './styles';

const Users: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>

          <Header>
            <Title text="Lista de pacientes" />
            <Link to="/users/new">Adicionar paciente</Link>
          </Header>

          <Filter />

          <Table>
            <TableHead>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>SUS</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <td>JORDEVA LUCAS</td>
                <td>111.111.111-11</td>
                <td>111</td>
                <td><ArrowForwardIcon /></td>
              </tr>
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default Users;
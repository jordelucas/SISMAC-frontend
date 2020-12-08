import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import Header from '../../components/Layout/Header';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import Filter from '../../components/Filter';
import { Table, TableBody, TableHead } from '../../components/Table';

import { ArrowForwardIcon } from './styles';

interface Patient {
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  dataNascimento: string;
  telefone: string;
  numero: string;
}

const Users: React.FC<Patient> = () => {
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([])

  function handleFilteredPatients(filteredPatients: Array<Patient>) {
    setFilteredPatients(filteredPatients);
  }

  const options = {
    cpf: true,
    sus: true,
    nome: true,
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>

          <Header mb="2">
            <Title text="Lista de pacientes" />
            <Link to="/users/new">Adicionar paciente</Link>
          </Header>

          <Filter patientsFiltered={handleFilteredPatients} options={options}/>

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
              {filteredPatients.map((patient: Patient, index) => {
                return (
                  <tr key={index}>
                    <td>{patient.nomePaciente}</td>
                    <td>{patient.cpf}</td>
                    <td>{patient.carteiraSUS}</td>
                    <td>
                      <Link to={{
                        pathname: `user/${index}`,
                        state: {
                          id: patient.cpf
                        }
                      }}>
                        <ArrowForwardIcon />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default Users;
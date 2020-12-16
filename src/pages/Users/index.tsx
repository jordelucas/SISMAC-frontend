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

interface Client {
  nomeCliente: string;
  cpf: string;
  cidade: string;
  bairro: string;
  complemento: string; 
  dataNascimento: string;
  telefone: string;
  numero: string;
  fidelidade: boolean;
}

const Users: React.FC<Client> = () => {
  const [filteredClients, setFilteredClients] = useState<Client[]>([])

  function handleFilteredClients(filteredClients: Array<Client>) {
    setFilteredClients(filteredClients);
  }

  const options = {
    cpf: true,
    nome: true,
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>

          <Header mb="2">
            <Title text="Lista de clientes" />
            <Link to="/users/new">Adicionar cliente</Link>
          </Header>

          <Filter clientsFiltered={handleFilteredClients} options={options}/>

          <Table>
            <TableHead>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              {filteredClients.map((cliente: Client, index) => {
                return (
                  <tr key={index}>
                    <td>{cliente.nomeCliente}</td>
                    <td>{cliente.cpf}</td>
                    <td>
                      <Link to={{
                        pathname: `user/${index}`,
                        state: {
                          id: cliente.cpf
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
import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import Content from '../../../components/Layout/Content';
import Header from '../../../components/Layout/Header';
import Wrapper from '../../../components/Layout/Wrapper';
import { Table, TableBody, TableHead } from '../../../components/Table';
import Title from '../../../components/Title';
import { ArrowForwardIcon } from './styles';

const Specialty: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de especialidades" />
            <Link to="/users/new">Adicionar especialidade</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>ESPECIALIDADE</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <td style={{ width: '100%' }}>Cardiologia</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Clínico Geral</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Ginecologia Clínica</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Hematologia</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Neurologia</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default Specialty;
import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import Content from '../../../components/Layout/Content';
import Header from '../../../components/Layout/Header';
import Wrapper from '../../../components/Layout/Wrapper';
import { Table, TableBody, TableHead } from '../../../components/Table';
import Title from '../../../components/Title';
import { ArrowForwardIcon } from './styles';

const Exam: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de exames" />
            <Link to="/users/new">Adicionar exame</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>Exames</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <td style={{ width: '100%' }}>Eletrocardiograma</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Endoscopia digestiva alta</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Espermograma</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ width: '100%' }}>Mamograma</td>
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

export default Exam;
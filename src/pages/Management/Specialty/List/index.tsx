import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../../../components/Layout/Wrapper';
import Content from '../../../../components/Layout/Content';
import Header from '../../../../components/Layout/Header';
import BackButton from '../../../../components/BackButton';
import Title from '../../../../components/Title';
import { Table, TableBody, TableHead } from '../../../../components/Table';
import { ArrowForwardIcon } from './styles';

import api from '../../../../services/api';
import { SpecialtyProps } from '../../../../Models/Specialty';

const Specialties: React.FC = () => {
  const [specialties, setSpecialties] = useState<SpecialtyProps[]>()

  useEffect(() => {
    async function loadAllSpecialties() {
      const response = await api.get('consultas');
      setSpecialties(response.data)
    }

    loadAllSpecialties();
  }, []);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de especialidades" />
            <Link to="specialties/new">Adicionar especialidade</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>ESPECIALIDADE</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              {specialties?.map((specialty: SpecialtyProps, index) => {
                return (
                  <tr key={specialty.id}>
                    <td style={{ width: '100%' }}>{specialty.nome}</td>
                    <td>
                      <Link to={{
                        pathname: `/management/specialty/${specialty.id}`,
                        state: {
                          id: specialty.id
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

export default Specialties;
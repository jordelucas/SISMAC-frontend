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

interface SpecialtyProps {
  id: number;
  nomeEspecialidade: string
}

const Specialty: React.FC = () => {
  const [specialties, setSpecialties] = useState<SpecialtyProps[]>()

  useEffect(() => {
    async function loadAllSpecialty() {
      const response = await api.get('especialidades/todasEspecialidades');
      setSpecialties(response.data)
    }

    loadAllSpecialty();
  }, []);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de especialidades" />
            <Link to="specialty/new">Adicionar especialidade</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>ESPECIALIDADE</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              {specialties?.map(specialty => {
                return (
                  <tr key={specialty.id}>
                    <td style={{ width: '100%' }}>{specialty.nomeEspecialidade}</td>
                    <td>
                      <Link to='/'>
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

export default Specialty;
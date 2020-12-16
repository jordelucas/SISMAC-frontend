import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Content from '../../../../components/Layout/Content';
import Wrapper from '../../../../components/Layout/Wrapper';
import Header from '../../../../components/Layout/Header';
import Title from '../../../../components/Title';
import BackButton from '../../../../components/BackButton';
import { Table, TableBody, TableHead } from '../../../../components/Table';
import { ArrowForwardIcon } from './styles';

import api from '../../../../services/api';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface VacanciesProps {
  content: Details[];
}

interface Details {
  id: number,
  data: string,
  vagasOfertadas: number,
  vagasRestantes: number,
}

const Beard: React.FC = () => {
  const { state: specialtyId } = useLocation<LocationState>();

  const [vacancies, setVacancies] = useState<Details[]>()
  
  const { id } = specialtyId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<VacanciesProps>(
      `vagas?barba=true&cabelo=false`
    ).then((response) => {
      const { 
        content: listVacancies
      } = response.data;

      const filteredVacancies = listVacancies.map(item => {
        return {
          ...item,
          data: item.data.split('-').reverse().join('/')
        }
      })

       setVacancies(filteredVacancies)
    }) 
  }, [])

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de Barba" />
            <Link 
              to={{
                pathname: `/management/beard/vacancies/new`,
                state: {
                  // id,
                }
              }}
            >Adicionar vagas</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>DATA</th>
                <th>VAGAS</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              {vacancies?.map(vacancy => (
                <tr key={vacancy.id}>
                  <td>{vacancy.data}</td>
                  <td>{vacancy.vagasOfertadas - vacancy.vagasRestantes}/{vacancy.vagasOfertadas}</td>
                  <td>
                    <Link to={{
                      pathname: `/management/specialty/${id}/vacancy/${vacancy.id}`,
                      state: {
                        vacancyID: vacancy.id,
                        specialityID: id,
                      }
                    }}>
                      <ArrowForwardIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default Beard;
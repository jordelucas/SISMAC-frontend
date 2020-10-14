import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Content from '../../../../components/Layout/Content';
import Wrapper from '../../../../components/Layout/Wrapper';
import Header from '../../../../components/Layout/Header';
import Title from '../../../../components/Title';
import BackButton from '../../../../components/BackButton';
import { Button } from '../../../../components/Button';
import Input from '../../../../components/Input';
import { Table, TableBody, TableHead } from '../../../../components/Table';
import { ArrowForwardIcon } from './styles';

import {
  Form, 
  FormGroup, 
  Grid } from './styles';
import api from '../../../../services/api';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface SpecialtyProps {
  nomeEspecialidade: string;
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

const Specialty: React.FC = () => {
  const { state: specialtyId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)

  const [nome, setNome] = useState('')
  const [vacancies, setVacancies] = useState<Details[]>()
  
  const { id } = specialtyId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<SpecialtyProps>(
      `especialidades/${id}`
    ).then((response) => {
      const { 
        nomeEspecialidade: specialtyNome,
       } = response.data;

       setNome(specialtyNome)
    }) 
  }, [id])

  useEffect(() => {
    api.get<VacanciesProps>(
      `vagas?consulta=true&especialidade_id=${id}`
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
  }, [id])

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  function handleUpdateSpecialty(e: FormEvent) {
    e.preventDefault();

    api.put(`especialidades/atualizarEspecialidade/${id}`, {
      nomeEspecialidade: nome,
    }).then(() => {
      setIsEditDisabled(prevState => !prevState)
      alert('Cadastro atualizado com sucesso!')
    }).catch(() => {
      alert('Erro na atualização do cadastro!')
    })
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management/specialties"/>

          <Header>
            <Title text="Dados da especialidade" />
            <button onClick={changeDisable} disabled={!isEditDisabled}>Editar</button>
          </Header>

          <Form onSubmit={handleUpdateSpecialty}>
            <Grid>
              <FormGroup gridArea='NM'>
                <Input 
                  type="text"
                  label="Nome"
                  identifier="nome"
                  value={nome}
                  onChange={setNome}
                  disabled={isEditDisabled}/>
              </FormGroup>
            </Grid>

            {!isEditDisabled && <Button type="submit">Salvar alterações</Button>}
          </Form>

          <Header>
            <Title text="Lista de vagas" />
            <Link 
              to={{
                pathname: `/management/specialties/vacancies/new`,
                state: {
                  id,
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
                    <Link to='/'>
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

export default Specialty;
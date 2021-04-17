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
import { SpecialtyProps } from '../../../../Models/Specialty';

interface LocationState {
  id: {
    pathname: string;
  };
}
interface VacanciesProps {
  id: number,
  dataConsulta: string,
  quantidade: number,
  disponivel: number,
  local: string,
  nomeEspecialista: string,
}

const Specialty: React.FC = () => {
  const { state: specialtyId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)

  const [nome, setNome] = useState('')
  const [vacancies, setVacancies] = useState<VacanciesProps[]>()
  
  const { id } = specialtyId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<SpecialtyProps>(
      `consultas/${id}`
    ).then((response) => {
      const { 
        nome: specialtyNome,
       } = response.data;

       setNome(specialtyNome)
    }) 
  }, [id])

  useEffect(() => {
    api.get<VacanciesProps[]>(
      `consultas/${id}/vagas`
    ).then((response) => {
      console.log(response.data);
      const filteredVacancies = response.data.map(item => {
        return {
          ...item,
          dataConsulta: item.dataConsulta.split('T')[0].split('-').reverse().join('/')
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

    api.put(`consultas/${id}`, {
      nome,
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
                  <td>{vacancy.dataConsulta}</td>
                  <td>{`${vacancy.quantidade - vacancy.disponivel}/${vacancy.quantidade}`}</td>
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

export default Specialty;
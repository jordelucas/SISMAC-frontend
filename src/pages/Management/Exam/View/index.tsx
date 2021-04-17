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
import { ExamProps } from '../../../../Models/Exam';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface VacanciesProps {
  id: number,
  dataExame: string,
  quantidade: number,
  disponivel: number,
  local: string,
}

const Exam: React.FC = () => {
  const { state: examId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)
  
  const [vacancies, setVacancies] = useState<VacanciesProps[]>()
  const [nome, setNome] = useState('')
  const [authorization, setAuthorization] = useState(false)
  
  const { id } = examId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<ExamProps>(
      `exames/${id}`
    ).then((response) => {
      const { 
        nome: examNome,
        autorizacao: examAutorizacao,
       } = response.data;

       setNome(examNome)
       setAuthorization(examAutorizacao)
    }) 
  }, [id])

  useEffect(() => {
    api.get<VacanciesProps[]>(
      `exames/${id}/vagas`
    ).then((response) => {
      const filteredVacancies = response.data.map(item => {
        return {
          ...item,
          dataExame: item.dataExame.split('T')[0].split('-').reverse().join('/')
        }
      })
      
      setVacancies(filteredVacancies)
    }) 
  }, [id])

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  function handleUpdateExam(e: FormEvent) {
    e.preventDefault();

    api.put(`exames/${id}`, {
      nome,
      autorizacao: authorization,
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
          <BackButton link="/management/exams"/>

          <Header>
            <Title text="Dados do exame" />
            <button onClick={changeDisable} disabled={!isEditDisabled}>Editar</button>
          </Header>

          <Form onSubmit={handleUpdateExam}>
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
              <FormGroup gridArea='AU'>
                <Input 
                  type="radio"
                  label="Autorização"
                  identifier="autorizacao"
                  checked={authorization}
                  onChange={setAuthorization}
                  disabled={isEditDisabled}
                />
              </FormGroup>
            </Grid>

            {!isEditDisabled && <Button type="submit">Salvar alterações</Button>}
          </Form>

          <Header>
            <Title text="Lista de vagas" />
            <Link 
              to={{
                pathname: `/management/exams/vacancies/new`,
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
                  <td>{vacancy.dataExame}</td>
                  <td>{`${vacancy.quantidade - vacancy.disponivel}/${vacancy.quantidade}`}</td>
                  <td>
                    <Link to={{
                      pathname: `/management/exam/${id}/vacancy/${vacancy.id}`,
                      state: {
                        vacancyID: vacancy.id,
                        examID: id,
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

export default Exam;
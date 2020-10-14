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

interface ExamProps {
  nomeExame: string;
  autorizacao: boolean;
}

const Exam: React.FC = () => {
  const { state: examId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)

  const [nome, setNome] = useState('')
  const [authorization, setAuthorization] = useState(false)
  
  const { id } = examId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<ExamProps>(
      `exames/${id}`
    ).then((response) => {
      const { 
        nomeExame: examNome,
        autorizacao: examAutorizacao,
       } = response.data;

       setNome(examNome)
       setAuthorization(examAutorizacao)
    }) 
  }, [id])

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  function handleUpdateExam(e: FormEvent) {
    e.preventDefault();

    api.put(`exames/editarExame/${id}`, {
      nomeExame: nome,
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
              <tr>
                <td>10/10/2020</td>
                <td>15/30</td>
                <td>
                  <Link to='/'>
                    <ArrowForwardIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>15/10/2020</td>
                <td>13/15</td>
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
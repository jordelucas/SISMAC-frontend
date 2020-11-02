import React, { FormEvent, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import api from '../../../../../../services/api';

import Content from '../../../../../../components/Layout/Content';
import Wrapper from '../../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../../components/BackButton';
import Title from '../../../../../../components/Title';
import { Button } from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';

import { 
  Form, 
  FormGroup, 
  Grid
} from './styles';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface ExamProps {
  nomeExame: string;
}

const NewVacanciesExam: React.FC = () => {
  const { state: exameId } = useLocation<LocationState>();
  
  const [nomeExame, setNomeExame] = useState('')
  const [data, setData] = useState('')
  const [vagas, setVagas] = useState('')
  const [local, setLocal] = useState('')

  const { id } = exameId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<ExamProps>(
      `exames/${id}`
    ).then((response) => {
      const { 
        nomeExame: examNome,
       } = response.data;

       setNomeExame(examNome)
    }) 
  }, [id])

  function handleCreateVacancy(e: FormEvent) {
    e.preventDefault();

    const vacancyDate = data.split('-').reverse().join('/')

    api.post('vagas', {
      data: vacancyDate,
      vagasOfertadas: vagas,
      especialidade: null,
      exame: id,
      consulta: false,
      medico: "",
      lugar: local,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  function clearStates(){
    setData('')
    setVagas('')
    setLocal('')
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={{
            pathname: `/management/exam/${id}`,
            state: {
              id,
            }
          }}/>
          <Title text={`Novas vagas - ${nomeExame}`} />

          <Form onSubmit={handleCreateVacancy}>
            <Grid>
              <FormGroup gridArea='DT'>
                <Input 
                  type="date"
                  label="Data" 
                  identifier="data"
                  value={data}
                  onChange={setData}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='VG'>
                <Input 
                  type="number"
                  label="Quantidade de vagas"
                  identifier="vagas"
                  value={vagas}
                  onChange={setVagas}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='LC'>
                <Input 
                  type="text"
                  label="Local"
                  identifier="local"
                  value={local}
                  onChange={setLocal}
                  disabled={false}/>
              </FormGroup>
            </Grid>

            <Button type="submit">Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewVacanciesExam;
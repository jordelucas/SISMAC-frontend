import React, { FormEvent, useState } from 'react';

import api from '../../../../../services/api';

import Content from '../../../../../components/Layout/Content';
import Wrapper from '../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../components/BackButton';
import Title from '../../../../../components/Title';
import { Button } from '../../../../../components/Button';
import Input from '../../../../../components/Input';

import { 
  Form, 
  FormGroup, 
  Grid
} from './styles';

const NewVacanciesBeard: React.FC = () => {  
  const [data, setData] = useState('')
  const [vagas, setVagas] = useState('')

  function handleCreateVacancy(e: FormEvent) {
    e.preventDefault();

    const vacancyDate = data.split('-').reverse().join('/')

    api.post('vagas', {
      data: vacancyDate,
      vagasOfertadas: vagas,
      barba: true,
      cabelo: false,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  function clearStates(){
    setData('');
    setVagas('');
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={`/management/beard`} />
          <Title text={`Novas vagas para Barba`} />

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
            </Grid>

            <Button type="submit">Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewVacanciesBeard;
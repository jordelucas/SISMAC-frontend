import React, { FormEvent, useState } from 'react';

import Content from '../../../../components/Layout/Content';
import Wrapper from '../../../../components/Layout/Wrapper';
import BackButton from '../../../../components/BackButton';
import Title from '../../../../components/Title';
import { Button } from '../../../../components/Button';

import api from '../../../../services/api';
import Input from '../../../../components/Input';

import { 
  Form,
  FormGroup,
  Grid,
} from './styles';

const NewExam: React.FC = () => {
  const [nome, setNome] = useState('')
  const [authorization, setAuthorization] = useState<boolean>(false)
  
  function handleCreateExam(e: FormEvent) {
    e.preventDefault();

    api.post('exames', {
      nomeExame: nome,
      autorizacao: authorization,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }
  
  function clearStates(){
    setNome('');
    setAuthorization(false);
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management/exams"/>
          <Title text="Novo exame" />

          <Form onSubmit={handleCreateExam}>
            <Grid>
              <FormGroup gridArea='NM'>
                <Input 
                  type="text"
                  label="Nome"
                  identifier="nome"
                  value={nome}
                  onChange={setNome}
                  disabled={false}
                />
              </FormGroup>
              <FormGroup gridArea='AU'>
                <Input 
                  type="radio"
                  label="Autorização"
                  identifier="autorizacao"
                  checked={authorization}
                  onChange={setAuthorization}
                  disabled={false}
                />
              </FormGroup>
            </Grid>

            <Button type="submit">Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewExam;
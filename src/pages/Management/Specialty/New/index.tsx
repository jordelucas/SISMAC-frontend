import React, { FormEvent, useState } from 'react';

import Content from '../../../../components/Layout/Content';
import Wrapper from '../../../../components/Layout/Wrapper';
import BackButton from '../../../../components/BackButton';
import Title from '../../../../components/Title';
import { Button } from '../../../../components/Button';
import api from '../../../../services/api';

import { 
  Form,
  FormGroup,
  Grid,
} from './styles';
import Input from '../../../../components/Input';

const NewSpecialty: React.FC = () => {
  const [nome, setNome] = useState('')

  function handleCreateSpecialty(e: FormEvent) {
    e.preventDefault();

    api.post('consultas', {
      nome,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  function clearStates(){
    setNome('');
  }
  
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management/specialties"/>
          <Title text="Nova especialidade" />

          <Form onSubmit={handleCreateSpecialty}>
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
            </Grid>

            <Button type="submit">Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewSpecialty;
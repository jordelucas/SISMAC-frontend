import React from 'react';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import BackButton from '../../../components/BackButton';
import Title from '../../../components/Title';

import { 
  Form, 
  FormGroup, 
  Grid} from './styles';
import Button from '../../../components/Button';

const NewUser: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/users"/>
          <Title text="Novo paciente" />

          <Form>
            <Grid>
              <FormGroup gridArea='NM'>
                <label htmlFor="nome">nome</label>
                <input type="text" name="nome" id="nome"/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <label htmlFor="dtNascimento">data de nascimento</label>
                <input type="text" name="Data de Nascimento" id="dtNascimento"/>
              </FormGroup>
              <FormGroup gridArea='CP'>
                <label htmlFor="CPF">CPF</label>
                <input type="text" name="CPF" id="CPF"/>
              </FormGroup>
              <FormGroup gridArea='SU'>
                <label htmlFor="nSUS">nSUS</label>
                <input type="text" name="nSUS" id="nSUS"/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <label htmlFor="telefone">telefone</label>
                <input type="text" name="telefone" id="telefone"/>
              </FormGroup>
              <FormGroup gridArea='CD'>
                <label htmlFor="cidade">cidade</label>
                <input type="text" name="cidade" id="cidade"/>
              </FormGroup>
              <FormGroup gridArea='BR'>
                <label htmlFor="bairro">bairro</label>
                <input type="text" name="bairro" id="bairro"/>
              </FormGroup>
              <FormGroup gridArea='NU'>
                <label htmlFor="numero">número</label>
                <input type="text" name="numero" id="numero"/>
              </FormGroup>
              <FormGroup gridArea='CO'>
                <label htmlFor="complemento">complemento</label>
                <input type="text" name="complemento" id="complemento"/>
              </FormGroup>
            </Grid>

            <Button text="Salvar"/>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewUser;
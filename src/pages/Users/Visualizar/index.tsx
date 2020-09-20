import React, { useState } from 'react';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import Title from '../../../components/Title';
import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Header, 
  Form, 
  FormGroup, 
  Grid } from './styles';
import { Table, TableBody, TableHead } from '../../../components/Table';

const User: React.FC = () => {
  const [isEditDisabled, setIsEditDisabled] = useState(true)

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/users"/>

          <Header>
            <Title text="Dados pessoais" />
            <button onClick={changeDisable} disabled={!isEditDisabled}>Editar</button>
          </Header>

          <Form>
            <Grid>
              <FormGroup gridArea='NM'>
                <Input 
                  type="text"
                  label="Nome"
                  identifier="nome"
                  value="Jordevá Lucas Santos da Silva"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <Input 
                  type="text"
                  label="Data de nascimento" 
                  identifier="dtNascimento"
                  value="29/12/1992"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CP'>
                <Input 
                  type="text"
                  label="CPF"
                  identifier="CPF"
                  value="104.225.784-10"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='SU'>
                <Input 
                  type="text"
                  label="nSUS"
                  identifier="nSUS"
                  value="123654"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value="(84) 9 9185-0456"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CD'>
                <Input 
                  type="text"
                  label="Cidade"
                  identifier="cidade"
                  value="Canguaretama"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='BR'>
                <Input 
                  type="text"
                  label="Bairro"
                  identifier="bairro"
                  value="Piquiri"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='NU'>
                <Input 
                  type="text"
                  label="Número"
                  identifier="numero"
                  value="03"
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CO'>
                <Input 
                  type="text"
                  label="Complemento"
                  identifier="complemento"
                  value="Próximo a piscina"
                  disabled={isEditDisabled}/>
              </FormGroup>
            </Grid>

            {!isEditDisabled && <Button text="Salvar alterações"/>}
          </Form>

          <Title text="Agendamentos" />

          <Table>
            <TableHead>
              <tr>
                <th>SOLICITAÇÃO</th>
                <th>ESPECIALIDADE</th>
                <th>DATA</th>
                <th>STATUS</th>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <td>504</td>
                <td>Cardiologista</td>
                <td>10/10/2020</td>
                <td>Marcado</td>
              </tr>
              <tr>
                <td>513</td>
                <td>Ortopedista</td>
                <td>- - -</td>
                <td>Aguardando</td>
              </tr>
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default User;
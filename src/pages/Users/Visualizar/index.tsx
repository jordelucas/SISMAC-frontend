import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import Title from '../../../components/Title';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';
import { Table, TableBody, TableHead } from '../../../components/Table';

import {
  Header, 
  Form, 
  FormGroup, 
  Grid } from './styles';
import api from '../../../services/api';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface Patient {
  content: Array<Details>
}

interface Details {
  nome: string;
  carteiraSUS: string;
  cpf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  dataNascimento: string;
  telefone: string;
  numero: string;
}

const User: React.FC = () => {
  const { state: patientId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)

  const [nome, setNome] = useState('')
  const [dtNascimento, setDtNascimento] = useState('')
  const [cpf, setCpf] = useState('')
  const [nsus, setNsus] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  
  const { id } = patientId || { id: { pathname: "/" } };

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  useEffect(() => {
    api.get<Patient>('pacientes', {
      params: {
        cpf: id
      }
    }).then((response) => {
      const { 
        nome: patientNome,
        cpf: patientCpf,
        carteiraSUS: patientNsus,
        dataNascimento: patientDtNascimento,
        telefone: patientTelefone,
        cidade: patientCidade,
        bairro: patientBairro,
        numero: patientNumero,
        complemento: patientComplemento,
       } = response.data.content[0];

       setNome(patientNome)
       setDtNascimento(patientDtNascimento)
       setCpf(patientCpf)
       setNsus(patientNsus)
       setTelefone(patientTelefone)
       setCidade(patientCidade)
       setBairro(patientBairro)
       setNumero(patientNumero)
       setComplemento(patientComplemento)
    }) 
  }, [id])

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
                  value={nome}
                  onChange={setNome}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <Input 
                  type="text"
                  label="Data de nascimento" 
                  identifier="dtNascimento"
                  value={dtNascimento}
                  onChange={setDtNascimento}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CP'>
                <Input 
                  type="text"
                  label="CPF"
                  identifier="CPF"
                  value={cpf}
                  onChange={setCpf}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='SU'>
                <Input 
                  type="text"
                  label="nSUS"
                  identifier="nSUS"
                  value={nsus}
                  onChange={setNsus}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value={telefone}
                  onChange={setTelefone}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CD'>
                <Input 
                  type="text"
                  label="Cidade"
                  identifier="cidade"
                  value={cidade}
                  onChange={setCidade}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='BR'>
                <Input 
                  type="text"
                  label="Bairro"
                  identifier="bairro"
                  value={bairro}
                  onChange={setBairro}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='NU'>
                <Input 
                  type="text"
                  label="Número"
                  identifier="numero"
                  value={numero}
                  onChange={setNumero}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='CO'>
                <Input 
                  type="text"
                  label="Complemento"
                  identifier="complemento"
                  value={complemento}
                  onChange={setComplemento}
                  disabled={isEditDisabled}/>
              </FormGroup>
            </Grid>

            {!isEditDisabled && <Button>Salvar alterações</Button>}
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
                <td>- -/- -/- - - -</td>
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
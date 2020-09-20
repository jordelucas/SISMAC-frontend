import React, { FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import BackButton from '../../../components/BackButton';
import Title from '../../../components/Title';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

import { 
  Form, 
  FormGroup, 
  Grid} from './styles';

const NewUser: React.FC = () => {
  const history = useHistory();

  const [nome, setNome] = useState('')
  const [dtNascimento, setDtNascimento] = useState('')
  const [cpf, setCpf] = useState('')
  const [nsus, setNsus] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    api.post('users', {
      nome,
      dtNascimento,
      cpf,
      nsus,
      telefone,
      cidade,
      bairro,
      numero,
      complemento,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/users"/>
          <Title text="Novo paciente" />

          <Form onSubmit={handleCreateUser}>
            <Grid>
              <FormGroup gridArea='NM'>
                <Input 
                  type="text"
                  label="Nome"
                  identifier="nome"
                  value={nome}
                  onChange={setNome}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <Input 
                  type="text"
                  label="Data e nascimento" 
                  identifier="dtNascimento"
                  value={dtNascimento}
                  onChange={setDtNascimento}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CP'>
                <Input 
                  type="text"
                  label="CPF"
                  identifier="CPF"
                  value={cpf}
                  onChange={setCpf}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='SU'>
                <Input 
                  type="text"
                  label="nSUS"
                  identifier="nSUS"
                  value={nsus}
                  onChange={setNsus}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value={telefone}
                  onChange={setTelefone}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CD'>
                <Input 
                  type="text"
                  label="Cidade"
                  identifier="cidade"
                  value={cidade}
                  onChange={setCidade}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='BR'>
                <Input 
                  type="text"
                  label="Bairro"
                  identifier="bairro"
                  value={bairro}
                  onChange={setBairro}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='NU'>
                <Input 
                  type="text"
                  label="Número"
                  identifier="numero"
                  value={numero}
                  onChange={setNumero}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CO'>
                <Input 
                  type="text"
                  label="Complemento"
                  identifier="complemento"
                  value={complemento}
                  onChange={setComplemento}
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

export default NewUser;
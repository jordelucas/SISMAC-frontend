import React, { FormEvent, useState } from 'react';

import api from '../../../services/api';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import BackButton from '../../../components/BackButton';
import Title from '../../../components/Title';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

import { cpfMask, phoneMask } from '../../../utils/Masks'

import { 
  Form, 
  FormGroup, 
  Grid
} from '../components/styles';

const NewUser: React.FC = () => {
  const [nome, setNome] = useState('')
  const [dtNascimento, setDtNascimento] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [fidelidade, setFidelidade] = useState(false)

  function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    api.post('clientes', {
      nome,
      cpf,
      cidade,
      bairro,
      numero,
      complemento,
      dataNascimento: dtNascimento,
      telefone,
      fidelidade,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  function clearStates(){
    setNome('');
    setDtNascimento('');
    setCpf('');
    setTelefone('');
    setCidade('');
    setBairro('');
    setNumero('');
    setComplemento('');
    setFidelidade(false);
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/users"/>
          <Title text="Novo cliente" />

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
                  type="date"
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
                  mask={cpfMask}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value={telefone}
                  onChange={setTelefone}
                  mask={phoneMask}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='FD'>
                <Input 
                  type="radio"
                  label="Fidelidade"
                  identifier="fidelidade"
                  checked={fidelidade}
                  onChange={setFidelidade}
                  disabled={false}
                />
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
                  type="number"
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
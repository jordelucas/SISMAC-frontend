import React, { FormEvent, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import Header from '../../../components/Layout/Header';
import Title from '../../../components/Title';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';
import { Table, TableBody, TableHead } from '../../../components/Table';
import { cpfMask, phoneMask } from '../../../utils/Masks';

import {
  Form, 
  FormGroup, 
  Grid } from './styles';
import api from '../../../services/api';

interface LocationState {
  id: {
    pathname: string;
  };
}

interface Client {
  content: Array<Details>
}

interface Details {
  id: number;
  nomeCliente: string;
  cpf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  dataNascimento: string;
  telefone: string;
  numero: string;
  fidelidade: boolean;
}

// interface SchedulesList {
//   content: Array<Schedules>
// }

// interface Schedules {
//   id: number,
//   dataAgendamento: string,
//   nomeExame: string,
//   nomeEspecialidade: string,
// }

const User: React.FC = () => {
  const { state: patientId } = useLocation<LocationState>();

  const [isEditDisabled, setIsEditDisabled] = useState(true)

  const [identifier, setIdentifier] = useState<number>()
  const [nome, setNome] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  // const [schedules, setSchedules] = useState<Schedules[]>();
  const [fidelidade, setFidelidade] = useState(false);
  
  const { id } = patientId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<Client>('clientes', {
      params: {
        cpf: id
      }
    }).then((response) => {
      const { 
        id: identifier,
        nomeCliente: clientNome,
        cpf: clientCpf,
        dataNascimento,
        telefone: clientTelefone,
        cidade: clientCidade,
        bairro: clientBairro,
        numero: clientNumero,
        complemento: clientComplemento,
        fidelidade: clientFidelidade,
      } = response.data.content[0];

      const clientDtNascimento = dataNascimento.split('/').reverse().join('-')

      setIdentifier(identifier);
      setNome(clientNome);
      setDtNascimento(clientDtNascimento);
      setCpf(clientCpf);
      setTelefone(clientTelefone);
      setCidade(clientCidade);
      setBairro(clientBairro);
      setNumero(clientNumero);
      setComplemento(clientComplemento);
      setFidelidade(clientFidelidade);
    }) 
  }, [id])

  // useEffect(() => {
  //   if (identifier !== undefined) {
  //     api.get<SchedulesList>(
  //       `agendamento/${identifier}`
  //     ).then((response) => {
  //       const result = response.data.content;
  //       setSchedules(result);
  //     }).catch(() => {
  //       alert('Erro ao buscar agendamentos!')
  //     })
  //   }
  // }, [identifier])

  function changeDisable() {
    setIsEditDisabled(prevState => !prevState)
  }

  function handleUpdateUser(e: FormEvent) {
    e.preventDefault();

    api.put(`clientes/${identifier}`, {
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
          <BackButton link="/users"/>

          <Header>
            <Title text="Dados pessoais" />
            <button onClick={changeDisable} disabled={!isEditDisabled}>Editar</button>
          </Header>

          <Form onSubmit={handleUpdateUser}>
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
                  type="date"
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
                  mask={cpfMask}
                  disabled={isEditDisabled}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value={telefone}
                  onChange={setTelefone}
                  mask={phoneMask}
                  disabled={isEditDisabled}/>
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
                  type="number"
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

            {!isEditDisabled && <Button type="submit">Salvar alterações</Button>}
          </Form>

          <Title text="Agendamentos" />

          <Table>
            <TableHead>
              <tr>
                <th>SOLICITAÇÃO</th>
                <th>TIPO</th>
                <th>DATA</th>
                <th>STATUS</th>
              </tr>
            </TableHead>
            <TableBody>
              {/* {schedules?.map(scheduling => {
                return (
                  <tr>
                    <td>{scheduling.id}</td>
                    <td>
                      {scheduling.nomeEspecialidade 
                        ? scheduling.nomeEspecialidade 
                        : scheduling.nomeExame
                      }
                    </td>
                    <td>{scheduling.dataAgendamento}</td>
                    <td>Marcado</td>
                  </tr>
                )
              })} */}
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default User;
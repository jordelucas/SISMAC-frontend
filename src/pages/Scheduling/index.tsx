import React, { FormEvent, useState } from 'react';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import Datalist from '../../components/Datalist';
import Input from '../../components/Input';

import Content from '../../components/Layout/Content';
import Header from '../../components/Layout/Header';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';
import api from '../../services/api';
import { cpfMask, phoneMask } from '../../utils/Masks';
import SelectUser from './SelectUser';

import {
  Form, 
  FormGroup, 
  ClientGrid,
  SolicitationGrid } from './styles';

interface Client {
  id: number;
  nomeCliente: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

interface OptionsList {
  name: string;
  id: number;
}

const BEARD_URL = "filaEspera/filaBarba"
const HAIR_URL = "filaEspera/filaCabelo"

const Scheduling: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [choice, setChoice] = useState<OptionsList>();
  
  function handleScheduling(e: FormEvent) {
    e.preventDefault();

    if (choice?.id === 1) {
      api.post(HAIR_URL, {
        user_id: 1,
        cliente_id: selectedClient?.id,
        cabelo: true,
        barba: false,
      }).then(() => {
        alert('Agendamento realizado com sucesso!')
        clearStates();
      }).catch(() => {
        alert('Erro no agendamento!')
      })
    } else if (choice?.id === 2) {
      api.post(BEARD_URL, {
        user_id: 1,
        cliente_id: selectedClient?.id,
        cabelo: false,
        barba: true,
      }).then(() => {
        alert('Agendamento realizado com sucesso!')
        clearStates();
      }).catch(() => {
        alert('Erro no agendamento!')
      })
    } else {
      return;
    }
  }

  function clearStates(){
    setSelectedClient(undefined);
    setChoice(undefined);
  }

  function renderClientData() {
    return (
      <>
        <Header mt="2">
          <Title text="Cliente" size="2" />
        </Header>

        <Form>
          <ClientGrid>
            <FormGroup gridArea='NM'>
              <Input 
                type="text"
                label="Nome"
                identifier="nome"
                value={selectedClient?.nomeCliente}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='NC'>
              <Input 
                type="date"
                label="Data de nascimento" 
                identifier="dtNascimento"
                value={selectedClient?.dataNascimento}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='CP'>
              <Input 
                type="text"
                label="CPF"
                identifier="CPF"
                value={selectedClient?.cpf}
                mask={cpfMask}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='FN'>
              <Input 
                type="text"
                label="Telefone"
                identifier="telefone"
                value={selectedClient?.telefone}
                mask={phoneMask}
                disabled={true}/>
            </FormGroup>
          </ClientGrid>
        </Form>
      </>
    )
  }

  function renderSchedulingChoice() {
    return (
      <>
        <Header>
          <Title text="Solicitação" size="2" />
        </Header>

        <Form onSubmit={handleScheduling}>
          <SolicitationGrid>
            <FormGroup gridArea='TP'>
              <Datalist 
                name="type"
                identifier="type"
                identifierList="exam_or_speciality"
                label="Tipo da solicitação"
                onChange={setChoice}
                optionsList={[{name: 'Cabelo', id: 1}, {name: 'Barba', id: 2}]}
              />
            </FormGroup>
          </SolicitationGrid>

          <Button type="submit">Agendar</Button>
        </Form>
      </>
    )
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Novo agendamento" align="center"/>

          {!selectedClient ? (
            <SelectUser setSelectedClient={setSelectedClient}/>
          ) : (
            <>
              {renderClientData()}

              {renderSchedulingChoice()}
            </>
          )}
        </>
      </Wrapper>
    </Content>
  );
}

export default Scheduling;
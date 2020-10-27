import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import Datalist from '../../components/Datalist';
import Input from '../../components/Input';

import Content from '../../components/Layout/Content';
import Header from '../../components/Layout/Header';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';
import { cpfMask, phoneMask } from '../../utils/Masks';
import SelectUser from './SelectUser';

import {
  Form, 
  FormGroup, 
  PatientGrid,
  SolicitationGrid } from './styles';

interface Patient {
  id: number;
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

const Scheduling: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient>();

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Novo agendamento" align="center"/>

          {!selectedPatient ? (
            <SelectUser setSelectedPatient={setSelectedPatient}/>
          ) : (
            <>
              <Header mt="20">
                <Title text="Dados do paciente" size="20" />
              </Header>

              <Form>
                <PatientGrid>
                  <FormGroup gridArea='NM'>
                    <Input 
                      type="text"
                      label="Nome"
                      identifier="nome"
                      value={selectedPatient.nomePaciente}
                      disabled={true}/>
                  </FormGroup>
                  <FormGroup gridArea='NC'>
                    <Input 
                      type="date"
                      label="Data de nascimento" 
                      identifier="dtNascimento"
                      value={selectedPatient.dataNascimento}
                      disabled={true}/>
                  </FormGroup>
                  <FormGroup gridArea='CP'>
                    <Input 
                      type="text"
                      label="CPF"
                      identifier="CPF"
                      value={selectedPatient.cpf}
                      mask={cpfMask}
                      disabled={true}/>
                  </FormGroup>
                  <FormGroup gridArea='SU'>
                    <Input 
                      type="text"
                      label="nSUS"
                      identifier="nSUS"
                      value={selectedPatient.carteiraSUS}
                      disabled={true}/>
                  </FormGroup>
                  <FormGroup gridArea='FN'>
                    <Input 
                      type="text"
                      label="Telefone"
                      identifier="telefone"
                      value={selectedPatient.telefone}
                      mask={phoneMask}
                      disabled={true}/>
                  </FormGroup>
                </PatientGrid>
              </Form>
            
              <Header>
                <Title text="Dados da solicitação" size="20" />
              </Header>

              <Form>
                <SolicitationGrid>
                  <FormGroup gridArea='TP'>
                    <Datalist 
                      label="Tipo da solicitação"
                      identifier="type"
                      identifierList="exam_or_speciality"
                      name="type"
                      optionsList={['Exame', 'Consulta']}
                    />
                  </FormGroup>
                  <FormGroup gridArea='OP'>
                    <Datalist 
                      label="Opções para agendamento"
                      identifier="options"
                      identifierList="scheduling_options"
                      name="options"
                      optionsList={['Mamografia', 'Eletrocardiograma', 'Ultrasonografia']}
                    />
                  </FormGroup>
                </SolicitationGrid>
              </Form>
            </>
          )}
        </>
      </Wrapper>
    </Content>
  );
}

export default Scheduling;
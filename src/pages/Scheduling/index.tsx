import React, { FormEvent, useEffect, useState } from 'react';
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
  PatientGrid,
  SolicitationGrid } from './styles';

interface ExamProps {
  id: number;
  nomeExame: string;
  autorizacao: boolean;
}

interface ExamArrayProps {
  content: ExamProps[];
}

interface SpecialtyArrayProps {
  id: number;
  nomeEspecialidade: string;
}

interface Patient {
  id: number;
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

interface OptionsList {
  name: string;
  id: number;
}

const SPECIALTY_URL = "filaEspera/filaConsulta"
const EXAM_URL = "filaEspera/filaExame"

const Scheduling: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient>();
  const [choice, setChoice] = useState<OptionsList>();
  const [optionSelected, setOptionSelected] = useState<OptionsList>();
  const [optionsList, setOptionsList] = useState<OptionsList[]>();

  useEffect(() => {
    async function loadAllExams() {
      const response = await api.get<ExamArrayProps>('exames');
      const allExams = response.data.content.map(exam => {
        return {name: exam.nomeExame, id: exam.id}
      })
      
      setOptionsList(allExams);
    }

    async function loadAllSpecialties() {
      const response = await api.get<SpecialtyArrayProps[]>('especialidades/todasEspecialidades');
      const allSpecialty = response.data.map(specialty => {
        return {name: specialty.nomeEspecialidade, id: specialty.id}
      })
      
      setOptionsList(allSpecialty);
    }

    if (choice?.id === 1) {
      loadAllExams();
    } else if (choice?.id === 2) {
      loadAllSpecialties();
    }
  }, [choice]);
  
  function handleScheduling(e: FormEvent) {
    e.preventDefault();

    if (choice?.id === 1) {
      api.post(EXAM_URL, {
        user_id: 1,
        paciente_id: selectedPatient?.id,
        exame_id: optionSelected?.id,
      }).then(() => {
        alert('Agendamento realizado com sucesso!')
        clearStates();
      }).catch(() => {
        alert('Erro no agendamento!')
      })
    } else if (choice?.id === 2) {
      api.post(SPECIALTY_URL, {
        user_id: 1,
        paciente_id: selectedPatient?.id,
        especialidade_id: optionSelected?.id,
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
    setSelectedPatient(undefined);
    setChoice(undefined);
    setOptionSelected(undefined);
    setOptionsList([]);
  }

  function renderPatientData() {
    return (
      <>
        <Header mt="20">
          <Title text="Paciente" size="20" />
        </Header>

        <Form>
          <PatientGrid>
            <FormGroup gridArea='NM'>
              <Input 
                type="text"
                label="Nome"
                identifier="nome"
                value={selectedPatient?.nomePaciente}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='NC'>
              <Input 
                type="date"
                label="Data de nascimento" 
                identifier="dtNascimento"
                value={selectedPatient?.dataNascimento}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='CP'>
              <Input 
                type="text"
                label="CPF"
                identifier="CPF"
                value={selectedPatient?.cpf}
                mask={cpfMask}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='SU'>
              <Input 
                type="text"
                label="nSUS"
                identifier="nSUS"
                value={selectedPatient?.carteiraSUS}
                disabled={true}/>
            </FormGroup>
            <FormGroup gridArea='FN'>
              <Input 
                type="text"
                label="Telefone"
                identifier="telefone"
                value={selectedPatient?.telefone}
                mask={phoneMask}
                disabled={true}/>
            </FormGroup>
          </PatientGrid>
        </Form>
      </>
    )
  }

  function renderSchedulingChoice() {
    return (
      <>
        <Header>
          <Title text="Solicitação" size="20" />
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
                optionsList={[{name: 'Exame', id: 1}, {name: 'Consulta', id: 2}]}
              />
            </FormGroup>
            <FormGroup gridArea='OP'>
              <Datalist 
                name="options"
                identifier="options"
                identifierList="scheduling_options"
                label="Opções para agendamento"
                onChange={setOptionSelected}
                optionsList={optionsList}
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

          {!selectedPatient ? (
            <SelectUser setSelectedPatient={setSelectedPatient}/>
          ) : (
            <>
              {renderPatientData()}

              {renderSchedulingChoice()}
            </>
          )}
        </>
      </Wrapper>
    </Content>
  );
}

export default Scheduling;
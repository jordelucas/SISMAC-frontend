import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import Filter from '../../components/Filter';
import Input from '../../components/Input';
import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';
import { cpfMask } from '../../utils/Masks';
import {
  Form, 
  FormGroup, 
  Grid } from './styles';

interface Patient {
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  dataNascimento: string;
}

const Scheduling: React.FC = () => {
  const [filteredPatient, setFilteredPatient] = useState<Patient>();
  const [option, setOption] = useState<string>('')

  function handleFilteredPatients(filteredPatients: Array<Patient>) {
    const {
      nomePaciente,
      carteiraSUS,
      cpf,
      dataNascimento,
    } = filteredPatients[0];
    
    const patient = {
      nomePaciente,
      carteiraSUS,
      cpf,
      dataNascimento,
    }

    console.log(patient)
    setFilteredPatient(patient);
  }

  function selectedOption(selectedOptionText: string) {
    setOption(selectedOptionText);
  }

  const options = {
    cpf: true,
    sus: true,
    nome: false,
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Novo agendamento" align="center"/>

          <label style={{marginTop: 20, marginBottom: 5}}>Informe o paciente</label>
          <Filter
            patientsFiltered={handleFilteredPatients}
            options={options}
            selectedOptionInFilter={selectedOption}
          />

          {filteredPatient && (
            <Form>
              <Grid>
                <FormGroup gridArea='NM'>
                  <Input 
                    type="text"
                    label="Nome"
                    identifier="nome"
                    value={filteredPatient.nomePaciente}
                    disabled={true}/>
                </FormGroup>
                <FormGroup gridArea='NC'>
                  <Input 
                    type="date"
                    label="Data de nascimento" 
                    identifier="dtNascimento"
                    value={filteredPatient.dataNascimento}
                    disabled={true}/>
                </FormGroup>

                {option === 'CPF' && (
                  <FormGroup gridArea='NU'>
                    <Input 
                      type="text"
                      label="nSUS"
                      identifier="nSUS"
                      value={filteredPatient.carteiraSUS}
                      disabled={true}/>
                  </FormGroup>
                )}

                {option === 'SUS' && (
                  <FormGroup gridArea='NU'>
                    <Input 
                      type="text"
                      label="CPF"
                      identifier="CPF"
                      value={filteredPatient.cpf}
                      mask={cpfMask}
                      disabled={true}/>
                  </FormGroup>
                )}
              </Grid>

              {<Button  >Continuar agendamento</Button>}
            </Form>
          )}
        </>
      </Wrapper>
    </Content>
  );
}

export default Scheduling;
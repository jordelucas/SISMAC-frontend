import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import Filter from '../../../components/Filter';
import Input from '../../../components/Input';
import { cpfMask } from '../../../utils/Masks';

import {
  Form, 
  FormGroup, 
  Grid,
  Typography } from './styles';

interface Patient {
  id: number;
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  dataNascimento: string;
}

interface SelectUserProps {
  setSelectedPatient: Function;
}

const SelectUser: React.FC<SelectUserProps> = ({ setSelectedPatient }) => {
  const [filteredPatient, setFilteredPatient] = useState<Patient>();
  const [option, setOption] = useState<string>('')

  function handleFilteredPatients(filteredPatients: Array<Patient>) {
    const {
      id,
      nomePaciente,
      carteiraSUS,
      cpf,
      dataNascimento,
    } = filteredPatients[0];
    
    const patient = {
      id,
      nomePaciente,
      carteiraSUS,
      cpf,
      dataNascimento,
    }

    setFilteredPatient(patient);
  }

  function selectedOption(selectedOptionText: string) {
    setOption(selectedOptionText);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setSelectedPatient(filteredPatient);
  }

  const options = {
    cpf: true,
    sus: true,
    nome: false,
  }
  
  return (
    <>
      <Typography>Informes o paciente</Typography>
      <Filter
        patientsFiltered={handleFilteredPatients}
        options={options}
        selectedOptionInFilter={selectedOption}
      />

      {filteredPatient && (
        <>
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

            {<Button onClick={handleClick}>Continuar</Button>}
          </Form>
        </>
      )}
    </>
  );
}

export default SelectUser;
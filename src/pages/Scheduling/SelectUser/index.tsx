import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import Filter from '../../../components/Filter';
import Input from '../../../components/Input';
import { Patient } from '../../../Models/Patient';
import { cpfMask } from '../../../utils/Masks';

import {
  Form, 
  FormGroup, 
  Grid,
  Typography } from './styles';
interface SelectUserProps {
  setSelectedPatient: Function;
}

const SelectUser: React.FC<SelectUserProps> = ({ setSelectedPatient }) => {
  const [filteredPatient, setFilteredPatient] = useState<Patient>();
  const [option, setOption] = useState<string>('')

  function handleFilteredPatients(filteredPatients: Array<Patient>) {
    setFilteredPatient(filteredPatients[0]);
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
                  value={filteredPatient.nome}
                  disabled={true}/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <Input 
                  type="date"
                  label="Data de nascimento" 
                  identifier="dtNascimento"
                  value={filteredPatient.dtNascimento.split('T')[0]}
                  disabled={true}/>
              </FormGroup>

              {option === 'CPF' && (
                <FormGroup gridArea='NU'>
                  <Input 
                    type="text"
                    label="nSUS"
                    identifier="nSUS"
                    value={filteredPatient.nsus}
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
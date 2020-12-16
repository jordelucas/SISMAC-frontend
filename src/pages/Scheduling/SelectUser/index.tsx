import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import Filter from '../../../components/Filter';
import Input from '../../../components/Input';

import {
  Form, 
  FormGroup, 
  Grid,
  Typography } from './styles';

interface Patient {
  id: number;
  nomeCliente: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

interface SelectUserProps {
  setSelectedClient: Function;
}

const SelectUser: React.FC<SelectUserProps> = ({ setSelectedClient }) => {
  const [filteredPatient, setFilteredPatient] = useState<Patient>();
  const [option, setOption] = useState<string>('')

  function handleFilteredPatients(filteredPatients: Array<Patient>) {
    const {
      id,
      nomeCliente,
      cpf,
      dataNascimento,
      telefone,
    } = filteredPatients[0];
    
    const client = {
      id,
      nomeCliente,
      cpf,
      dataNascimento,
      telefone,
    }

    setFilteredPatient(client);
  }

  function selectedOption(selectedOptionText: string) {
    console.log(option);
    setOption(selectedOptionText);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setSelectedClient(filteredPatient);
  }

  const options = {
    cpf: true,
    nome: false,
  }
  
  return (
    <>
      <Typography>Informes o cliente</Typography>
      <Filter
        clientsFiltered={handleFilteredPatients}
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
                  value={filteredPatient.nomeCliente}
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
            </Grid>

            {<Button onClick={handleClick}>Continuar</Button>}
          </Form>
        </>
      )}
    </>
  );
}

export default SelectUser;
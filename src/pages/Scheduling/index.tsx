import React, { useState } from 'react';
import BackButton from '../../components/BackButton';

import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';
import SelectUser from './SelectUser';

interface Patient {
  id: number;
  nomePaciente: string;
  carteiraSUS: string;
  cpf: string;
  dataNascimento: string;
}

const Scheduling: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient>();

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Novo agendamento" align="center"/>

          {!selectedPatient && (
            <SelectUser setSelectedPatient={setSelectedPatient}/>
          )}
        </>
      </Wrapper>
    </Content>
  );
}

export default Scheduling;
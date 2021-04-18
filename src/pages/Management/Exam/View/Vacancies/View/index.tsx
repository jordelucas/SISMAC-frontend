import React, { useEffect, useState } from 'react';

import Content from '../../../../../../components/Layout/Content';
import Wrapper from '../../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../../components/BackButton';
import Title from '../../../../../../components/Title';
import { useLocation } from 'react-router-dom';
import api from '../../../../../../services/api';
import { Table, TableBody, TableHead } from '../../../../../../components/Table';
import { PacienteAgendadoProps } from '../../../../../../Models/PacienteAgendado';
import { AgendamentosProps } from '../../../../../../Models/Agendamentos';

interface LocationState {
  vacancyID: number;
  examID: number;
}

const ViewPatientsExam: React.FC = () => {
  const { state: ids } = useLocation<LocationState>();
  const [nomeExame, setNomeExame] = useState('')
  const [dataExame, setDataExame] = useState('')
  const [pacientes, setPacientes] = useState<(PacienteAgendadoProps[])>([])
  
  useEffect(() => {
    api.get<AgendamentosProps>(
      `/vagasExames/${ids.vacancyID}/agendamentos`
    ).then((response) => {
      setNomeExame(response.data.nome);
      setDataExame(response.data.data.split('T')[0].split('-').reverse().join('/'));
      setPacientes(response.data.pacientesAgendados);
    }) 
  }, [ids.vacancyID]);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={`/management/exams`}/>
          
          <Title text={`Agendamentos - ${nomeExame} - ${dataExame}`} />

          <Table>
            <TableHead>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>SUS</th>
              </tr>
            </TableHead>
            <TableBody>
              {pacientes
                ? pacientes.map((solicitante: PacienteAgendadoProps) => {
                  return (
                    <tr key={solicitante.id}>
                      <td>{solicitante.paciente.nome}</td>
                      <td>{solicitante.paciente.cpf}</td>
                      <td>{solicitante.paciente.nsus}</td>
                    </tr>
                  )
                }) : null
              }
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default ViewPatientsExam;
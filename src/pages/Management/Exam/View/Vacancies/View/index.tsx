import React, { useEffect, useState } from 'react';

import Content from '../../../../../../components/Layout/Content';
import Wrapper from '../../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../../components/BackButton';
import Title from '../../../../../../components/Title';
import { useLocation } from 'react-router-dom';
import api from '../../../../../../services/api';
import { Table, TableBody, TableHead } from '../../../../../../components/Table';
import { Patient } from '../../../../../../Models/Patient';
import { ExamProps } from '../../../../../../Models/Exam';

interface LocationState {
  vacancyID: number;
  examID: number;
}

interface VacanciesProps {
  content: Details[];
}

interface Details {
  id: number,
  data: string,
  vagasOfertadas: number,
  vagasRestantes: number,
}

const ViewPatientsExam: React.FC = () => {
  const { state: ids } = useLocation<LocationState>();
  const [nomeExame, setNomeExame] = useState('')
  const [vacancy, setVacancy] = useState<Details>()
  const [idsSolicitantes, setIdsSolicitantes] = useState<number[]>([])
  const [solicitantes, setSolicitantes] = useState<(Patient | undefined)[]>([])
  
  useEffect(() => {
    api.get<ExamProps>(
      `exames/${ids.examID}`
    ).then((response) => {
      const { 
        nome: examNome,
       } = response.data;

       setNomeExame(examNome);
    }) 
  }, [ids.examID]);

  useEffect(() => {
    api.get(
      `agendamento/vaga/${ids.vacancyID}`
    ).then((response) => {
      setIdsSolicitantes(response.data);
    }) 
  }, [ids.vacancyID]);

  useEffect(() => {
    api.get<VacanciesProps>(
      `vagas?consulta=false&especialidade_id=${ids.examID}`
    ).then((response) => {
      const { 
        content: listVacancies
      } = response.data;

      const filteredVacancies = listVacancies.map(item => {
        return {
          ...item,
          data: item.data.split('-').reverse().join('/')
        }
      })

      const result = filteredVacancies.find(vacancy =>
        vacancy.id === ids.vacancyID
      );
      setVacancy(result)
    }) 
  }, [ids.examID, ids.vacancyID]);

  useEffect(() => {
    api.get<Patient[]>('pacientes').then((response) => {
      const patiensts = response.data;
      const solicitantes = idsSolicitantes.map(solicitante => patiensts.find(patient => patient.id === solicitante));
      
      setSolicitantes(solicitantes);
    });
  }, [idsSolicitantes]);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={`/management/exams`}/>
          
          <Title text={`Agendamentos - ${nomeExame} - ${vacancy?.data}`} />

          <Table>
            <TableHead>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>SUS</th>
              </tr>
            </TableHead>
            <TableBody>
              {solicitantes
                ? solicitantes.map((patient: Patient | undefined, index) => {
                  return (
                    <tr key={index}>
                      <td>{patient?.nome}</td>
                      <td>{patient?.cpf}</td>
                      <td>{patient?.nsus}</td>
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
import React, { useEffect, useState } from 'react';

import Content from '../../../../../components/Layout/Content';
import Wrapper from '../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../components/BackButton';
import Title from '../../../../../components/Title';
import { useLocation } from 'react-router-dom';
import api from '../../../../../services/api';
import { Table, TableBody, TableHead } from '../../../../../components/Table';

interface LocationState {
  vacancyID: number;
  examID: number;
}

interface ExamProps {
  nomeExame: string;
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


interface Patient {
  content: Array<DetailsPatientt>
}

interface DetailsPatientt {
  id: number;
  nomeCliente: string;
  cpf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  dataNascimento: string;
  telefone: string;
  numero: string;
}

const ViewPatientsHair: React.FC = () => {
  const { state: ids } = useLocation<LocationState>();
  const [vacancy, setVacancy] = useState<Details>()
  const [idsSolicitantes, setIdsSolicitantes] = useState<number[]>([])
  const [solicitantes, setSolicitantes] = useState<(DetailsPatientt | undefined)[]>([])
  
  useEffect(() => {
    api.get(
      `agendamento/vaga/${ids.vacancyID}`
    ).then((response) => {
      setIdsSolicitantes(response.data);
    }) 
  }, [ids.vacancyID]);

  useEffect(() => {
    api.get<VacanciesProps>(
      `vagas?barba=false&cabelo=true`
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
    api.get<Patient>('clientes').then((response) => {
      const patiensts = response.data.content;
      const solicitantes = idsSolicitantes.map(solicitante => patiensts.find(patient => patient.id === solicitante));
      
      setSolicitantes(solicitantes);
    });
  }, [idsSolicitantes]);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={`/management/hair`}/>
          
          <Title text={`Agendamentos - CABELO - ${vacancy?.data}`} />

          <Table>
            <TableHead>
              <tr>
                <th>NOME</th>
                <th>TELEFONE</th>
              </tr>
            </TableHead>
            <TableBody>
              {solicitantes
                ? solicitantes.map((patient: DetailsPatientt | undefined, index) => {
                  return (
                    <tr key={index}>
                      <td>{patient?.nomeCliente}</td>
                      <td>{patient?.telefone}</td>
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

export default ViewPatientsHair;
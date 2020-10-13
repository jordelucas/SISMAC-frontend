import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/BackButton';
import Content from '../../../../components/Layout/Content';
import Header from '../../../../components/Layout/Header';
import Wrapper from '../../../../components/Layout/Wrapper';
import { Table, TableBody, TableHead } from '../../../../components/Table';
import Title from '../../../../components/Title';
import api from '../../../../services/api';
import { ArrowForwardIcon } from './styles';

interface ExamsProps {
  id: number;
  nomeExame: string
}

const Exam: React.FC = () => {
  const [exams, setExams] = useState<ExamsProps[]>()

  useEffect(() => {
    async function loadAllExams() {
      const response = await api.get('exames');
      setExams(response.data.content)
    }

    loadAllExams();
  }, []);

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management"/>

          <Header>
            <Title text="Gerenciamento de exames" />
            <Link to="exam/new">Adicionar exame</Link>
          </Header>

          <Table>
            <TableHead>
              <tr>
                <th>Exames</th>
                <th></th>
              </tr>
            </TableHead>
            <TableBody>
              {exams?.map(exam => {
                return (
                  <tr key={exam.id}>
                    <td style={{ width: '100%' }}>
                      {exam.nomeExame}
                    </td>
                    <td>
                      <Link to='/'>
                        <ArrowForwardIcon />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </TableBody>
          </Table>
        </>
      </Wrapper>
    </Content>
  );
}

export default Exam;
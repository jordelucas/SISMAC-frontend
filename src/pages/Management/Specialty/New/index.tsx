import React from 'react';

import Content from '../../../../components/Layout/Content';
import Wrapper from '../../../../components/Layout/Wrapper';
import BackButton from '../../../../components/BackButton';
import Title from '../../../../components/Title';
import { Button } from '../../../../components/Button';

import { 
  Form,
  Grid } from './styles';

const NewSpecialty: React.FC = () => {

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/management/specialty"/>
          <Title text="Nova especialidade" />

          <Form>
            <Grid></Grid>

            <Button>Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewSpecialty;
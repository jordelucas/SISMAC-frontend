import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';

import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';

import { List, Item, Quantity } from './styles';

const Management: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Gerenciamento de solicitações" align="center"/>

          <List>
            <Item>
              <Link to="/specialty">
                <span>Consultas</span>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <span>Exames</span>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <span>
                  Autorizações 
                  <Quantity>45</Quantity>
                </span>
              </Link>
            </Item>
          </List>
        </>
      </Wrapper>
    </Content>
  );
}

export default Management;
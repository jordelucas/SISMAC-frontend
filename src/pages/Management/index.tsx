import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';

import Content from '../../components/Layout/Content';
import Wrapper from '../../components/Layout/Wrapper';
import Title from '../../components/Title';

import { List, Item } from './styles';

const Management: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/"/>
          <Title text="Gerenciamento de solicitações" align="center"/>

          <List>
            <Item>
              <Link to="/management/beard">
                <span>Barba</span>
              </Link>
            </Item>
            <Item>
              <Link to="/management/hair">
                <span>Cabelo</span>
              </Link>
            </Item>
          </List>
        </>
      </Wrapper>
    </Content>
  );
}

export default Management;
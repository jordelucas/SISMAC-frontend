import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
}

const StyledTitle = styled.h1`
  font-size: 28px;
  color: #6b6b6b;
`

export default Title;
import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface TitleProps {
  text: string;
  align?: string;
}

interface StyledTitleProps {
  align?: string;
}

const Title: React.FC<TitleProps> = ({ text, align }) => {
  return (
    <StyledTitle align={align}>{text}</StyledTitle>
  );
}

const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: 28px;
  text-align: ${props => props.align ? props.align : ''};
  color: #6b6b6b;
`

export default Title;
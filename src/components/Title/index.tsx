import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface TitleProps {
  text: string;
  align?: string;
  size?: string;
}

interface StyledTitleProps {
  align?: string;
  size?: string;
}

const Title: React.FC<TitleProps> = ({ text, align, size }) => {
  return (
    <StyledTitle align={align} size={size}>{text}</StyledTitle>
  );
}

const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: ${props => props.size ? `${props.size}rem` : '2.8rem'};
  text-align: ${props => props.align ? props.align : ''};
  color: #6b6b6b;
`

export default Title;
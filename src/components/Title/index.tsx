import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface TitleProps {
  text: string;
  align?: string;
  size?: string;
  uppercase?: boolean;
}

interface StyledTitleProps {
  align?: string;
  size?: string;
  uppercase?: boolean;
}

const Title: React.FC<TitleProps> = ({ text, align, size, uppercase }) => {
  return (
    <StyledTitle align={align} size={size} uppercase={uppercase}>{text}</StyledTitle>
  );
}

const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: ${props => props.size ? `${props.size}rem` : '2.8rem'};
  text-align: ${props => props.align ? props.align : ''};
  text-transform: ${props => props.uppercase ? 'uppercase' : ''};
  color: #6b6b6b;
`

export default Title;
import React from 'react';
import styled from 'styled-components'

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <StyleButton>{text}</StyleButton>
  );
}

const StyleButton = styled.button`
  color: #fff;
  font-size: 12px;
  background: #019637;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  opacity: 1;
  transition: opacity 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export default Button;
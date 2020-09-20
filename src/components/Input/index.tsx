import React from 'react';
import styled from 'styled-components'

interface InputProps {
  type: string;
  label: string;
  identifier: string;
  value: string;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({ type, label, identifier, value, disabled }) => {
  return (
    <>
      <StyledLabel htmlFor={identifier}>{label}</StyledLabel>
      <StyledInput type={type} name={label} value={value} id={identifier} disabled={disabled}/>
    </>
  );
}

const StyledLabel = styled.label`
  font-size: 12px;
  position: absolute;
  top: 8px;
  left: 10px;
  color: #6b6b6b;
`

const StyledInput = styled.input`
  color: #103a53;
  text-transform: uppercase;
  border: 1px solid #E5E6F0;
  border-radius: 5px;
  padding: 28px 10px 10px 10px;
  transition: border-color 0.3s;
    
  &:hover, &:focus {
    border-color: #103a53;
  }

  &:disabled {
    border: none;
    background: transparent;
  }
`

export default Input;
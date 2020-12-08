import React from 'react';
import styled from 'styled-components'
import { ToggleOff, ToggleOn } from '@material-ui/icons/';

interface InputProps {
  type: string;
  label: string;
  identifier: string;
  value?: string;
  checked?: boolean;
  disabled: boolean;
  mask?: Function;
  onChange?: Function;
}

const Input: React.FC<InputProps> = ({ 
  type, 
  label, 
  identifier, 
  value, 
  disabled, 
  mask,
  onChange,
  checked,
}) => {
  
  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    if(onChange){
      if (mask) {
        onChange(mask(e.target.value))
      } else {
        onChange(e.target.value)
      }
    }
  }

  return (
    <>
      {(type === 'text' || type === 'date' || type === 'number') && (
        <>
          <StyledLabel htmlFor={identifier}>{label}</StyledLabel>
          <StyledInput 
            id={identifier} 
            type={type} 
            name={label} 
            value={value} 
            onChange={handleChangeText}
            disabled={disabled}
          />
        </>
      )}

      {type === 'radio' && (
        <>
          <StyledLabel htmlFor={identifier}>{label}</StyledLabel>
          {checked 
            ? <ToggleOn onClick={() => (!disabled && onChange) && onChange(!checked)} /> 
            : <ToggleOff onClick={() => (!disabled && onChange) && onChange(!checked)} />
          }
        </>
      )}
    </>
  );
}

const StyledLabel = styled.label`
  font-size: 1.2rem;
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  color: #6b6b6b;
`

const StyledInput = styled.input`
  color: #103a53;
  text-transform: uppercase;
  border: 1px solid #E5E6F0;
  border-radius: 5px;
  padding: 2.8rem 1rem 1rem 1rem;
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
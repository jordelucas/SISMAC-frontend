import React from 'react';
import styled from 'styled-components'

interface DatalistProps {
  label: string;
  identifier: string;
  identifierList: string;
  name: string;
  optionsList: string[];
  // checked?: boolean;
  // disabled: boolean;
  // mask?: Function;
  // onChange?: Function;
}

const Datalist: React.FC<DatalistProps> = ({ 
  label,
  identifier,
  identifierList,
  name,
  optionsList,
}) => {
  
  // function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
  //   if(onChange){
  //     if (mask) {
  //       onChange(mask(e.target.value))
  //     } else {
  //       onChange(e.target.value)
  //     }
  //   }
  // }

  return (
    <>
      <StyledLabel htmlFor={identifier}>{label}</StyledLabel>
      <StyledInput 
        id={identifier} 
        name={name} 
        list={identifierList}
      />
      <datalist id={identifierList}>
        {optionsList.map(option => (
          <option id={option} value={option}/>
        ))}
      </datalist>
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

export default Datalist;
import React, {useState} from 'react';
import styled from 'styled-components'

interface OptionsList {
  name: string;
  id: number;
}

interface DatalistProps {
  label: string;
  identifier: string;
  identifierList: string;
  name: string;
  optionsList: OptionsList[] | undefined;
  onChange: Function;
}

const Datalist: React.FC<DatalistProps> = ({ 
  label,
  identifier,
  identifierList,
  name,
  optionsList,
  onChange,
}) => {
  const [optionSelected, setOptionSelected] = useState('')
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionSelected(e.target.value);
  }

  function handleExit() {
    const result = optionsList?.filter(option => option.name === optionSelected);
    if (result && result.length > 0) {
      onChange(result[0]);
    }
  }

  return (
    <>
      <StyledLabel htmlFor={identifier}>{label}</StyledLabel>
      <StyledInput 
        id={identifier} 
        name={name} 
        list={identifierList}
        onChange={handleChange}
        onBlur={handleExit}
        value={optionSelected}
      />
      <datalist id={identifierList}>
        {optionsList?.map((option, index) => (
          <option key={index} id={`${option.id}`} value={option.name} />
        ))}
      </datalist>
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

export default Datalist;
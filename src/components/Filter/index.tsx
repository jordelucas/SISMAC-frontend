import React, { useState } from 'react';

import { 
  Container,
  Filtro,
  ArrowDropDownIcon,
  CloseIcon,
  DropdownFilter,
  Option } from './styles';

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  function openDropdown() {
    setIsOpen(prevState => !prevState)
  }

  function addFilter (value: string) {
    setSelectedOption(value)
    setIsOpen(prevState => !prevState)
  }
  
  return (
    <Container>
      <Filtro>
        {selectedOption === '' && 
          <button onClick={openDropdown}>
            Pesquisar por <ArrowDropDownIcon />
          </button>
        }

        {selectedOption !== '' && 
          <button>
            {selectedOption} <CloseIcon onClick={() => addFilter('')} />
          </button>
        }
        
        <DropdownFilter isOpen={isOpen}>
          <Option onClick={() => addFilter("Nome")}>Nome</Option>
          <Option onClick={() => addFilter("CPF")}>CPF</Option>
          <Option onClick={() => addFilter("SUS")}>SUS</Option>
        </DropdownFilter>
      </Filtro>

      {selectedOption !== '' &&
        <input type="text" name="search" id="search"/>
      }
    </Container>
  );
}

export default Filter;
import React, { useState } from 'react';
import api from '../../services/api';

import { 
  Container,
  Search,
  ArrowDropDownIcon,
  CloseIcon,
  DropdownFilter,
  Option,
  ButtonSearch,
  SearchIcon } from './styles';

interface FilterProps {
  patientsFiltered: Function;
}

const Filter: React.FC<FilterProps> = ({ patientsFiltered }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [textFilter, setTextFilter] = useState('');

  function openDropdown() {
    setIsOpen(prevState => !prevState)
  }

  function addFilter (value: string) {
    setSelectedOption(value)
    setIsOpen(prevState => !prevState)
    setTextFilter('')
  }

  async function handleFilter() {
    let data;
    switch (selectedOption){
      case 'Nome': 
        data = await filterByNome()
        break;
      case 'CPF': 
        data = await filterByCPF()
        break;
      case 'SUS': 
        data = await filterBySUS()
        break
    }

    patientsFiltered(data)
  }

  async function filterByNome(){
    const response = await api.get('pacientes', {
      params: {
        nome: textFilter
      }
    })

    return response.data.content;
  }

  async function filterByCPF(){
    const response = await api.get('pacientes', {
      params: {
        cpf: textFilter
      }
    })

    return response.data.content;
  }

  async function filterBySUS(){
    const response = await api.get('pacientes', {
      params: {
        carteiraSUS: textFilter
      }
    })

    return response.data.content;
  }
  
  return (
    <Container>
      <Search>
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
      </Search>

      {selectedOption !== '' &&
        <>
          <input 
            type="text" 
            name="search" 
            id="search" 
            value={textFilter} 
            onChange={(e) => {
              setTextFilter(e.target.value)
            }}/>
          <ButtonSearch onClick={handleFilter}><SearchIcon/></ButtonSearch>
        </>
      }
    </Container>
  );
}

export default Filter;
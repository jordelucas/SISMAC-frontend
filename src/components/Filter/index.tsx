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
  clientsFiltered: Function;
  selectedOptionInFilter?: Function;
  options: OptionsProps;
}

interface OptionsProps {
  cpf: boolean;
  nome: boolean;
}

const Filter: React.FC<FilterProps> = ({ clientsFiltered, options, selectedOptionInFilter }) => {
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
    }

    if (selectedOptionInFilter) {
      selectedOptionInFilter(selectedOption)
    }
    clientsFiltered(data);
  }

  async function filterByNome(){
    const response = await api.get('clientes', {
      params: {
        nome: textFilter
      }
    })

    return response.data.content;
  }

  async function filterByCPF(){
    const response = await api.get('clientes', {
      params: {
        cpf: textFilter
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
          {options.nome && (
            <Option onClick={() => addFilter("Nome")}>Nome</Option>
          )}
          {options.cpf && (
            <Option onClick={() => addFilter("CPF")}>CPF</Option>
          )}
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
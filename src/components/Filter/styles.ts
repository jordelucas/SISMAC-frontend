import styled, { css } from 'styled-components';

import { ArrowDropDown, Close, Search as SearchMaterialIcon } from '@material-ui/icons';

interface DropdownProps {
  isOpen: Boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  > input {
    height: 4.2rem;
    width: 100%;
    max-width: 350px;

    padding: 0 1rem;
    background: #fafafa;
    border: 1px solid #6b6b6b;
    border-radius: 0px 5px 5px 0;
  }
`

export const Search = styled.div`
  position: relative;
  border: 1px solid #000;

  button {
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    line-height: 4rem;
    padding: 0 2rem;
    cursor: pointer;

    background: #fff;
    border: none;
    outline: none;
  }
`

const IconCSS = css`
  width: 2/2rem;
  height: 2.2rem;
  border-radius: 50%;
`

export const ArrowDropDownIcon = styled(ArrowDropDown)`${IconCSS}`;

export const CloseIcon = styled(Close)`
  ${IconCSS}

  margin-left: 1rem;
  
  opacity: 1;
  transition: background 0.3s, opacity 0.3s;

  &:hover {
    background: #d5d5d5;
    opacity: 0.7;
  }
`;

export const DropdownFilter = styled.ul<DropdownProps>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  
  width: 100%;
  top: 4.5rem;
  position: absolute;
  
  border: 1px solid #6b6b6b;
  border-radius: 5px;
  list-style: none;
  
  background: #fff;
  z-index: 100;
`

export const Option = styled.li`
  line-height: 4rem;
  font-size: 1.4rem;
  padding-left: 2rem;
  opacity: 1;
  transition: background 0.3s, opacity 0.3s;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    opacity: 0.7;
  }
`

export const ButtonSearch = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 1.5rem;
  background: #fafafa;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  opacity: 1;
  transition: background 0.3s, opacity 0.3s;

  &:hover {
    background: #E5E6F0;
    opacity: 0.7;
  }
`

export const SearchIcon = styled(SearchMaterialIcon)`${IconCSS}`

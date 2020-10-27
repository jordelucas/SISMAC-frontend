import styled, { css } from 'styled-components';

import { ArrowDropDown, Close, Search as SearchMaterialIcon } from '@material-ui/icons';

interface DropdownProps {
  isOpen: Boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  > input {
    height: 42px;
    width: 100%;
    max-width: 350px;

    padding: 0px 10px;
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

    font-size: 14px;
    line-height: 40px;
    padding: 0px 20px;
    cursor: pointer;

    background: #fff;
    border: none;
    outline: none;
  }
`

const IconCSS = css`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`

export const ArrowDropDownIcon = styled(ArrowDropDown)`${IconCSS}`;

export const CloseIcon = styled(Close)`
  ${IconCSS}

  margin-left: 10px;
  
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
  top: 45px;
  position: absolute;
  
  border: 1px solid #6b6b6b;
  border-radius: 5px;
  list-style: none;
  
  background: #fff;
  z-index: 100;
`

export const Option = styled.li`
  line-height: 40px;
  font-size: 14px;
  padding-left: 20px;
  opacity: 1;
  transition: background 0.3s, opacity 0.3s;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    opacity: 0.7;
  }
`

export const ButtonSearch = styled.button`
  width: 35px;
  height: 35px;
  margin-left: 15px;
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

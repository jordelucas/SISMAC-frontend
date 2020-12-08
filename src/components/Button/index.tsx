import styled from 'styled-components'

export const Button = styled.button`
  color: #fff;
  font-size: 1.2rem;
  background: #019637;
  padding: 1.5rem 2rem;
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
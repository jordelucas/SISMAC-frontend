import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;
  display: flex;
`

export const List = styled.ul`
  width: 768px;
  height: 220px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  list-style: none;

  @media(max-width: 768px) {
    height: 150px;
    width: 500px;
  }

  @media(max-width: 500px) {
    width: 250px;
    height: initial;

    display: flex;
    flex-direction: column;

    margin: 3.2rem auto;
  }
`

export const Item = styled.li` 
  display: flex;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 2rem;
    color: #6b6b6b;
    background: #fff;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
    text-decoration: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }

    > svg {
      font-size: 5rem;
    }
    
    span {
      text-transform: uppercase;
      margin-top: 2rem;
      font-size: 1.6rem;
      text-align: center;
    }
  }
`
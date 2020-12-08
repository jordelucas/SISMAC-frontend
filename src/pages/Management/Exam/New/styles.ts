import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// AU -> Autorização
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;
  
  > button {
    margin-top: 2rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-template-areas:
      'NM NM AU'
      'NV NV BT';
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  grid-area: ${props => props.gridArea};

  position: relative;

  > svg {
    width: 4rem!important;
    height: 4rem!important;
    margin-left: 1rem;
    fill: #103a53;
    cursor: pointer;
  }
`
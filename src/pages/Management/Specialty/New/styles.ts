import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
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
      'NM NM VZ'
      'NV NV BT';
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`
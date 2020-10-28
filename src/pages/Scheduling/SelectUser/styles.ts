import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// NC -> Data de Nascimento
// NU -> CPF ou SUS
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 25px 0;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'NM NC NU'
  'NV NV BT';
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`

export const Typography = styled.label`
  color: #6b6b6b;
  font-size: 14px;
  font-weight: bold;
  margin: 20px 0 5px 0;
`
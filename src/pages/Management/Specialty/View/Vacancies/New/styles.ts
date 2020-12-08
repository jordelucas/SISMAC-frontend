import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// DT -> Data
// VG -> Quantidade de vagas
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'DT VG ES'
  'LC VZ VZ'
  'NV NV BT';
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`
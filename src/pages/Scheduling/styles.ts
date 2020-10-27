import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// NC -> Data de Nascimento
// CP -> CPF
// SU -> SUS
// FN -> Telefone
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 25px;
`;

export const PatientGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'NM NM NC'
  'CP SU FN'
  'NV NV BT';
`;

export const SolicitationGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'TP OP NV';
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`
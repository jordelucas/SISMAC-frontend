import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// NC -> Data de Nascimento
// CP -> CPF
// SU -> SUS
// FN -> Telefone
// CD -> Cidade
// BR -> Bairro
// NU -> Número
// CO -> Complemento 
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'NM NM NC'
  'CP SU FN'
  'CD BR NU'
  'CO VZ VZ'
  'NV NV BT';
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`
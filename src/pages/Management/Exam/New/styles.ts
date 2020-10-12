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
  margin: 25px;
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

  > label {
    font-size: 12px;
    position: absolute;
    top: 8px;
    left: 12px;
    color: #6b6b6b;
  }
  
  > input {
    color: #103a53;
    text-transform: uppercase;
    border: 1px solid #E5E6F0;
    border-radius: 5px;
    padding: 28px 10px 10px 10px;
    transition: border-color 0.3s;
     
    &:hover, &:focus {
      border-color: #103a53;
    }
  }
`
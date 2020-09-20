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

export const Header = styled.header`  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    color: #103a53;
    font-size: 12px;
    background: #fff;
    padding: 15px 20px;
    border: none;
    border: 1px solid #103a53;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
    cursor: pointer;

    &:hover, &:disabled {
      color: #fff;
      background: #103a53;
    }

    &:disabled {
      opacity: 0.7;
      cursor: no-drop;
    }

  }
`;

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
`
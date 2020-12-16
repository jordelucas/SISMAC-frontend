import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// NC -> Data de Nascimento
// CP -> CPF
// FN -> Telefone
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;
`;

export const ClientGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    grid-template-areas:
      'NM NC VZ'
      'CP FN VZ'
      'NV NV BT';
  }
`;

export const SolicitationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    grid-template-areas:
      'TP VZ VZ'
      'VC VC VC';
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`

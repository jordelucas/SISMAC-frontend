import styled, { css } from 'styled-components';
import { ArrowForward } from '@material-ui/icons';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// AU -> Autorização
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'NM NM AU'
  'NV NV BT';
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

const IconCSS = css`
  width: 2.2rem;
  height: 2.2rem;
`

export const ArrowForwardIcon = styled(ArrowForward)`
  ${IconCSS}
  color: #000;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
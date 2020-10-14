import styled, { css } from 'styled-components';
import { ArrowForward } from '@material-ui/icons';

interface FormGroupProps {
  gridArea: string;
}
// NM -> Nome
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 25px;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

grid-template-areas:
  'NM NM VZ'
  'NV NV BT';
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`

const IconCSS = css`
  width: 22px;
  height: 22px;
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
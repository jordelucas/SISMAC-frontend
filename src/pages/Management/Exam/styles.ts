import styled, { css } from 'styled-components';

import { ArrowForward } from '@material-ui/icons';

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
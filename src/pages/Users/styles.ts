import styled, { css } from 'styled-components';

import { ArrowForward } from '@material-ui/icons';

export const Header = styled.header`  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: #fff;
    font-size: 12px;
    background: #019637;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

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
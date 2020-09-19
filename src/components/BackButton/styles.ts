import styled, { css } from 'styled-components';

import { ArrowBack } from '@material-ui/icons';

export const Container = styled.div`  
  margin-bottom: 35px;
  
  a {
    display: flex;
    align-items: center;
    
    color: #103a53;
    text-decoration: none;
    
    > span {
      margin-left: 10px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const IconCSS = css`
  width: 25px!important;
  height: 25px!important;
`

export const ArrowBackIcon = styled(ArrowBack)`${IconCSS}`;

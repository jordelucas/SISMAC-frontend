import styled, { css } from 'styled-components';

import { ArrowBack } from '@material-ui/icons';

export const Container = styled.div`  
  margin-bottom: 3.5rem;
  
  a {
    display: flex;
    align-items: center;
    
    color: #103a53;
    text-decoration: none;
    
    > span {
      margin-left: 1rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const IconCSS = css`
  width: 2.5rem!important;
  height: 2.5rem!important;
`

export const ArrowBackIcon = styled(ArrowBack)`${IconCSS}`;

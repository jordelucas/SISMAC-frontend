import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  children: JSX.Element
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export const StyledContainer = styled.div`
  width: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #fff;

  @media(min-width: 500px) {
    margin: 5rem auto;
    max-width: 90vw;
  }

  @media(min-width: 1000px) {
    max-width: 992px;
  }
`;

export default Wrapper;
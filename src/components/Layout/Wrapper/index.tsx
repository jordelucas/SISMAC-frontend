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
  max-width: 992px;
  margin: 50px auto;
  padding: 30px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #fff;
`;

export default Wrapper;
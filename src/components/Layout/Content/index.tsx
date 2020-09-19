import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  children: JSX.Element
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export const StyledContainer = styled.main`
  flex: 1;
  display: flex;
`;

export default Content;
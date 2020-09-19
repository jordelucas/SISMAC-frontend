import React from 'react';

import { Link } from 'react-router-dom';

import { Container, ArrowBackIcon } from './styles';

interface BackButtonProps {
  link: string;
}
const BackButton: React.FC<BackButtonProps> = ({ link }) => {
  return (
    <Container>
      <Link to={link}> 
        <ArrowBackIcon />
        <span>voltar</span>
      </Link>
    </Container>
  );
}

export default BackButton;
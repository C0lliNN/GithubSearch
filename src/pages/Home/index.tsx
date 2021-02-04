import React from 'react';
import Button from '../../components/Button';
import { Container, LogoContainer, FormContainer } from './styles';
import logov from '../../assets/logov.svg';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <img src={logov} alt="Github Search" />
      </LogoContainer>
      <FormContainer>
        <input type="text" />
        <Button>Teste</Button>
      </FormContainer>
    </Container>
  );
}

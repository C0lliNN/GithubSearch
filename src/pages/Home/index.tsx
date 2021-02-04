import React from 'react';
import Button from '../../components/Button';
import { Container, LogoContainer, FormContainer } from './styles';
import logov from '../../assets/logov.svg';
import Input from '../../components/Input';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <img src={logov} alt="Github Search" />
      </LogoContainer>
      <FormContainer>
        <Input type="text" placeholder="Enter the username" />
        <Button>Search</Button>
      </FormContainer>
    </Container>
  );
}

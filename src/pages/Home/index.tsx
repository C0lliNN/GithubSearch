import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Slide, Fade } from 'react-awesome-reveal';

import Button from '../../components/Button';
import { Container, LogoContainer, FormContainer } from './styles';
import logov from '../../assets/logov.svg';
import Input from '../../components/Input';

export default function Home() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  function handleUsernameChange(e: ChangeEvent) {
    const el = e.target as HTMLInputElement;
    setUsername(el.value);
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    history.push(`/users/${username}`);
  }

  return (
    <Container>
      <Slide direction="down" duration={500}>
        <Fade>
          <LogoContainer>
            <img src={logov} alt="Github Search" />
          </LogoContainer>
        </Fade>
      </Slide>
      <Slide direction="up" duration={500}>
        <Fade>
          <FormContainer onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Enter the username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Button>Search</Button>
          </FormContainer>
        </Fade>
      </Slide>
    </Container>
  );
}

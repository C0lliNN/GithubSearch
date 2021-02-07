import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { BackButton, Container } from './styles';
import logoh from '../../assets/logoh.svg';
import back from '../../assets/back.svg';

export default function Header() {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Link to="/">
        <img src={logoh} alt="Github Search" />
      </Link>
      <BackButton onClick={handleBack}>
        <img src={back} alt="Back" width="35" />
      </BackButton>
    </Container>
  );
}

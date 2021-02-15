import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Container, Image, Title } from './styles';
import notFounded from '../../assets/no-found.png';

export default function NotFounded() {
  return (
    <Container>
      <Fade duration={500}>
        <Slide direction="down" duration={500}>
          <Title>User Not Founded!</Title>
          <Image src={notFounded} alt="" />
        </Slide>
      </Fade>
    </Container>
  );
}

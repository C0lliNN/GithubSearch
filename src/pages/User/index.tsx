import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Fade, Slide } from 'react-awesome-reveal';
import { getUserData } from '../../services/api';
import {
  getRepositoriesFromResponse,
  getStarsCountFromResponse,
  getUserFromResponse,
} from './utility';
import Header from '../../components/Header';
import { Container } from './styles';
import UserInfo from '../../components/UserInfo';

interface Params {
  username: string;
}

export default function User() {
  const { username } = useParams<Params>();

  const { data: responses } = useQuery(['getUserData', username], () =>
    getUserData(username),
  );

  if (!responses) {
    return <div>Loading...</div>;
  }

  const [
    userResponse,
    repositoriesResponse,
    starredResponse,
  ] = responses as Array<AxiosResponse>;

  const user = getUserFromResponse(userResponse);
  const repositories = getRepositoriesFromResponse(repositoriesResponse);
  const starsCount = getStarsCountFromResponse(starredResponse);

  console.log(repositories);

  return (
    <Container>
      <Fade duration={500}>
        <Slide direction="down" duration={500}>
          <Header />
          <UserInfo user={user} startsCount={starsCount} />
        </Slide>
      </Fade>
    </Container>
  );
}

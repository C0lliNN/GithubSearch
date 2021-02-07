import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getUserData } from '../../services/api';
import {
  getRepositoriesFromResponse,
  getStarsCountFromResponse,
  getUserFromResponse,
} from './utility';
import Header from '../../components/Header';
import { Container } from './styles';

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

  console.log(user);
  console.log(repositories);
  console.log(starsCount);

  return (
    <Container>
      <Header />
      <h2>User Details</h2>
      <h2>Teste</h2>
    </Container>
  );
}

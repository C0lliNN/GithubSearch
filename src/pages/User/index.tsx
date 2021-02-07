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

interface Params {
  username: string;
}

export default function User() {
  const { username } = useParams<Params>();

  const { data: responses } = useQuery(['getUserData', username], () =>
    getUserData(username),
  );

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
    <section>
      <h2>User Details</h2>
      <h2>Teste</h2>
    </section>
  );
}

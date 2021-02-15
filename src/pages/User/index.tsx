import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getUserData } from '../../services/api';
import {
  filterRepositories,
  getRepositoriesFromResponse,
  getStarsCountFromResponse,
  getUserFromResponse,
  sortRepositories,
} from './utility';
import Header from '../../components/Header';
import { Container, Repositories } from './styles';
import UserInfo from '../../components/UserInfo';
import Spinner from '../../components/Spinner';
import Repository from '../../components/Repository';
import NotFounded from '../../components/NotFounded';

interface Params {
  username: string;
}

export default function User() {
  const { username } = useParams<Params>();

  const { data: responses, isLoading, error } = useQuery(
    ['getUserData', username],
    () => getUserData(username),
    { retry: false, refetchOnWindowFocus: false },
  );

  if (isLoading) {
    return <Spinner style={{ alignSelf: 'center' }} />;
  }

  if (error) {
    return (
      <Container>
        <Header />
        <NotFounded />
      </Container>
    );
  }

  const [
    userResponse,
    repositoriesResponse,
    starredResponse,
  ] = responses as Array<AxiosResponse>;

  const user = getUserFromResponse(userResponse);
  const repositories = getRepositoriesFromResponse(repositoriesResponse);
  const starsCount = getStarsCountFromResponse(starredResponse);

  return (
    <Container>
      <Header />
      <UserInfo user={user} startsCount={starsCount} />
      <Repositories>
        {repositories
          .filter(filterRepositories)
          .sort(sortRepositories)
          .map((repository) => (
            <Repository key={repository.name} repository={repository} />
          ))}
      </Repositories>
    </Container>
  );
}

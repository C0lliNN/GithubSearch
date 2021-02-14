import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Fade, Slide } from 'react-awesome-reveal';
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

interface Params {
  username: string;
}

export default function User() {
  const { username } = useParams<Params>();

  const { data: responses, isLoading } = useQuery(
    ['getUserData', username],
    () => getUserData(username),
  );

  if (isLoading) {
    return <Spinner style={{ alignSelf: 'center' }} />;
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
      <Fade duration={500}>
        <Slide direction="down" duration={500}>
          <Header />
          <UserInfo user={user} startsCount={starsCount} />
        </Slide>
      </Fade>
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

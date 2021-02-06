import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getRepositories, getStarred, getUser } from '../../services/api';
import { parseLinkHeader } from '../../utility';

interface Params {
  username: string;
}

export default function User() {
  const { username } = useParams<Params>();

  const { data: userResponse } = useQuery(['getUser', username], () =>
    getUser(username),
  );
  const user = userResponse?.data;

  const { data: repositoriesResponse } = useQuery(
    ['getRepositories', username],
    () => getRepositories(username),
  );
  const repositories = repositoriesResponse?.data;

  const { data: starredResponse } = useQuery(['getStarred', username], () =>
    getStarred(username),
  );
  const parsedLinks = parseLinkHeader(starredResponse?.headers.link);

  let totalStars = '0';

  if (parsedLinks) {
    const params = new URLSearchParams(parsedLinks.last);
    totalStars = params.get('page') as string;
  }

  console.log(user);
  console.log(repositories);
  console.log(totalStars);

  return (
    <section>
      <h2>User Details</h2>
      <h2>Teste</h2>
    </section>
  );
}

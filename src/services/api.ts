import axios, { AxiosResponse } from 'axios';
import { User, Repository } from '../interfaces';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export function getUser(username: string): Promise<AxiosResponse<User>> {
  return api.get(`/users/${username}`);
}

export function getRepositories(
  username: string,
): Promise<AxiosResponse<Repository[]>> {
  return api.get(`/users/${username}/repos`, {
    params: {
      per_page: 20,
    },
  });
}

export function getStarred(username: string): Promise<AxiosResponse<[]>> {
  return api.get(`/users/${username}/starred`, {
    params: {
      per_page: 1,
      page: 2,
    },
  });
}

/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

function getUser(username: string) {
  return api.get(`/users/${username}`);
}

function getRepositories(username: string) {
  return api.get(`/users/${username}/repos`, {
    params: {
      per_page: 20,
    },
  });
}

function getStarred(username: string) {
  return api.get(`/users/${username}/starred`, {
    params: {
      per_page: 1,
      page: 2,
    },
  });
}

export function getUserData(username: string) {
  return axios.all([
    getUser(username),
    getRepositories(username),
    getStarred(username),
  ]);
}

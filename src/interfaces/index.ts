/* eslint-disable camelcase */
export interface User {
  name: string;
  avatar_url: string;
  twitter_username: string;
  public_repos: number;
  location: string;
  company: string;
  followers: number;
  following: number;
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

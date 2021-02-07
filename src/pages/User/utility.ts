import { AxiosResponse } from 'axios';
import { Repository, User } from '../../interfaces';

export function getUserFromResponse(response: AxiosResponse<User>): User {
  return response.data;
}

export function getRepositoriesFromResponse(
  response: AxiosResponse<Repository[]>,
): Repository[] {
  return response.data;
}

function parseLinkHeader(header: string) {
  if (!header || !header.length) {
    return null;
  }

  const parts = header.split(',');
  const links = {} as { [index: string]: string };

  for (let i = 0; i < parts.length; i += 1) {
    const section = parts[i].split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }
  return links;
}

export function getStarsCountFromResponse(response: AxiosResponse): string {
  const parsedLinks = parseLinkHeader(response?.headers.link);

  let totalStars = '0';

  if (parsedLinks) {
    const params = new URLSearchParams(parsedLinks.last);
    totalStars = params.get('page') as string;
  }

  return totalStars;
}

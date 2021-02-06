/* eslint-disable import/prefer-default-export */
export function parseLinkHeader(header: string) {
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

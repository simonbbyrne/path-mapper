import * as pathToRegexp from 'path-to-regexp';

interface Params {
  [key: string]: string;
}

export interface Path {
  path: string;
  url: string;
  params: Params;
}

const matchPath = (path: string, pathToTest: string): Path | null => {
  const keys: pathToRegexp.Key[] = [];
  const re = pathToRegexp(path, keys);
  const match = re.exec(pathToTest);

  if (!match) return null;

  const [url, ...values] = match;

  return {
    path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    params: keys.reduce((memo: Params, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
}

export default matchPath;

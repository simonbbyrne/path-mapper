
import { Route } from './routes';
import matchPath, { Path } from './matchPath';

export interface MatchedRoute {
  route: Route;
  match: Path;
}

const matchRoute = (routes: Route[], path: string): MatchedRoute | null => {
  let res: MatchedRoute = null;

  routes.some(route => {
    const match = matchPath(route.path, path);

    if (match) {
      res = { route, match }
    }

    return !!match;
  });

  return res;
};

export default matchRoute;

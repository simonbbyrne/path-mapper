import { Path } from "./matchPath";
import { homeHandler, detailsHandler, aboutHandler } from './handlers';

export interface Route {
  path: string;
  handler?(path: Path): void;
}

const routes: Array<Route> = [
  {
    path: '/home',
    ...homeHandler
  },
  {
    path: '/details/:id',
    ...detailsHandler
  },
  {
    path: '/about',
    ...aboutHandler
  }
];

export default routes;

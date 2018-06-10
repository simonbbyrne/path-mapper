
import matchRoute from './matchRoute';
import routes from './routes';

const body = document.querySelector('body');
body.addEventListener('click', (evt: Event) => {
  const el = evt.target as HTMLElement;

  if (el.tagName === 'A') {
    const href = el.getAttribute('href');
    const matchedRoute = matchRoute(routes, href);

    if(matchedRoute) {
      evt.preventDefault();
      matchedRoute.route.handler(matchedRoute.match);
    }
  }
})
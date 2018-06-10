import { Path } from "./matchPath";

const homeHandler = {
  handler: (path: Path) => {
    console.log('The home handler executed', path);
  }
};

const aboutHandler = {
  handler: (path: Path) => {
    console.log('The about handler executed', path);
  }
};

const detailsHandler = {
  handler: (path: Path) => {
    console.log('My details handler executed', path);
  }
}

export { homeHandler, aboutHandler, detailsHandler }
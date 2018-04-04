Universal TypeScript + React
=====================
Your React + TypeScript Swiss Army knife

[![Build Status](https://travis-ci.org/zdanowiczkonrad/universal-typescript-react.svg?branch=master)](https://travis-ci.org/zdanowiczkonrad/universal-typescript-react) [![npm version](https://badge.fury.io/js/universal-typescript-react.svg)](https://badge.fury.io/js/universal-typescript-react) [![Dependencies](https://david-dm.org/zdanowiczkonrad/universal-typescript-react.svg)](https://david-dm.org/zdanowiczkonrad/universal-typescript-react.svg)

Universal and up to date configuration with TypeScript and React and all modern frontend essentials,
including dynamic imports, server-side rendering with prehydration and full hot module reload.
Not forgetting about styles and all you need to develop webapps. Typesafely! 🙃

**Heavily inspiried/influenced by:**
https://github.com/gaearon/react-hot-boilerplate/
https://github.com/piotrwitek/react-redux-typescript-guide

Quick checklist:
* [x] Node 8
* [x] Yarn 1.5
* [x] Webpack 4
* [x] TypeScript 2 (+ ts-loader)
* [x] TypeScript import alias
* [x] React 16+
* [x] Sourcemaps (prod + dev + tests)
* [x] HMR (with local state keeping)
* [x] fork-ts-checker (async compile)
* [x] tslint
* [x] Promise polyfill
* [x] Tests (Karma + Jasmine)
* [x] Enzyme (for React)
* [x] Splitted dev/prod configs
* [x] Vendor bundle/chunks
* [x] Styles support (LESS/SASS/PostCSS)
* [x] One CSS file per bundle (ExtractTextPlugin)
* [x] React Router
* [x] Redux
* [x] Redux Thunk
* [x] Redux Dev Tools
* [x] Universal rendering
* [x] Redux state prehydration
* [x] Server support for router paths
* [x] Webpack Environment plugin
* [x] Dynamic imports (Loadable) 🎆
* [x] Styleguidist



### Prerequisites

Yarn >= 1.0
Node >= 8.0 

```
yarn global add typescript tslint
```

### App development
Install dependencies, test if all glues together and run the development server

```
yarn install
yarn test
yarn start
open http://localhost:3000
```

Test watch mode

```
yarn test:watch
```

### Components development
This project integrates styleguidist for components development
```
yarn styleguidist
open http://localhost:6060
```

### Production

A simple production setup: headless tests, prod build and run server.
Build puts artifacts into the `dist` directory and server should run from there

```
yarn test:phantom
yarn build
yarn server
```


### SSR

An example of the server-side rendering with the state prehydration.

```
yarn ssr-server
```

Todos:

[ ] Check preload dynamic imports with Loadable on the server side and in tests
[ ] Hot reload of styles in the styleguidist (to avoid manual refresh css)
[ ] Consider hot reload of styles in the HMR mode
[ ] Loadable prefetch

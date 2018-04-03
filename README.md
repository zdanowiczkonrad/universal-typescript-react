universal-typescript-react
=====================
[![Build Status](https://travis-ci.org/zdanowiczkonrad/universal-typescript-react.svg?branch=master)](https://travis-ci.org/zdanowiczkonrad/universal-typescript-react)

[![npm version](https://badge.fury.io/js/universal-typescript-react.svg)](https://badge.fury.io/js/universal-typescript-react)

Universal and up to date configuration with TypeScript and React and all modern frontend essentials,
including dynamic imports, server-side rendering with prehydration and full hot module reload.
Not forgetting about styles and all you need to develop webapps.

Still a work in progress.

**Heavily inspiried/influenced by:**
https://github.com/gaearon/react-hot-boilerplate/
https://github.com/piotrwitek/react-redux-typescript-guide

Checklist
* [x] Node 8
* [x] Yarn 1.5
* [x] Webpack 4
* [x] TypeScript 2
* [x] TypeScript import alias
* [x] React 16
* [x] Sourcemaps (prod + dev + tests)
* [x] HMR (with state keeping)
* [x] fork-ts-checker (async compile)
* [x] tslint
* [x] Promise polyfill
* [x] Tests (Karma + Jasmine)
* [x] Enzyme
* [x] Splitted configs
* [x] Vendor bundle/chunks
* [x] Styles support (LESS/SASS)
* [ ] React router
* [ ] Server support for router paths
* [x] Redux
* [ ] Webpack define plugin
* [x] Universal rendering
* [x] Dynamic imports
* [ ] Sentry
* [ ] Styleguidist
* [ ] Redux thunk

### Prerequisites

Yarn >= 1.0
Node >= 8.0 
Have a Yarn installed. Then:

```
yarn global add typescript tslint
```

### Development
```
yarn install
yarn test
yarn start
open http://localhost:3000
```

Watch mode

```
yarn test:watch
```

### Production

A basic production script is included that builds your app to a `dist` folder


```
yarn test:phantom
yarn build
yarn server
```


### SSR

Proof of Concept SSR. TBD

```
yarn build
yarn ssr-server
```
universal-typescript-react
=====================

**inspired by https://github.com/gaearon/react-hot-boilerplate/**

Checklist
* [x] Node 8
* [x] Yarn 1.5
* [x] Webpack 4
* [x] TypeScript 2
* [x] TypeScript import alias
* [x] React 16
* [x] Sourcemaps (prod + dev)
* [x] HMR
* [x] fork-ts-checker (async compile)
* [x] tslint
* [x] Babel (don't need?) - yes. needed only for karma polyfill
* [x] Promise polyfill
* [ ] Optional es6-shim
* [x] Tests (Karma + Jasmine)
* [x] Enzyme
* [x] Splitted configs
* [x] Vendor bundle/chunks
* [x] Styles support (LESS/SASS)
* [ ] React router
* [ ] Server support for router paths
* [ ] Redux
* [ ] Webpack define plugin
* [x] Universal rendering
* [x] AMD/code splitting <- fancy usage will require babel
* [ ] Sentry


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
yarn start
open http://localhost:3000
```

### Production

A basic production script is included that builds your app to a `dist` folder

```
yarn build
yarn server
```

### SSR

Draft and WIP

```
yarn build
yarn ssr-server
```
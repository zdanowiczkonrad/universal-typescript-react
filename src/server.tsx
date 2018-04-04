/* Based on 
https://github.com/lith-light-g/universal-react-redux-typescript-starter-kit
*/

import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import * as express from 'express';
import * as serialize from 'serialize-javascript';
// import * as webpackDevMiddleware from 'webpack-dev-middleware';
// import * as webpackHotMiddleware from 'webpack-hot-middleware';

import { Express, Response } from 'express-serve-static-core';
// import { StaticRouter } from 'react-router-dom';
// import { matchRoutes, renderRoutes, MatchedRoute } from 'react-router-config';
import App from '../src/App';
import { store } from './store';

const indexFile: string = require('../dist/index.html');
const app: Express = express();
const port = process.env.PORT || 3000;
import { JSDOM } from 'jsdom';

const indexDocument = new JSDOM(indexFile).window.document;
const scripts = Array.from(indexDocument.querySelectorAll('script')).map(script => script.src);
const styles = (Array.from(indexDocument.querySelectorAll('link[rel=stylesheet]')) as HTMLLinkElement[]).map((css => css.href));

app.use(express.static('./dist'));

app.get('*', (_, res: Response) => {
    store.dispatch({
        type: 'SERVER_PREHYDRATION'
    });
    const reactAppElement: string = renderToString((
        <App/>    
    ));

    // if redirect has been used
    // if (context.url) {
    //     res.redirect(302, context.url);
    //     return;
    // }

    res.send(`<!DOCTYPE html>${renderToStaticMarkup((
        <html>
            <head>
                <title>App (prerender)</title>
                {styles.map(style => <link rel="stylesheet" key={style} href={style}/>)}
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: reactAppElement }} />
                <script
                    dangerouslySetInnerHTML={{ __html: `window.__REDUX_STATE__=${serialize(store.getState())}` }}
                    charSet="UTF-8"
                />
                {scripts.map((script: string) => <script key={script} src={script}/>)}
            </body>
        </html>
    ))}`);
});

app.listen(port, (err: Error) => {
    if (err) {
        throw err;
    }
    // tslint:disable-next-line:no-console
    console.info(`Server listening on ${port}`);
});
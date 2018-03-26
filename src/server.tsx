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
const indexFile = require('../dist/index.html');
const app: Express = express();
const port = process.env.PORT || 3000;
import { JSDOM } from 'jsdom';

const indexDocument = new JSDOM(indexFile).window.document;
const scripts = Array.from(indexDocument.querySelectorAll('script')).map(script => script.src));
const styles = Array.from(indexDocument.querySelectorAll('link[rel=stylesheet]')).map(css => css.href));
console.log('Scripts injected: ' + JSON.stringify(scripts));
console.log('Styles injected: '  + JSON.stringify(styles));

app.use(express.static('./dist'));

app.get('*', (_, res: Response) => {


    const reactAppElement: string = renderToString((
        <App/>    
    ));

    // if redirect has been used
    // if (context.url) {
    //     res.redirect(302, context.url);
    //     return;
    // }

    res.send(`<!DOCTYPE html>${renderToStaticMarkup((
        <html lang="fr">
            <head>
                <title>App (prerender)</title>
                {styles.map(style => <link rel="stylesheet" href={style} />)}
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: reactAppElement }} />
                <pre>
                
                    </pre>
                {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js" /> */}
                {/* <script
                    dangerouslySetInnerHTML={{ __html: `window.__REDUX_STATE__=${serialize(store.getState())}` }}
                    charSet="UTF-8"
                /> */}
                {scripts.map((script: string) => <script src={script} />)}
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
import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import * as express from 'express';
// import * as webpackDevMiddleware from 'webpack-dev-middleware';
// import * as webpackHotMiddleware from 'webpack-hot-middleware';

import { Express, Response } from 'express-serve-static-core';
// import { StaticRouter } from 'react-router-dom';
// import { matchRoutes, renderRoutes, MatchedRoute } from 'react-router-config';
import App from '../src/App';
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.static('./dist'));

app.get('*', (_, res: Response) => {
    const scripts: string[] = ['vendor.64525e2cc35d211b677a.js', 'app.ab13e663d83a4d0ee63b.js'];
   
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

                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: reactAppElement }} />
                {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js" /> */}
                {/* <script
                    dangerouslySetInnerHTML={{ __html: `window.__REDUX_STATE__=${serialize(store.getState())}` }}
                    charSet="UTF-8"
                /> */}
                {scripts.map<JSX.Element>((src: string, i: number) => <script src={src} key={i} />)}
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
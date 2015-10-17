import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import Fetchr from 'fetchr';
import serialize from 'serialize-javascript';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import getServices from 'app/lib/getServices';

import FluxApp from 'app/FluxApp';
import Layout from 'app/components/Layout';
import Application from 'app/components/Application';

const server = express();

server.use('/public',
  express.static(path.join(__dirname, '../build')));

server.use(bodyParser.json());

server.use('/api', getServices());

server.use((req, res, next) => {

  const fetchr = new Fetchr({
    req: req,
    xhrPath: '/api'
  });

  const app = new FluxApp({
    fetchr: fetchr
  });

  app.getActions('ApplicationActions')
  .navigate(req.url)
  .then(() => {

    const markup = renderToString(<Application app={ app }/>);

    const state = `window.AppState = ${ serialize(app.takeSnapshot()) };`;

    const html = renderToStaticMarkup(
      <Layout
        markup={ markup }
        state={ state }
      />);

    res.status(200).send(`<!DOCTYPE html>${ html }`);
  })
  .catch(next);
});

server.listen(config.get('port'), () => {
  console.log(`Listening on port ${ config.get('port') }`);
});

export default server;

import babelPolyfill from 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Fetchr from 'fetchr';

import FluxApp from 'app/FluxApp';
import Application from 'app/components/Application';

const fetchr = new Fetchr({
  xhrPath: '/api'
});

const app = new FluxApp({
  fetchr: fetchr
});

app.bootstrap(window.AppState);

const { component } = app.router.getRoute(document.location.pathname).config;

ReactDOM.render(<Application app={ app } component={ component }/>,
  document.querySelector('[data-app]'));

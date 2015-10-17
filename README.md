# Isomorphic Alt boilerplate

This is a simple boilerplate for isomorphic apps with [React](http://facebook.github.io/react/) + [Alt](https://github.com/goatslacker/alt).

It's a first implementation, so I'm sure I forget a lot of details and I know there's a lot to improve. I began it just to test if Alt was as simple as [Fluxible](http://fluxible.io/) to make isomorphic apps, turns out it worked (but not _that_ simple).

## Libs

The libs used here was:

- [Express](http://expressjs.com/), for the server;
- [React](http://facebook.github.io/react/), for the views;
- [Fetchr](https://github.com/yahoo/fetchr), for data fetching, instead of [Alt's sources](http://alt.js.org/docs/async/). Fetchr was really easier and prettier;
- [Routr](https://github.com/yahoo/routr), for routing. I find it simpler and with less _magic_ than [React Router](https://github.com/rackt/react-router);
- [Serialize Javascript](https://github.com/yahoo/serialize-javascript), for serialize the app state and send it to the browser, it was simpler than Iso, the package recommended by Alt;
- [Webpack](https://webpack.github.io/), for ES6 modules on the browser.

## Contributing

Feel free to send issues and pull requests, it's just the begin of a boilerplate!

# Isomorphic Alt boilerplate

This is a simple boilerplate for isomorphic apps with [React](http://facebook.github.io/react/) + [Alt](https://github.com/goatslacker/alt).

It's a first implementation, so I'm sure I forget a lot of details and I know there's a lot to improve. I started this just to test if Alt was as simple as [Fluxible](http://fluxible.io/) to make isomorphic apps, turns out it worked (but not _that_ simple).

## Libs

The libs used here was:

- [Express](http://expressjs.com/), for the server;
- [React](http://facebook.github.io/react/), for the views;
- [Fetchr](https://github.com/yahoo/fetchr), for data fetching, instead of [Alt's sources](http://alt.js.org/docs/async/). Fetchr was really easier and prettier;
- [Routr](https://github.com/yahoo/routr), for routing. I find it simpler and with less _magic_ than [React Router](https://github.com/rackt/react-router);
- [Serialize Javascript](https://github.com/yahoo/serialize-javascript), for serialize the app state and send it to the browser, it was simpler than Iso, the package recommended by Alt;
- [Webpack](https://webpack.github.io/), for ES6 modules on the browser.

## How it works

### Stores and actions

You must declare all your stores and action classes in the `app/FluxApp.js` constructor, since it does not uses singletons, and each request that begins on server side instantiates the app again (e.g. before it enters in the SPA mode on the browser). You can see this at `app/server.js`.

### Routing

All your routes are defined on `app/router.js`. For each route you must specify at least a `path`, a `method` and a `component`. If you also specify the name of a action class, this class must have a `load` action, that returns a `Promise` and that will be called when the route is requested (even in the browser). See the `navigate` action at `app/actions/ApplicationActions.js`.

### Links

To use links inside the app, you must use the `app/components/Link` instead of a `&lt;a/&gt;`, since this component will call the navigate action when clicked.

### Accessing stores and actions from components

If you want to listen to a store or call a action from a component, you must specify the context types for receiving the `getStore` and `getActions` on the context of the component. There's a `app/lib/contextTypes.js` that already has the needed context types, you can just import and assign it, check `app/components/pages/About.js` for a example.

## Contributing

Feel free to send issues and pull requests, it's just the begin of a boilerplate!

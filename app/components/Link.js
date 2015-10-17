import React from 'react';

import contextTypes from 'app/lib/contextTypes';

class Link extends React.Component {
  static contextTypes = contextTypes

  constructor(props, context) {
    super(props, context);

    const router = this.context.router;

    let route;
    let path;

    if(props.href) {
      path = props.href;
      route = router.getRoute(props.href);
    }
    else if(props.route) {
      path = router.makePath(props.route, props.params);
      route = router.getRoute(path);
    }

    this.state = {
      route: route,
      href: path
    };
  }

  render() {
    return (
      <a
        onClick={ (e) => this.handleClick(e) }
        href={ this.state.href }
        {... this.props}
      >
        { this.props.children }
      </a>
    );
  }

  handleClick(e) {
    if(this.state.route) {
      e.preventDefault();

      this.context
        .getActions('ApplicationActions')
        .navigate(this.state.route.url);

      if(process.env.BROWSER) {
        history.pushState(null, '', this.state.route.url);
      }
    }
  }
}

export default Link;

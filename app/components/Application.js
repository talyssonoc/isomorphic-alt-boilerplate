import React from 'react';

import contextTypes from 'app/lib/contextTypes';

class Application extends React.Component {

  static childContextTypes = contextTypes

  getChildContext() {
    const { app } = this.props;

    return {
      getStore: app.getStore.bind(app),
      getActions: app.getActions.bind(app),
      router: app.router
    };
  }

  constructor(props, context) {
    super(props, context);

    const routeState = props.app.getStore('ApplicationStore').getState();

    this.state = {
      params: routeState.params,
      component: routeState.component || props.component
    }
  }

  componentDidMount() {
    window.onpopstate = (event) => {
      this.props.app
      .getActions('ApplicationActions')
      .navigate(document.location.pathname);
    };

    this.props.app.getStore('ApplicationStore').listen(this.handleNavigate);
  }

  componentWillUnmount() {
    this.props.app.getStore('ApplicationStore').unlisten(this.handleNavigate);
  }

  handleNavigate = (state) => {
    this.setState({
      params: state.params,
      component: state.component
    });
  }

  render() {
    const View = this.state.component;

    return <View params={ this.state.params }/>;
  }
};

export default Application;

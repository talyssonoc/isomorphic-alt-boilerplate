import React from 'react';

import contextTypes from 'app/lib/contextTypes';

import Link from 'app/components/Link';

class About extends React.Component {
  static contextTypes = contextTypes

  constructor(props, context) {
    super(props, context);

    this.state = {
      time: this.context.getStore('TimeStore').getState().currentTime
    };
  }

  componentDidMount() {
    this.context.getStore('TimeStore').listen(this.handleTimeChange);
  }

  componentWillUnmount() {
    this.context.getStore('TimeStore').unlisten(this.handleTimeChange);
  }

  handleTimeChange = (state) => {
    this.setState({
      time: state.currentTime
    });
  }

  render() {
    return (
    <div>
      <b>This is the about page at { this.state.time }!</b>
      <div>
        <Link
          route="index"
        >
          Home
        </Link>
      </div>
    </div>);
  }
}

export default About;

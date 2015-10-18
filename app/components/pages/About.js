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
    const time = new Date(this.state.time).toLocaleString('en-US');

    return (
    <div className="callout">
      <h5>About</h5>
      <p>This is the about page at <span className="label">{ time }</span>!</p>
      <Link
        route="index"
        className="small button"
      >
        « Home
      </Link>
    </div>);
  }
}

export default About;

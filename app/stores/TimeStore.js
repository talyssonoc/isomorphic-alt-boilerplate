class TimeStore {
  constructor() {
    this.state = {};

    const { updateTimeSuccess } = this.alt.getActions('TimeActions');

    this.bindListeners({
      handleTime: updateTimeSuccess
    });
  }

  handleTime(time) {

    this.setState({
      currentTime: time
    });
  }
}

export default TimeStore;

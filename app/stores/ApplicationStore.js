class ApplicationStore {
  constructor() {
    this.state = {};

    const ApplicationActions = this.alt.getActions('ApplicationActions');

    this.bindListeners({
      handleNavigateSuccess: ApplicationActions.navigateSuccess,
      handleNavigateFailure: ApplicationActions.navigateFailure
    });
  }

  handleNavigateSuccess({ params, component }) {
    this.setState({ params, component });
  }

  handleNavigateFailure(error) {
    this.setState({
      navigationError: error
    });
  }
}

export default ApplicationStore;

class AboutActions {
  load() {
    const { TimeActions } = this.alt.actions;

    this.dispatch();

    return new Promise((resolve, reject) => {
      TimeActions
      .updateTime()
      .then(resolve)
      .catch(reject);
    });
  };
}

export default AboutActions;

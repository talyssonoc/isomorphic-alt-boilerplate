class TimeActions {
  updateTime() {
    this.dispatch();

    return new Promise((resolve, reject) => {
      this.alt
        .service
        .read('time')
        .end((err, data) => {
          if(err) {
            return console.log(err);
          }

          this.actions.updateTimeSuccess(data);

          resolve(data);
        });
    });
  }

  updateTimeSuccess(data) {
    return data;
  }
}

export default TimeActions;

class ApplicationActions {
  constructor() {
    this.generateActions('navigateSuccess',
                         'navigateFailure');
  }

  navigate(url) {
    this.dispatch(url);

    return new Promise((resolve, reject) => {
      const route = this.alt.router.getRoute(url);

      if(!route) {
        return reject('404 - Not found');
      }

      const config = route.config;

      if(config.action) {
        return this.alt
        .getActions(config.action)
        .load()
        .then(() => {

          resolve();

          this.actions.navigateSuccess({
            params: route.params,
            component: config.component
          });
        })
        .catch((error) => {

          reject(error);

          this.actions.navigateFailure(error);
        });
      }

      resolve();

      this.actions.navigateSuccess({
        params: route.params,
        component: config.component
      });

    });
  }
}

export default ApplicationActions;

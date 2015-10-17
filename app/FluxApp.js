import Alt from 'alt';

import router from 'app/router';

import ApplicationStore from 'app/stores/ApplicationStore';
import TimeStore from 'app/stores/TimeStore';

import ApplicationActions from 'app/actions/ApplicationActions';
import HomeActions from 'app/actions/HomeActions';
import TimeActions from 'app/actions/TimeActions';
import AboutActions from 'app/actions/AboutActions';

class FluxApp extends Alt {
  constructor(options = {}) {
    super();

    this.addActions('ApplicationActions', ApplicationActions);
    this.addActions('HomeActions', HomeActions);
    this.addActions('TimeActions', TimeActions);
    this.addActions('AboutActions', AboutActions);

    this.addStore('ApplicationStore', ApplicationStore);
    this.addStore('TimeStore', TimeStore);

    this.service = options.fetchr;
    this.router = router;
  }
}

export default FluxApp;

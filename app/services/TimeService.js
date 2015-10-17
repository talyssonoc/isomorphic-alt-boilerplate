class TimeService {
  constructor() {
    this.name = 'time';
  }

  read(req, resource, params, config, callback) {
    callback(null, Date.now());
  }
}

export default TimeService;

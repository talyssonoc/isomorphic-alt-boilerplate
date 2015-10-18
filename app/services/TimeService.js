class TimeService {
  constructor() {
    this.name = 'time';
  }

  read(req, resource, params, config, callback) {
    callback(null, new Date());
  }
}

export default TimeService;

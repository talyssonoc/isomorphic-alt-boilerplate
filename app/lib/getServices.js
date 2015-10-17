import Fetchr from 'fetchr';

export default function getServices() {
  const serviceNames = [
    'TimeService'
  ];

  serviceNames.forEach((serviceName) => {
    let Service = require(`app/services/${ serviceName }`);
    Fetchr.registerService(new Service());
  });

  return Fetchr.middleware();
};

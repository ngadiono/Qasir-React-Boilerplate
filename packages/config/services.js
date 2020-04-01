let servicesConfig = {
  // auth
  // "generate_client_secret": "/register/device"
};

switch (process.env.APP_ENV) {
  case 'local':
    servicesConfig = Object.assign(servicesConfig, {
      base_url: process.env.HOST_API_URL
    });
    break;
  default:
    servicesConfig = Object.assign(servicesConfig, {
      base_url: process.env.HOST_API_URL
    });
    break;
}

export { servicesConfig };

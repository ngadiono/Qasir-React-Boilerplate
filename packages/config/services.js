const apiAuth = '/api/v1/auth';
const apiUser = `${apiAuth}/user`;

let servicesConfig = {
  base_url: process.env.API_HOST,
  login_user: `${apiUser}/login`,
};

export { servicesConfig };

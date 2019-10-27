import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import componentGateway from '@qasir/component-gateway';
import ListRoute from './list';

const Layout = loadable(() => import('@qasir/views/containers'));
const Login = loadable(() => import('@qasir/views/pages/login'));
const Error404 = loadable(() => import('@qasir/views/pages/errors/Error404'));
const Error500 = loadable(() => import('@qasir/views/pages/errors/Error500'));
const Welcome = loadable(() => import('@qasir/views/pages/welcome'));

import imgNotFound from '@qasir/assets/img/not-found.svg';

const loadableRoutes = ListRoute;
class Routes extends React.Component {
    render() {
        return (
          <Switch>
              <Route exact path="/welcome" name="Welcome Page" render={props => <Welcome {...props}/>} />
              <Route exact key="/" path="/" component={componentGateway} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Error 404" component={Error404}/>} />
              <Route exact path="/500" name="Error 500" component={Error500}/>} />
              {Object
                .keys(loadableRoutes)
                .map(path => {
                  const {
                    exact,
                    ...props
                  } = loadableRoutes[path]
                  props.exact = exact === void 0 || exact || true
                  return <Route exact key={null} path={path} render={props => <Layout {...props} headHTML={loadableRoutes[path].headHTML} />}/>
              })}
            </Switch>
        )
    }
}
export { loadableRoutes };
export default Routes;

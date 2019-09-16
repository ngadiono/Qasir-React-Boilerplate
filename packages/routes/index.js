import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import componentGateway from '@qasir/component-gateway';
import ListRoute from './list';

import Layout from '@qasir/views/containers';
import Login from '@qasir/views/pages/login';
import Page404 from '@qasir/views/pages/page404';
import Page500 from '@qasir/views/pages/page500';
import Welcome from '@qasir/views/welcome';

import imgNotFound from '../assets/img/not-found.svg';

const loadable = loader => Loadable({
    loader,
    delay: false,
    loading: () => null
});

const loadableRoutes = ListRoute;
class Routes extends React.Component {
    render() {
        return (
            <Switch>
              <Route exact path="/welcome" name="Welcome Page" render={props => <Welcome {...props}/>} />
              <Route exact key="/" path="/" component={componentGateway} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {Object
                  .keys(loadableRoutes)
                  .map(path => {
                    const {
                      exact,
                      ...props
                    } = loadableRoutes[path]
                    props.exact = exact === void 0 || exact || true
                    return <Route key={path} path={path} render={props => <Layout {...props}/>}/>
                  })}
                    <Route
                        render={() => (
                            <div style={{
                                backgroundColor: '#282c34',
                                minHeight: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src={imgNotFound} alt="not found" style={{ width: '32%' }}/>
                            </div>
                        )}
                    />
            </Switch>
        )
    }
}
export { loadableRoutes };
export default Routes;

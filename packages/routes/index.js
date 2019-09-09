import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Loadable from 'react-loadable';

import componentGateway from '@qasir/component-gateway';
import ListRoute from './list';

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
                <Route exact key="/" path="/" component={componentGateway} />
                {Object
                    .keys(loadableRoutes)
                    .map(path => {
                        const {
                            exact,
                            ...props
                        } = loadableRoutes[path]
                        props.exact = exact === void 0 || exact || true
                        return <Route key={path} path={path} {...props}/>
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

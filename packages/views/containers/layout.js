import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import routes from '@qasir/routes/list';

const Header = React.lazy(() => import('@qasir/views/containers/header'));
const Aside = React.lazy(() => import('@qasir/views/containers/aside'));
const Footer = React.lazy(() => import('@qasir/views/containers/footer'));

const loadableRoutes = routes;

class Layout extends Component {

  loading = () => null;

  render() {
    return (
      <div id="app">
        <React.Suspense fallback={this.loading()}>
          <Header />
        </React.Suspense>
        <div id="app-body">
          <React.Suspense fallback={this.loading()}>
            <Aside />
          </React.Suspense>
          <main style={{ height: 400 }}>
          <React.Suspense fallback={this.loading()}>
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
          </React.Suspense>
          </main>
        </div>
        <React.Suspense fallback={this.loading()}>
          <Footer />
        </React.Suspense>
      </div>
    );
  }

}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;

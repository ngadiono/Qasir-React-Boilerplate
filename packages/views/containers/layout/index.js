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
      <>
        <React.Suspense fallback={this.loading()}>
          <Header />
        </React.Suspense>
        <section id="app-body" style={{ display: 'flex' }}>
          <React.Suspense fallback={this.loading()}>
            <Aside />
          </React.Suspense>
          <main>
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
        </section>
        <React.Suspense fallback={this.loading()}>
          <Footer />
        </React.Suspense>
      </>
    );
  }

}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;

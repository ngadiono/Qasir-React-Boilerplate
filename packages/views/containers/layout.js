import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '@qasir/views/containers/header';
import Aside from '@qasir/views/containers/aside';
import Footer from '@qasir/views/containers/footer';
import routes from '@qasir/routes/list';

const loadableRoutes = routes;

class Layout extends Component {

  render() {
    return (
      <div id="app">
        <Header />
        <div id="app-body">
          <Aside />
          <main>
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
          </main>
        </div>
        <Footer />
      </div>
    );
  }

}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class Header extends Component {

  render() {
    return (
      <>
        <Helmet title="Welcome in to Qasir Boilerplate" />
        <div style={{ background: 'red', display: 'block', height: 70 }}>Header</div>
      </>
    );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

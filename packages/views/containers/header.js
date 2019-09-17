import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <div style={{ background: 'red', display: 'block', height: 70 }}>Header</div>
    );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

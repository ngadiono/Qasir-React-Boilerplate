import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

  render() {
    return (
      <div style={{ background: 'blue', display: 'block', height: 70 }}>Footer</div>
    );
  }

}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;

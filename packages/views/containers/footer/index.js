import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WrapperFooter } from './style';

class Footer extends Component {

  render() {
    return (
      <WrapperFooter>
        <span>2014 - 2019 © Qasir.</span>
      </WrapperFooter>
    );
  }

}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;

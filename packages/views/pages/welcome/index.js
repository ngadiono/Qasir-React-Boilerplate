import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Wrapper from './style';

import logoQasir from '@qasir/assets/img/logo/logo-qasir-white.svg';

class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Welcome to Qasir Boilerplate" />
        <img src={logoQasir} alt="logo" />
        <p>
          Qasir's Frontend (ReactJS Seed) has been designed to provide you with
          a super fast test driven front-end development lifecycle.
        </p>
        <a
          href="https://qasir-id.atlassian.net/wiki/spaces/WTH/pages/28835892/QM+-+Frontend+Documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </Wrapper>
    );
  }
}

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default Welcome;

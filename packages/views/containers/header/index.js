import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Menu from 'antd/es/menu';
import { Row, Col } from 'antd/es/grid/';
import Dropdown from 'antd/es/dropdown';
import Icon from 'antd/es/icon';
import Drawer from 'antd/es/drawer';
import { createGlobalStyle } from 'styled-components';

import 'antd/es/menu/style/index.css';
import 'antd/es/icon/style/index.css';
import 'antd/es/dropdown/style/index.css';
import 'antd/es/grid/style/index.css';
import 'antd/es/drawer/style/index.css';

class Header extends Component {

  render() {
    return (
      <>
        <Helmet title="Dashboard - Qasir Boilerplate" />
        <div style={{ background: 'red', display: 'block', height: 70 }}>Header</div>
      </>
    );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

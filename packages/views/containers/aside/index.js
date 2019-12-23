import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import Menu from 'antd/es/menu';

import { ListMenu, LinkMenu, Icons, LogoWrapper, LogoHref, LogoImg } from './style';

import ImgDashboard from '@qasir/assets/img/icon/dashboard.png';
import ImgLogo from '@qasir/assets/img/logo/logo-qasir-supplier.png';

const { SubMenu } = Menu;

class Aside extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
      } else {
      this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
      }
  };

  render() {
    const { t } = this.props;
    return (
      <ListMenu>
      <LogoWrapper>
          <LogoHref>
              <LogoImg src={ImgLogo} />
          </LogoHref>
      </LogoWrapper>
          <Menu
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              mode="inline"
          >
              <Menu.Item key="1">
                  <a href="#/dashboard">
                      <Icons src={ImgDashboard} />
                      <span> Dashboard </span>
                  </a>
              </Menu.Item>
              <Menu.Item key="2">
                  <a href="#/user-management">
                      <Icons src={ImgDashboard} />
                      <span> {t('user_management')} </span>
                  </a>
              </Menu.Item>
          </Menu>
      </ListMenu>

    );
  }

}

Aside.propTypes = {};
Aside.defaultProps = {};

export default withTranslation()(Aside);

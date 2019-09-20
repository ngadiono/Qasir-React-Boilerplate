import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Menu from 'antd/es/menu';
import { Row, Col } from 'antd/es/grid/';
import Dropdown from 'antd/es/dropdown';
import Icon from 'antd/es/icon';
import Drawer from 'antd/es/drawer';
import { createGlobalStyle } from 'styled-components';

import { Wrapper, ButtonHummber, Account } from './style';
import Aside from '@qasir/views/containers/aside';

import 'antd/es/menu/style/index.css';
import 'antd/es/icon/style/index.css';
import 'antd/es/dropdown/style/index.css';
import 'antd/es/grid/style/index.css';
import 'antd/es/drawer/style/index.css';

import UserImg from '@qasir/assets/img/profile.png';
import HamberImg from '@qasir/assets/img/icon/menu.png';

const GlobalStyle = createGlobalStyle`
  .ant-dropdown {
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    ul {
        li {
            padding: 10px 12px;
            a {
                text-decoration: none;
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
  }
  .ant-drawer-wrapper-body {
    overflow: hidden !important;
    .ant-drawer-body {
        padding: 0px;
        .ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {
            width   : auto !important;
        }
    }
  }

`

const AccountMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Profil</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Informasi Usaha</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">Keluar</a>
    </Menu.Item>
  </Menu>
);

class Header extends Component {

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
      this.setState({
      visible: true,
      });
  };

  onClose = () => {
      this.setState({
      visible: false,
      });
  };

  render() {
    return(
      <>
        <Helmet title="Dashboard - Qasir Boilerplate" />
        <Wrapper>
        <GlobalStyle/>
            <Row>
                <Col md={6} lg={6} xs={6}>

                    <ButtonHummber onClick={this.showDrawer}>
                        <img src={HamberImg} />
                    </ButtonHummber>
                    <Drawer
                        title=""
                        placement='left'
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <Aside/>
                    </Drawer>
                </Col>
                <Col md={18} lg={18} xs={18}>
                    <Account>
                        <Dropdown overlay={AccountMenu} trigger={['click']}>
                            <a href="#">
                                <div>
                                    <h3>Bambhang Sujdro</h3>
                                    <span>
                                        Admin
                                    </span>
                                </div>
                                <img src={UserImg}/>
                                <Icon type="caret-down" />
                            </a>
                        </Dropdown>
                    </Account>
                </Col>
            </Row>
        </Wrapper>
      </>
   );
  }

}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

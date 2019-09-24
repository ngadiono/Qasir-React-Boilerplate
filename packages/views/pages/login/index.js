import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { default as Form } from 'antd/es/form';
import 'antd/es/form/style/index.css';

import { FormItemEmail, FormItemPassword, Button } from "@qasir/components";

import { LoginCardImg, LoginCardImgTitle, GlobalStyleLogin } from './style.js';

import imgBg from "@qasir/assets/img/login-supplier-bg.png";
import imgLogo from "@qasir/assets/img/logo/logo-qasir-red.svg";

class FormLogin extends Component {
  render() {
    const { form } = this.props;
    return (
      <>
        <GlobalStyleLogin />
        <LoginCardImg src={imgBg} />
        <Form>
          <LoginCardImgTitle src={imgLogo} />
          <FormItemEmail
            form={form}
            defaultValue=""
            fieldName="username"
            placeholder="Masukkan Email"
            message="Username wajib diisi"
            required="true"
            autoComplete="on"
          />
          <FormItemPassword
            form={form}
            initialValue=""
            fieldName="password"
            message="Password wajib diisi"
            placeholder="Masukkan Password Anda"
          />
          <Button textAlign="center" size="lg" primary>
            Masuk
          </Button>
        </Form>
      </>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default Form.create({})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormLogin)
);

// Vendor packages
import React from 'react';
import App from 'next/app';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

// Styles
import 'antd/dist/antd.css';
import StyleReset from '../styles/reset';

const theme = {
  colors: {
    primary: '#f04b32',
  },
};

const Noop = ({ children }) => children;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Noop;
    return (
      <ThemeProvider theme={theme}>
        <StyleReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

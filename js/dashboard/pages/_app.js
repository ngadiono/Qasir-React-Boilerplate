// Vendor packages
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

// Styles
import 'antd/dist/antd.css';
import StyleReset from '../styles/reset';

const appName = 'Qasir Boilerplate';
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
          <Component {...pageProps} appName={appName} />
        </Layout>
      </ThemeProvider>
    );
  }
}

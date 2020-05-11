import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

const theme = {
  colors: {
    primary: '#f04b32',
  },
};

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

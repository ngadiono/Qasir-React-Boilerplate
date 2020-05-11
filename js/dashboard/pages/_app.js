import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

const theme = {
  colors: {
    primary: '#f04b32',
  },
};

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

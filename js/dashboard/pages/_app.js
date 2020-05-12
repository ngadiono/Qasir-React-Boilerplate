// Vendor packages
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

// Styles
import StyleReset from 'styles/reset';
import 'antd/dist/antd.css';

const theme = {
  colors: {
    primary: '#f04b32',
  },
};

export default class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

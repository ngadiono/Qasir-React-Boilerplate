// Next
import App from 'next/app';
import Head from 'next/head';

// Vendors
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
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/img/icons/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" />
        </Head>
        <StyleReset />
        <Layout>
          <Component {...pageProps} appName={appName} />
        </Layout>
      </ThemeProvider>
    );
  }
}

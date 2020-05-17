// Vendors
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';

// Next
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

// Configs
import { appEnvProd } from 'config/constants';
import withReduxStore from 'config/redux/withReduxStore';

// Styles
import StyleReset from '../styles/reset';
import StyleGlobal from '../styles/global';
import StyleOverride from '../styles/override';

const appName = 'Qasir Boilerplate';
const theme = {
  colors: {
    primary: '#f04b32',
  },
};

const Noop = ({ children }) => children;

// Loading pre-rendering
Router.events.on('routeChangeStart', (url) => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== appEnvProd) console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    const Layout = Component.Layout || Noop;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/img/icons/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
              rel="stylesheet"
            />
            <body id="qasir-app" />
          </Head>

          <StyleReset />
          <StyleGlobal />
          <StyleOverride />

          <Layout>
            <Component {...pageProps} appName={appName} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

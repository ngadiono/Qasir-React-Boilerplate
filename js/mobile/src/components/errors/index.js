// Next
import Head from 'next/head';

// Styles
import { WrapperError } from './style';
import StyleReset from 'styles/reset';

export default ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/img/icons/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" />
        <body id="qasir-app" />
      </Head>
      <StyleReset />
      <WrapperError>{children}</WrapperError>
    </>
  );
};

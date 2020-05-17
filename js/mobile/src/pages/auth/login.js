// Next
import Head from 'next/head';

// Styles
import { Wrapper } from 'modules/auth/style';

const Login = ({ appName }) => {
  return (
    <>
      <Head>
        <title>Member Area - {appName}</title>
      </Head>
      <Wrapper>Login</Wrapper>
    </>
  );
};

export default Login;

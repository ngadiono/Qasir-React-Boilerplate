import React from 'react';
import Helmet from 'react-helmet';
import Button from 'qasir/lib/base/button';

import { Wrapper } from './style';

import imgNotFound from '@qasir/assets/img/404.png';

const Error500 = () => (
  <>
    <Helmet title="500 Internal Server Error" />
    <Wrapper>
      <img src={imgNotFound} alt="internal server error" />
      <h3>Server lagi bermasalah, mohon kunjungi lagi nanti.</h3>
    </Wrapper>
  </>
);

export default Error500;

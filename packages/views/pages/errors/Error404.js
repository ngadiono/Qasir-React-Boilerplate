import React from 'react';
import Helmet from 'react-helmet';
import Button from 'qasir/lib/base/button';

import { Wrapper } from './style';

import imgNotFound from '@qasir/assets/img/404.png';

const Error404 = () => (
  <>
    <Helmet title="404 Page Not Found" />
    <Wrapper>
      <img src={imgNotFound} alt="not found" />
      <h3>Ehh, mau nyari apa nih?</h3>
      <p>Halaman yang dicari gak ada tuh, silahkan cek lagi ya</p>
      <Button variant="primary" size="medium">
        Kembali Ke Dashboard
      </Button>
    </Wrapper>
  </>
);

export default Error404;

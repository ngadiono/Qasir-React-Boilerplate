// Next
import Head from 'next/head';
import Link from 'next/link';

// Vendors
import { Button } from 'antd';

// Components
import Error from 'components/errors';

const Error404 = () => (
  <>
    <Head>
      <title>Error 404 - Page Not Found</title>
    </Head>
    <Error>
      <img src="/img/errors/404.svg" alt="not found" />
      <p>Halaman yang dicari dicari tidak ada, silahkan cek lagi</p>
      <Link href="/dashboard">
        <Button>Kembali ke Dashboard</Button>
      </Link>
    </Error>
  </>
);

export default Error404;

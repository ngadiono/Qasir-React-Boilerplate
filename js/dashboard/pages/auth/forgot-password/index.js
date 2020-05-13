// Next
import Head from 'next/head';
import Link from 'next/link';

// Vendors
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

// Styles
import { Wrapper } from './style';

const ForgotPassword = ({ appName }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Head>
        <title>Forgot Password - {appName}</title>
      </Head>
      <Wrapper>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item>
            <Link href="/dashboard">
              <Button type="primary" className="login-form-button">
                Reset Password
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default ForgotPassword;

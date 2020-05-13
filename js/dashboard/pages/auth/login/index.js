// Next
import Head from 'next/head';
import Link from 'next/link';

// Vendors
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// Styles
import { Wrapper } from './style';

const Login = ({ appName }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Head>
        <title>Member Area - {appName}</title>
      </Head>
      <Wrapper>
        <img src="https://dummyimage.com/400x200/000/fff" alt="logo" style={{ marginBottom: '50px' }} />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link href="/auth/forgot">
              <a className="login-form-forgot">Forgot password</a>
            </Link>
          </Form.Item>

          <Form.Item>
            <Link href="/dashboard">
              <Button type="primary" className="login-form-button" style={{ marginRight: '10px' }}>
                Log in
              </Button>
            </Link>
            Or{' '}
            <Link href="/auth/register">
              <a>register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;

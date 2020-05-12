// Vendor packages
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

// Styles
import { Wrapper } from './style';

const Forgot = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Wrapper>
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
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
  );
};

export default Forgot;

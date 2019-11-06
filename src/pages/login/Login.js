import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './Login.css';

const LoginPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of form: ');
  };

  return (
    <div className="login-page">
      <h3 className="login-page-title">welcome :)</h3>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="이메일"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="패스워드"
          />
        </Form.Item>
        <Form.Item className="login-button-area">
          <Button type="primary" htmlType="submit" className="login-form-button">
            로그인
          </Button>
          <div className="join-button-area">회원이 아니라면 <a href="">바로 가입하세요 :)</a></div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

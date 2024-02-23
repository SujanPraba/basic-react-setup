import { Button, Form, Input } from 'antd';
import React from 'react';
import { handleRequest } from '../api/actionHandler';
import { endpoints, methods } from '../api/endPoints';
import "./login.css";
const onFinish = async(values) => {
    try {
        const response = await handleRequest(
          endpoints.LOGIN,
          values,
          false,
          methods.POST
        );
        if (response.status) {
        //   setEmployeeInfo(response.employeeModel);
        console.log("logoin Success");
        }
      } catch (err) {
        console.log(err);
      }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    > */}
      {/* <Checkbox>Remember me</Checkbox> */}
    {/* </Form.Item> */}

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>

    </Form.Item>
  </Form>
);
export default Login;
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Row } from "antd";
import * as S from "./style";
import Logo from "../../assets/icons/logo";

function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <S.Div>
      <Row>
        <S.ColLeft span={12}>
          <S.DivContent>
          <p style={{
            fontSize: '3rem',
            fontWeight:'700'
          }}>
            Welcome to
            </p>


          <S.Logo>
          <Logo/>
          </S.Logo>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, minima!</p>
          </S.DivContent>
         </S.ColLeft>

         
          

        <S.ColRight span={12}>
          <p style={{
            fontSize: '3rem',
            fontWeight:'700'
          }}>Hello!</p>
          <p>Sign into your account</p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="Email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </S.ColRight>
      </Row>
    </S.Div>
  );
}

export default Login;

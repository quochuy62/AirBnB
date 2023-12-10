import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Row } from "antd";
import * as S from "./style";
import Logo from "../../assets/icons/logo";

function Register() {
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
            Glad to see you!
            </p>


          <S.Logo>
          <Logo/>
          </S.Logo>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, minima!</p>
          </S.DivContent>
         </S.ColLeft>

         
          

        <S.ColRight span={12}>
          <div style={{textAlign:'center', marginBottom:'1rem'}}>
          <p style={{
            fontSize: '3rem',
            fontWeight:'700'
          }}>Hello, friend!</p>

          </div>

        
          <S.FormIn
            name="basic"
            // labelCol={{ span: 10 }}
            // wrapperCol={{ span: 10 }}
            // style={{ maxWidth: 500 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              // label="Email"
              name="Email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              // label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            
            <Form.Item<FieldType>
              // label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Nhập lại password" />
            </Form.Item>

            
            <Form.Item<FieldType>
              // label="Password"
              name="name"
              rules={[
                { required: true, message: "Please input your name" },
              ]}
            >
              <Input placeholder="Họ tên" />
            </Form.Item>

            
            <Form.Item<FieldType>
              // label="Password"
              name="sđt"
              rules={[
                { required: true, message: "Please input your phone number" },
              ]}
            >
              <Input placeholder="Số điện thoại" />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 4, span: 16 }} style={{textAlign:'center', marginBottom:'1rem'}}>
              <S.ButtonIn htmlType="submit">
                CREATE ACCOUNT
              </S.ButtonIn>            
            </Form.Item>
            <div
              style={{
                display:'flex',
                justifyContent:'center'}}>
              <p>Already have an account?</p>
              <a>Sign In</a>

              </div>
          </S.FormIn>
        </S.ColRight>
      </Row>
    </S.Div>
  );
}

export default Register;

import React, { forwardRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Row } from "antd";
import * as S from "./style";
import Logo from "../../assets/icons/logo";
import { useState } from "react";
import { useFormik } from "formik";

// const validate = (values) => {
//   type A = typeof values;
//   type B = keyof A;

//   const errors: Record<B, string> = {};
//   if (values.email.trim().length === 0) {
//     errors.email = "Email Không Được Bỏ Trống";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (values.phone.trim().length === 0) {
//     errors.phone = "Phone Không Được Bỏ Trống";
//   } else if (!(values.phone.length <= 10 && values.phone.length >= 5)) {
//     errors.phone = "Phone Không đúng định dạng";
//   }

//   if (!(values.name.length <= 50 && values.name.length >= 10)) {
//     errors.name = "Tên Không Được Bỏ Trống";
//   }

//   return errors;
// };

import * as Y from "yup";
import { signUp } from "src/services";
import { useNavigate } from "react-router-dom";
const validationSchema = Y.object({
  email: Y.string().email("Email không hợp lệ.").required(),
  name: Y.string()
    .max(30, "Không được phép lớn hơn 30")
    .required(),
  password: Y.string().min(6).max(50).required(),
  phone: Y.number().required(),
});
// mở popup
type RegisterProps = {
  setModal1Open: any;
  setModal2Open: any;
};

function Register(props: RegisterProps) {
  // const onFinish = (values: any) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validationSchema,

    onSubmit: (values) => {
      const payload = {
        email: values.email,
        password: values.password,
        phone: values.phone,
        name: values.name,
      };
      signUp(payload)
        .then(() => {
          onclick = () =>{
            props.setModal1Open(true);
            props.setModal2Open(false);
          }
          // navigate("/login");
        })
        .catch((err) => {
          setErrorSignup({
            isError: true,
            message: "Email đã sử dụng",
          });
        });
    },
  });
  const [errorSignup, setErrorSignup] = useState({
    isError: false,
    message: "",
  });

  return (
    <S.Div>
      <Row>
        <S.ColLeft span={12}>
          <S.DivContent>
            <p
              style={{
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              Glad to see you!
            </p>

            <S.Logo>
              <Logo />
            </S.Logo>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              minima!
            </p>
          </S.DivContent>
        </S.ColLeft>

        <S.ColRight span={12}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <p
              style={{
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              Hello, friend!
            </p>
          </div>

          {errorSignup.isError && <p>{errorSignup.message}</p>}
          <S.FormIn>
            <Form.Item<FieldType>>
              <Input
                id="email"
                {...formik.getFieldProps("email")}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-xl">{formik.errors.email}</p>
              )}
            </Form.Item>

            <Form.Item<FieldType>>
              <Input.Password 
              id="password" 
              placeholder="Password" 
              {...formik.getFieldProps("password")}/>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600 text-xl">{formik.errors.password}</p>
              )}
            </Form.Item>

            {/* <Form.Item<FieldType>
            >
              <Input.Password 
              placeholder="confirm password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")} />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && ( <p className="text-red-600 text-xl">{formik.errors.confirmPassword}</p>)}
            </Form.Item> */}

            <Form.Item<FieldType>
            >
              <Input 
              placeholder="Họ tên" 
              id="name"
              {...formik.getFieldProps("name")}/>
              {formik.touched.name && formik.errors.name &&(
                <p className="text-red-600 text-xl">{formik.errors.name}</p>
              )}
            </Form.Item>

            <Form.Item<FieldType>
            >
              <Input 
              placeholder="Số điện thoại" 
              id="phone"
              {...formik.getFieldProps("phone")}/>
              {formik.touched.phone && formik.errors.phone &&(
                <p className="text-red-600 text-xl">{formik.errors.phone}</p>
              )}
            </Form.Item>
           

            <Form.Item
              wrapperCol={{ offset: 4, span: 16 }}
              // style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              <S.ButtonIn type="submit">CREATE ACCOUNT</S.ButtonIn>
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>Already have an account?</p>
              <a
                onClick={() => {
                  props.setModal1Open(true);
                  props.setModal2Open(false);
                }}
              >
                Sign In
              </a>
            </div>
          </S.FormIn>
        </S.ColRight>
      </Row>
    </S.Div>
  );
}

export default Register;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import { useSignInWithEmailPassword } from "../../react-query";

import styles from './logincard.module.css';



const LoginCard = ({ redirect }) => {

   const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
   const [isRemember, setIsRemember] = useState(false);
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFinish = (values) => {
      console.log("Received values of form: ", values);
      mutate(values);
   };

   useEffect(() => {
      if (isSuccess) {
         navigate(redirect);
      }
   }, [isSuccess, redirect]);

   return (
      <>
         <Title title={"登入帳戶"} />
         <Form
            name="normal_login"
            className={styles.loginForm}
            form={form}
            initialValues={{
               isRemember: true,
            }}
            onFinish={onFinish}
         // onFihishFailed={onFinishFailed}
         >
            <Form.Item 
            name="email"
            
            rules={[
            {
                  type: "email",
                  message: "請輸入正確的格式!",
                  
               },
               {
                  required: true,
                  message: "請輸入您的電子郵件!",
               },
            ]}
            hasFeedback
         >
            <Input  
               className={styles.color}
               prefix={<MailOutlined />}
               placeholder="電子郵件" 
               style={{color: '#fe9e49'}}
            />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[
               {
                  required: true,
                  message: "請輸入您的密碼!",
               },
            ]}
            hasFeedback
         >
            <Input.Password
               prefix={<LockOutlined />}
               type="password"
               placeholder="密碼"  
               style={{ color: '#fe9e49' }}
            />
         </Form.Item>
         <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox className={styles.loginForm__remember} onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                  記住密碼
               </Checkbox>
            </Form.Item>
            <Link className={styles.loginForm__forgot} to={"/"}>
               忘記密碼?
            </Link>
         </Form.Item>
         <Form.Item>
            {isLoading ? (
               <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginForm__button}
                  loading
               >
                  登入
               </Button>
            ) : (
               <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginForm__button}
               >
                  登入
               </Button>
            )}
            <p className={styles.loginForm__or}>
            或是 <Link className={styles.loginForm__register} to={`/auth/register?redirect=${redirect}`}>註冊</Link></p> 
            {!isError ? (
               <></>
            ) : (
               <div className={styles.loginForm__errorWrap}>
                  <h3 className={styles.loginForm__errorTitle}>
                     <WarningOutlined />
                     {"  "}錯誤
                  </h3>
                  <p className={styles.loginForm__errorMessage}>{error.message}</p>
               </div>
            )}
         </Form.Item>
      </Form>
      </>
   );
};

export default LoginCard;


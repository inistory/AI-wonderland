/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import baseUrl from '../../../url/http';
import RegisterStyle from './RegisterStyle.css';
import { Autoplay } from 'swiper';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please check your email address.')
    .required('Please enter your email.'),
  password: yup
    .string()
    .min(8, 'Please make it more than 8 letters.')
    .max(16)
    .matches(
      '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
      'Password must contain alphabetic/numeric/special characters.'
    )
    .required('Please enter your Password.'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match.')
    .required('Please enter your password one more time.'),

  nickname: yup.string().required('Please enter a nickname.'),
});

function RegisterPage() {
  let history = useHistory();
  const post = (data) => {
    axios.post(baseUrl + '/member/signUp/', data).then((response) => {
      console.log('response: ', response.data.status);
      if (response.data.status === 'success') {
        alert('Sign up complete!');
        history.push('/login');
      } else {
        alert(response.data.status.error);
        console.log(response);
        history.push('/register');
      }
    });
  };

  const onClickLogin = () => {
    history.push('/login');
  };

  const errorImgStyle = {
    width: '30px',
    height: '30px',
    margin: 'auto',
    display: 'inline-block',
  };

  const inputStyle = {
    color: 'white',
    textShadow: '2px 2px 2px gray',
    fontFamily: 'sb_pixel',
    fontSize: '27px',
    textAlign: 'center',
  };

  const errorStyle = {
    fontFamily: 'sb_pixel',
    fontSize: '22px',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 2px #eb2f06',
  };

  const infoInputStyle = {
    fontFamily: 'sb_pixel',
    fontSize: '27px',
    borderRadius: '5px',
    boxShadow: '0 8px 16px 0 rgb(0 0 0 / 30%)',
    textAlign: 'center',
    color: '#187FD9',
    display: 'block',
    margin: 'auto',
  };

  const RegisterButtonStyle = {
    backgroundColor: '#74b9ff',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px',
    fontFamily: 'sb_pixel',
    fontSize: '30px',
    boxShadow: '0 8px 8px 0 rgb(0 0 0 / 30%)',
    border: 'white solid 2px',
    color: 'white',
    marginTop: '15px',
    marginBottom: '10px',
  };

  const LoginAd = {
    color: 'white',
    textShadow: '2px 2px 2px gray',
    fontFamily: 'sb_pixel',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '0px',
  };

  const LoginButtonStyle = {
    backgroundColor: 'transparent',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px',
    fontFamily: 'sb_pixel',
    fontSize: '26px',
    color: 'white',
    textShadow: '2px 2px 2px #3B3B98',
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        //alert(JSON.stringify(values, null, 2));
        post(values);
      }}
      initialValues={{
        email: '',
        password: '',
        nickname: '',
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <div className="registerContainer">
          <div className="registerInfoBox">
            <div
              className="grid grid-row-7"
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                borderRadius: '10px',
                backgroundColor: 'rgb(0 0 0 / 30%)',
                width: '100vh',
              }}
            >
              <div
                className="row-span-1 p-2"
                style={{
                  fontFamily: 'light_p',
                  color: 'white',
                  fontSize: '20px',
                  overflow: 'auto',
                }}
              >
                <div className="logoBox">
                  <img
                    src="./images/logo_white.png"
                    className="loginLogo"
                    style={{
                      width: '100px',
                      height: '100px',
                      margin: 'auto',
                    }}
                  />
                  <p
                    className="prjNameBox"
                    style={{
                      marginBottom: '0px',
                      textAlign: 'center',
                      textShadow: '3px 2px 2px #74b9ff',
                    }}
                  >
                    Pass for Time Travel
                  </p>
                </div>
              </div>
              <form noValidate onSubmit={handleSubmit}>
                <div className="row-span-2" style={inputStyle}>
                  <form controlId="validationFormik01">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email."
                      name="email"
                      value={values.email || ''}
                      onChange={handleChange}
                      style={infoInputStyle}
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      style={errorStyle}
                    />
                  </form>
                </div>

                <div className="row-span-3" style={inputStyle}>
                  <form controlId="validationFormik02">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password."
                      name="password"
                      value={values.password || ''}
                      onChange={handleChange}
                      style={infoInputStyle}
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      style={errorStyle}
                    />
                  </form>
                </div>

                <div className="row-span-4" style={inputStyle}>
                  <form controlId="validationFormik03">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Password check"
                      name="confirm"
                      // value={values.confirm || ''}
                      onChange={handleChange}
                      style={infoInputStyle}
                    />
                    <ErrorMessage
                      name="confirm"
                      component="p"
                      style={errorStyle}
                    />
                  </form>
                </div>

                <div className="row-span-5" style={inputStyle}>
                  <form controlId="validationFormik04">
                    <label>Nickname</label>
                    <input
                      type="text"
                      placeholder="Enter your nickname."
                      name="nickname"
                      value={values.nickname || ''}
                      onChange={handleChange}
                      style={infoInputStyle}
                    />
                    <ErrorMessage
                      name="nickname"
                      component="p"
                      style={errorStyle}
                    />
                  </form>
                </div>

                <div className="row-span-6" style={{ textAlign: 'center' }}>
                  <button
                    variant="primary"
                    type="submit"
                    style={RegisterButtonStyle}
                  >
                    Sign Up
                  </button>
                </div>

                {/* 이미 회원가입 되어 있으면 로그인으로 돌리는 코드인데 화면이 넘쳐서 못함
                <div className="row-span-7" style={{ textAlign: 'center' }}>
                  <p style={LoginAd}>
                    Do you already have an Id? click "Login"!
                  </p>
                  <input
                    className="btnSignup"
                    type="button"
                    value="Login"
                    onClick={onClickLogin}
                    style={LoginButtonStyle}
                  />
                </div> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default RegisterPage;

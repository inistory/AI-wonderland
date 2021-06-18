/* eslint-disable no-undef */
import react from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import baseUrl from '../../../url/http';

import 'tailwindcss/tailwind.css';
import LoginPageStyle from './LoginPageStyle.css';
import { Autoplay } from 'swiper';

function LoginPage({ setLoginUserId }) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginFormPost = (data) => {
    axios.post(baseUrl + '/member/signIn/', data).then((response) => {
      if (response.data.message === '로그인에 성공하였습니다.') {
        console.log(response.data);
        const access_token = response.data.token;
        localStorage.setItem('access_token', access_token);
        // setLoginUserId(response.data.token);
        history.push('/main');
      } else {
        alert(
          "Please check the input values! If you don't have an Id, please register!"
        );
        document.getElementById('password').focus();
      }
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    loginFormPost(data);
  };
  const onClickSignup = () => {
    history.push('/register');
  };

  const inputStyle = {
    color: 'white',
    textShadow: '2px 2px 2px gray',
    fontFamily: 'sb_pixel',
    fontSize: '30px',
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
    fontSize: '30px',
    borderRadius: '5px',
    boxShadow: '0 8px 16px 0 rgb(0 0 0 / 30%)',
    textAlign: 'center',
    color: '#187FD9',
  };

  const LoginButtonStyle = {
    backgroundColor: '#187FD9',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px',
    fontFamily: 'sb_pixel',
    fontSize: '30px',
    boxShadow: '0 8px 8px 0 rgb(0 0 0 / 30%)',
    border: 'white solid 2px',
    color: 'white',
  };

  const SignUpAd = {
    color: 'white',
    textShadow: '2px 2px 2px gray',
    fontFamily: 'sb_pixel',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '0px',
  };

  const SignUpButtonStyle = {
    backgroundColor: 'transparent',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px',
    fontFamily: 'sb_pixel',
    fontSize: '26px',
    color: 'white',
    textShadow: '2px 2px 2px #187FD9',
  };

  return (
    <div className="loginContainer">
      <div className="loginInfoBox">
        <div
          className="grid grid-row-6"
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '10px',
            backgroundColor: 'rgb(0 0 0 / 12%)',
            width: '100vh',
          }}
        >
          <form
            className="loginForm"
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'block' }}
          >
            <div
              className="row-span-1 p-3"
              style={{
                fontFamily: 'light_p',
                color: '#13F2C9',
                fontSize: '25px',
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
                    textShadow: '3px 2px 2px #187FD9',
                  }}
                >
                  TIME PORTAL
                </p>
              </div>
            </div>
            <div className="row-span-2 p-1" style={inputStyle}>
              {/* Email */}
              <label>Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  defaultValue=""
                  {...register('email', { required: true })}
                  style={infoInputStyle}
                />
                {errors.email && (
                  <p style={errorStyle}>
                    <img
                      src="./images/icon_img/error_rabbit.png"
                      className="errorLogo"
                      style={{
                        width: '30px',
                        height: '30px',
                        margin: 'auto',
                        display: 'inline-block',
                      }}
                    />
                    Are you sure this is the correct email address?
                  </p>
                )}
              </div>
            </div>
            <div className="row-span-3 p-2" style={inputStyle}>
              {/* 비밀번호 */}
              <label>Password</label>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  {...register('password', { required: true, maxLength: 16 })}
                  style={infoInputStyle}
                />
                {errors.password && (
                  <p className="ErrorText" style={errorStyle}>
                    <img
                      src="./images/icon_img/error_rabbit.png"
                      className="errorLogo"
                      style={{
                        width: '30px',
                        height: '30px',
                        margin: 'auto',
                        display: 'inline-block',
                      }}
                    />
                    Please check your password.
                  </p>
                )}
              </div>
            </div>
            <div className="row-span-4 p-2">
              {/* login button */}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <input
                  className="btnLogin"
                  type="submit"
                  value="Log In"
                  style={LoginButtonStyle}
                />
              </div>
            </div>
            <div className="row-span-5 p-2" style={{ textAlign: 'center' }}>
              <input
                className="btnSignup"
                type="button"
                value="Sign Up for Travel Pass"
                onClick={onClickSignup}
                style={SignUpButtonStyle}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

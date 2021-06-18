import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';
import baseUrl from '../url/http';

export function loginUser(dataToSubmit) {
  const request = axios
    .post(baseUrl + 'api/member/signIn', dataToSubmit)
    .then((response) => response.data);

  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(baseUrl + 'api/member/signUp', dataToSubmit)
    .then((response) => response.data);

  return {
    type: 'REGISTER_USER',
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(baseUrl + 'api/member/auth')
    .then((response) => response.data);

  return {
    type: 'AUTH_USER',
    payload: request,
  };
}

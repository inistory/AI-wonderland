import { React } from 'react';
import { useHistory, Link } from 'react-router-dom';
import isLogin from '../../../url/lib/isLogin';
import baseUrl from '../../../url/http';
import Logout_button from './Logout_button.css';

//to do: 로그인. 로그아웃 컨펌창 띄워서 받고 하기!(https://studyingych.tistory.com/62)
export default function LogoutButton() {
  const history = useHistory();
  //로그아웃 관리(로컬스토리지에서 토큰 삭제)

  const LoginUrl = `${baseUrl} + /login`;
  const LogoutHandler = () => {
    if (isLogin() === true) {
      localStorage.removeItem('access_token');
      alert('Are you sure to log out?');
      //페이지 리렌더링 안하면 버튼이 상태가 바뀌지 않아 reload 코드 추가
      window.location.reload();
    } else {
      alert('Failed to log out! Please try again.');
    }
  };

  const LoginHandler = () => {
    alert('로그인 페이지로 이동합니다.');
  };

  //isLogin 함수가 true 상태면 로그인이 되었으니 로그아웃 버튼 보여주고, 아니면 로그인 버튼 보여주는 코드.
  return isLogin() === true ? (
    <>
      <button type="submit" onClick={LogoutHandler} className="logOut">
        LOGOUT
      </button>
    </>
  ) : (
    <>
      <button type="submit" onClick={LoginHandler} className="logIn">
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          LOGIN
        </Link>
      </button>
    </>
  );
}

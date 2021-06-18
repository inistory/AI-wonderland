const isLogin = () => !!localStorage.getItem('access_token');

export default isLogin;

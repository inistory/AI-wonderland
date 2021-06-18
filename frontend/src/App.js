/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import MainPage from './components/views/MainPage/MainPage';
import TimegramPage from './components/views/TimegramPage/TimegramPage';
import SearchPage from './components/views/SearchPage/search';
import ProductList from './components/views/Product/ProductList';
import ProductDetail from './components/views/Product/ProductDetail';
import Intro from './components/views/Intro/Intro';
import MyPage from './components/views/MyPage/MyPage';
import Attendance from './components/views/Attendance/Attendance';

import 'bootstrap/dist/css/bootstrap.css';
// 최상위 컴포넌트에 적용해주면 일괄 적용 가능함

//URL 직접접근 막는 코드
import PublicRoute from './url/lib/PublicRoute';
import PrivateRoute from './url/lib/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* 인트로 페이지  연결 */}
          <PublicRoute component={Intro} path="/" exact />
          {/* 로그인 페이지  연결 */}
          <PublicRoute restricted component={LoginPage} path="/login" exact />
          {/* 회원가입 페이지  연결 */}
          <PublicRoute
            restricted
            component={RegisterPage}
            path="/register"
            exact
          />
          {/* 메인 페이지  연결 */}
          <PublicRoute component={MainPage} path="/main" exact />
          {/* 상품 리스트 페이지 연결  */}
          <PublicRoute component={ProductList} path="/productList" exact />
          {/* 타임그램 페이지 연결 */}
          <Route component={TimegramPage} path="/timegram" exact />
          {/* 검색 페이지 연결 */}
          <Route component={SearchPage} path="/search" exact />
          {/* 상품 상세 페이지 연결 */}
          <PublicRoute component={ProductDetail} path="/productDetail" exact />
          {/* 마이페이지 */}
          <PrivateRoute component={MyPage} path="/mypage" exact />
          <Route component={Attendance} path="/mypage/attendance" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

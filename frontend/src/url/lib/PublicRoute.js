import isLogin from './isLogin';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/main" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

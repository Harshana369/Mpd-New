import { replace } from 'lodash';
import { Navigate, useNavigate } from 'react-router-dom';

const loginCheck = ({ children }) => {
  /* eslint-disable */

  const navigate = useNavigate();

  const isAuthorized = localStorage.getItem('userToken');
  //   const roles = localStorage.getItem('accessprivilege');

  if (isAuthorized === 'undefined' || isAuthorized === null) {
    // return <Navigate to="/login" replace />;
    navigate('/login');
  }

  // return <Navigate to="/dashboard/home" replace />;
  navigate('/dashboard/home');
};

export default loginCheck;

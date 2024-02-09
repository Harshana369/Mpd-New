/* eslint-disable */

import { Navigate } from 'react-router-dom';
import { userRoles } from '../components/routing/Constants';

const RequireAuth = ({ children }) => {
  const isAuthorized = localStorage.getItem('userToken');
  const otherUser = localStorage.getItem('auth');

  if (isAuthorized === 'undefined' || isAuthorized === null) {
  }
  //   else if (userRoles.admin === roles || userRoles.project_Coor === roles) {
  //     return children;
  //   }
  //   localStorage.removeItem('userToken');
  //   localStorage.removeItem('accessprivilege');
  //   localStorage.removeItem('name');
  //   localStorage.removeItem('email');
  //   return <Navigate to="/unauthorized" replace />;
  return children;
};

export default RequireAuth;

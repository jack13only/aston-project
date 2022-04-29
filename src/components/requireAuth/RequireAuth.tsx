import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PATHS } from '../../shared/constants/routes';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector((state) => state.authStorage);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.signin} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

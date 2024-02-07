import React, { type FC, memo, ReactElement, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/types';
import { useSelector } from '../../redux/utils';

const PrivateRouter: FC<{ children: ReactElement }> = ({ children }) => {
  const { data } = useSelector((state: RootState) => state.userInfo);
  const { email: auth } = data;

  if (!auth) return <Navigate replace to="/" />;
  return children;
};
export default memo(PrivateRouter);

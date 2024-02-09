import React, { type FC, memo, ReactElement, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/types';
import { useDispatch, useSelector } from '../../redux/utils';
import { getUserInfo } from '../../redux/actions/userinfoActions';

const PrivateRouter: FC<{ children: ReactElement }> = ({ children }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.userInfo);
  const { email: auth } = data;

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  if (!auth) return <Navigate replace to="/" />;
  return children;
};
export default memo(PrivateRouter);

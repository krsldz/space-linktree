import React, { type FC, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../redux/utils';
import { RootState } from '../../redux/types';

import styles from './AuthPage.module.scss';

const AuthPage: FC = () => {
  const { data } = useSelector((state: RootState) => state.userInfo);
  const { email: auth } = data;

  if (auth) return <Navigate replace to="/profile" />;

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Space Link ...</h1>
      <a className={styles.link} href="http://localhost:8080/auth/google">
        <button className={styles.btn}>Sign up via gmail</button>
      </a>
    </div>
  );
};
export default memo(AuthPage);

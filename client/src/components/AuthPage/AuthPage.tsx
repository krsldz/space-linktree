import React, { type FC, memo } from 'react';
import styles from './AuthPage.module.scss';

const AuthPage: FC = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Space Link ...</h1>
    <a href="http://localhost:8080/auth/google">
      <button className={styles.btn}>Sign up via gmail</button>
    </a>
  </div>
);
export default memo(AuthPage);

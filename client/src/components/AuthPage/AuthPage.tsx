import React, { type FC, memo } from 'react';
import styles from './AuthPage.module.scss';

const AuthPage: FC = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Space Link ...</h1>
    <button className={styles.btn}>Sign up via gmail</button>
  </div>
);
export default memo(AuthPage);

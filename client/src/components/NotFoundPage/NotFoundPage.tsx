import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const naigate = useNavigate();

  const goToMain = () => naigate('/');

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Page Not Found...</h2>
      <button className={styles.btn} onClick={goToMain}>
        Back to main
      </button>
    </div>
  );
};

export default memo(NotFoundPage);

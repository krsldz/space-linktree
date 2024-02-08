import React, { FC, memo } from 'react';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => (
  <div className={styles.wrap}>
    <span>Page Not Found</span>
  </div>
);

export default memo(NotFoundPage);

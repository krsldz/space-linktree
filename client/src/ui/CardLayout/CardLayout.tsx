import React, { type FC, memo, ReactNode } from 'react';
import styles from './CardLayout.module.scss';

const CardLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.cardWrap}>{children}</div>
);
export default memo(CardLayout);

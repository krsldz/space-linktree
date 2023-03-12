import React, { type FC, memo } from 'react';
import BasicInfo from '../BasicInfo/BasicInfo';
import styles from './MainPage.module.scss';

const MainPage: FC = () => (
  <div className={styles.wrap}>
    <BasicInfo />
  </div>
);
export default memo(MainPage);

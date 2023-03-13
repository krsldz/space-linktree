import React, { type FC, memo } from 'react';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import BasicInfo from '../BasicInfo/BasicInfo';
import styles from './MainPage.module.scss';

const MainPage: FC = () => (
  <div className={styles.wrap}>
    <div className={styles.iconWrap}>
      <SvgIcon className={styles.settingsIcon} iconName="Settings" />
    </div>
    <BasicInfo />
  </div>
);
export default memo(MainPage);

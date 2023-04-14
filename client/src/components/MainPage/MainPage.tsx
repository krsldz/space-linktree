import React, { type FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../redux/actions/userinfoActions';
import { RootState } from '../../redux/types';
import { useDispatch } from '../../redux/utils';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import BasicInfo from '../BasicInfo/BasicInfo';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className={styles.wrap}>
      <Link className={styles.settingsWrap} to="/profile/settings">
        <span className={styles.settingsBtn}>Settings</span>
      </Link>
      <BasicInfo user={user.data} />
    </div>
  );
};
export default memo(MainPage);

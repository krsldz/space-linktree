import React, { type FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserLogOut } from '../../redux/actions/userinfoActions';
import { RootState } from '../../redux/types';
import { useDispatch } from '../../redux/utils';
import BasicInfo from '../BasicInfo/BasicInfo';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userInfo);

  const onLogOut = () => {
    dispatch(getUserLogOut());
    // navigate('/');
  };

  return (
    <div className={styles.wrap}>
      <Link className={styles.settingsWrap} to="/profile/settings">
        <span className={styles.settingsBtn}>Settings</span>
      </Link>
      <div className={styles.logOutWrap} onClick={onLogOut}>
        <span className={styles.logOutBtn}>Log out</span>
      </div>
      <div className={styles.publicLinkWrap}>
        <span className={styles.publicLink}>Get Public Link</span>
      </div>
      <BasicInfo user={user.data} />
    </div>
  );
};
export default memo(MainPage);

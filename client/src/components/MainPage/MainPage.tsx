import React, { type FC, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserLogOut } from '../../redux/actions/userinfoActions';
import { useDispatch } from '../../redux/utils';
import BasicInfo from '../BasicInfo/BasicInfo';
import { getPublicLink } from '../../redux/actions/publicLinkActions';
import { getProfileData } from '../../redux/actions/profileDataActions';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  const openLinkModal = () => {
    dispatch(getPublicLink());
  };

  const onLogOut = () => {
    dispatch(getUserLogOut());
  };

  return (
    <div className={styles.wrap}>
      <Link className={styles.settingsWrap} to="/profile/settings">
        <span className={styles.settingsBtn}>Settings</span>
      </Link>
      <div className={styles.logOutWrap} onClick={onLogOut}>
        <span className={styles.logOutBtn}>Log out</span>
      </div>
      <div className={styles.publicLinkWrap} onClick={openLinkModal}>
        <span className={styles.publicLink}>Get Public Link</span>
      </div>
      <BasicInfo />
    </div>
  );
};
export default memo(MainPage);

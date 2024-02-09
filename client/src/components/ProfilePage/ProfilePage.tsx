import React, { type FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../redux/utils';
import BasicInfo from '../BasicInfo/BasicInfo';
import { getPublicProfile } from '../../redux/actions/profileDataActions';
import { RootState } from '../../redux/types';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import styles from './ProfilePage.module.scss';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { link } = useParams();
  const error = useSelector((state: RootState) => state.error);

  useEffect(() => {
    if (link) dispatch(getPublicProfile(link));
  }, [link]);

  if ((error as any)?.response?.status === 404) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.wrap}>
      <BasicInfo />
    </div>
  );
};
export default memo(ProfilePage);

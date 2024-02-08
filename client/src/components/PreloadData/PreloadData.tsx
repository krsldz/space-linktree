import { FC, memo, useEffect } from 'react';
import { useDispatch } from '../../redux/utils';
import { getUserInfo } from '../../redux/actions/userinfoActions';
import { getProfileData } from '../../redux/actions/profileDataActions';

const PreloadData: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getProfileData());
  }, []);

  return null;
};

export default memo(PreloadData);

import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/reducers/error';
import { RootState } from '../../redux/types';

import styles from './ErrorModal.module.scss';

const ErrorModal: FC = () => {
  const dispatch = useDispatch();
  const { errorText } = useSelector((state: RootState) => state.error);

  const handleClose = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  if (!errorText) return null;
  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={handleClose} type="button">
        {errorText}
      </button>
    </div>
  );
};
export default memo(ErrorModal);

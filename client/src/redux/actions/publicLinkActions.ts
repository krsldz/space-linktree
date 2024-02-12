import { AppThunk, Dispatch } from '../types';
import { ErrorType, setError } from '../reducers/error';
import { fetchEditPublicLink, fetchPublicLink } from '../../api/publicLink';
import { closeModal, openModal } from '../reducers/modal';
import {
  getPublicLinkSliceFulfilled,
  getPublicLinkSlicePending,
  getPublicLinkSliceRejected,
} from '../reducers/publicLink';

export const getPublicLink =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getPublicLinkSlicePending());
      const data = await fetchPublicLink();
      if (data) {
        dispatch(getPublicLinkSliceFulfilled(data));
        dispatch(openModal());
      }
    } catch (err: unknown) {
      dispatch(getPublicLinkSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };

export const editPublicLink =
  (id: number, link: string): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getPublicLinkSlicePending());
      const res = await fetchEditPublicLink(id, link);
      if (res.text === 'OK') {
        dispatch(closeModal());
      }
      dispatch(getPublicLinkSliceFulfilled({ link, linkId: id }));
    } catch (err: unknown) {
      dispatch(getPublicLinkSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };

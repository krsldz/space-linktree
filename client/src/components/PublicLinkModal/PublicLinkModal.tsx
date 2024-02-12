import React, {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from 'classnames';
import copy from 'copy-to-clipboard';
import { useDispatch, useSelector } from '../../redux/utils';
import { RootState } from '../../redux/types';
import { closeModal } from '../../redux/reducers/modal';
import { editPublicLink } from '../../redux/actions/publicLinkActions';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import { useOutsideClick } from './utils';

import styles from './PublicLinkModal.module.scss';

const PublicLinkModal: FC = () => {
  const dispatch = useDispatch();
  const modal = useRef(null);
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const {
    data: { link, linkId },
  } = useSelector((state: RootState) => state.publicLink);
  const [fullLink, setFullLink] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, []);

  useOutsideClick(modal, handleClose, !isOpen);

  useEffect(() => {
    if (link) setFullLink(link);
  }, [link]);

  const handleEdit = useCallback(() => {
    dispatch(editPublicLink(linkId, fullLink));
  }, [linkId, fullLink]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFullLink(event.target.value);
    },
    [fullLink]
  );

  const handleCopy = useCallback((): void => {
    if (!fullLink.length) return;
    copy(fullLink, {
      format: 'text/plain',
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [fullLink]);

  if (!isOpen) return null;

  return (
    <div className={styles.wrap}>
      <div ref={modal} className={styles.container}>
        <SvgIcon className={styles.icon} iconName="Close" onClick={handleClose} />
        <h3 className={styles.title}>Your public link...</h3>
        <input
          className={cls(styles.input, { [styles.inputActive]: copied })}
          onChange={handleChange}
          value={fullLink}
        />
        <div className={styles.buttonBlock}>
          <button className={styles.editBtn} onClick={handleEdit} type="button">
            Edit
          </button>
          <button className={styles.copyBtn} onClick={handleCopy} type="button">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(PublicLinkModal);

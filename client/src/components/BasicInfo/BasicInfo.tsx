import React, { type FC, memo } from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from '../../redux/utils';
import { RootState } from '../../redux/types';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import CardLayout from '../../ui/CardLayout/CardLayout';

import styles from './BasicInfo.module.scss';

const BasicInfo: FC = () => {
  const {
    data: {
      name,
      email,
      avatar,
      link,
      linkedin,
      whatsapp,
      telegram,
      tiktok,
      youtube,
      spotify,
      behance,
      facebook,
      github,
      instagram,
    },
  } = useSelector((state: RootState) => state.profileData);

  const renderPortFolio = () => {
    if (!linkedin && !behance && !github) {
      return null;
    }
    return (
      <CardLayout>
        {linkedin && (
          <Link target="_blank" to={linkedin}>
            <SvgIcon className={styles.smIcon} iconName="Linkedin" />
          </Link>
        )}
        {github && (
          <Link target="_blank" to={github}>
            <SvgIcon className={styles.smIcon} iconName="Github" />
          </Link>
        )}
        {behance && (
          <Link target="_blank" to={behance}>
            <SvgIcon className={styles.smIcon} iconName="Behance" />
          </Link>
        )}
      </CardLayout>
    );
  };

  const renderMessengers = () => {
    if (!whatsapp && !telegram) {
      return null;
    }
    return (
      <CardLayout>
        {whatsapp && (
          <span className={styles.input}>
            <SvgIcon className={styles.smIcon} iconName="Whatsapp" />
            {whatsapp}
          </span>
        )}
        {telegram && (
          <span className={styles.input}>
            <SvgIcon className={styles.smIcon} iconName="Telegram" />
            {telegram}
          </span>
        )}
      </CardLayout>
    );
  };

  const renderSocialMedia = () => {
    if (!facebook && !instagram && !tiktok && !spotify && !youtube) {
      return null;
    }
    return (
      <CardLayout>
        {facebook && (
          <Link target="_blank" to={facebook}>
            <SvgIcon className={styles.smIcon} iconName="Facebook" />
          </Link>
        )}
        {instagram && (
          <Link target="_blank" to={instagram}>
            <SvgIcon className={styles.smIcon} iconName="Instagram" />
          </Link>
        )}
        {tiktok && (
          <Link target="_blank" to={tiktok}>
            <SvgIcon className={styles.smIcon} iconName="Tiktok" />
          </Link>
        )}
        {spotify && (
          <Link target="_blank" to={spotify}>
            <SvgIcon className={styles.smIcon} iconName="Spotify" />
          </Link>
        )}
        {youtube && (
          <Link target="_blank" to={youtube}>
            <SvgIcon className={styles.smIcon} iconName="Youtube" />
          </Link>
        )}
      </CardLayout>
    );
  };

  return (
    <div className={styles.wrap}>
      {name && <div className={styles.nameWrap}>{name}</div>}
      <img
        alt="avatar pic"
        className={styles.avatar}
        src={`http://localhost:8080/${avatar}`}
      />
      <div
        className={cls(styles.basicBlockwrap, {
          [styles.basicBlockwrapFullWidth]: !email,
        })}
      >
        {email && (
          <CardLayout>
            <div className={styles.emailInput}>
              <SvgIcon className={styles.icon} iconName="Email" />
              {email}
            </div>
          </CardLayout>
        )}
        {renderPortFolio()}
      </div>
      {link && (
        <CardLayout>
          <Link className={styles.website} target="_blank" to={link}>
            <span className={styles.input}>
              <SvgIcon className={styles.icon} iconName="Link" />
              {link}
            </span>
          </Link>
        </CardLayout>
      )}
      {renderMessengers()}
      {renderSocialMedia()}
    </div>
  );
};
export default memo(BasicInfo);

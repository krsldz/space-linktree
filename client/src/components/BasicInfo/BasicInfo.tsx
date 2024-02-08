import React, { type FC, memo } from 'react';
import avatar from '../../ui/images/avatar.png';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import CardLayout from '../../ui/CardLayout/CardLayout';
import { useSelector } from '../../redux/utils';
import { RootState } from '../../redux/types';
import styles from './BasicInfo.module.scss';

const BasicInfo: FC<{ user: { name: string; email: string } }> = ({ user }) => {
  const {
    data: {
      name,
      email,
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

  return (
    <div className={styles.wrap}>
      <div className={styles.nameWrap}>{name}</div>
      <img alt="avatar pic" className={styles.avatar} src={avatar} />
      <div className={styles.basicBlockwrap}>
        <CardLayout>
          <div className={styles.emailInput}>
            <SvgIcon className={styles.icon} iconName="Email" />
            {email}
          </div>
        </CardLayout>
        <CardLayout>
          <SvgIcon className={styles.smIcon} iconName="Linkedin" />
          <SvgIcon className={styles.smIcon} iconName="Github" />
          <SvgIcon className={styles.smIcon} iconName="Behance" />
        </CardLayout>
      </div>
      <CardLayout>
        <span className={styles.input}>
          <SvgIcon className={styles.icon} iconName="Link" />
          {link}
        </span>
      </CardLayout>
      <CardLayout>
        <span className={styles.input}>
          <SvgIcon className={styles.smIcon} iconName="Whatsapp" />
          {whatsapp}
        </span>
        <span className={styles.input}>
          <SvgIcon className={styles.smIcon} iconName="Telegram" />
          {telegram}
        </span>
      </CardLayout>
      <CardLayout>
        <SvgIcon className={styles.smIcon} iconName="Facebook" />
        <SvgIcon className={styles.smIcon} iconName="Instagram" />
        <SvgIcon className={styles.smIcon} iconName="Tiktok" />
        <SvgIcon className={styles.smIcon} iconName="Spotify" />
        <SvgIcon className={styles.smIcon} iconName="Youtube" />
      </CardLayout>
    </div>
  );
};
export default memo(BasicInfo);

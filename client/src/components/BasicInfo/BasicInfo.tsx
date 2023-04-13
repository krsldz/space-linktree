import React, { type FC, memo } from 'react';
import avatar from '../../ui/images/avatar.png';
import styles from './BasicInfo.module.scss';
import AdditionalBlock from '../AdditionalBlock/AdditionalBlock';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';
import CardLayout from '../../ui/CardLayout/CardLayout';

const BasicInfo: FC<{ user: { name: string; email: string } }> = ({ user }) => (
  <div className={styles.wrap}>
    <div className={styles.nameWrap}>{user.name}</div>
    <img alt="avatar pic" className={styles.avatar} src={avatar} />
    <div className={styles.basicBlockwrap}>
      <CardLayout>
        <div className={styles.emailInput}>
          <SvgIcon className={styles.icon} iconName="Email" />
          {user.email}
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
        kriseldzarova-website.com
      </span>
    </CardLayout>
    <CardLayout>
      <span className={styles.input}>
        <SvgIcon className={styles.smIcon} iconName="Whatsapp" />
        +79251464191
      </span>
      <span className={styles.input}>
        <SvgIcon className={styles.smIcon} iconName="Telegram" />
        @krsldz
      </span>
    </CardLayout>
    <CardLayout>
      <SvgIcon className={styles.smIcon} iconName="Facebook" />
      <SvgIcon className={styles.smIcon} iconName="Instagram" />
      <SvgIcon className={styles.smIcon} iconName="Tiktok" />
      <SvgIcon className={styles.smIcon} iconName="Spotify" />
      <SvgIcon className={styles.smIcon} iconName="Youtube" />
    </CardLayout>
    <AdditionalBlock />
  </div>
);
export default memo(BasicInfo);

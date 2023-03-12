import React, { type FC, memo } from 'react';
import avatar from '../../images/avatar.png';
import styles from './BasicInfo.module.scss';
import AdditionalBlock from '../AdditionalBlock/AdditionalBlock';
import SvgIcon from '../../SvgIcon/SvgIcon';

const BasicInfo: FC = () => (
  <div className={styles.wrap}>
    <div className={styles.nameWrap}>Kris Eldzarova</div>
    <img alt="avatar pic" className={styles.avatar} src={avatar} />
    <div className={styles.basicBlockwrap}>
      <div className={styles.cardWrap}>
        <div className={styles.emailInput}>
          <SvgIcon className={styles.icon} iconName="Email" />
          kris.eldzarova@gmail.com
        </div>
      </div>
      <div className={styles.cardWrap}>
        <SvgIcon className={styles.smIcon} iconName="Linkedin" />
        <SvgIcon className={styles.smIcon} iconName="Github" />
        <SvgIcon className={styles.smIcon} iconName="Facebook" />
        <SvgIcon className={styles.smIcon} iconName="Instagram" />
        <SvgIcon className={styles.smIcon} iconName="Tiktok" />
        <SvgIcon className={styles.smIcon} iconName="Spotify" />
        <SvgIcon className={styles.smIcon} iconName="Youtube" />
      </div>
    </div>
    <div className={styles.cardWrap}>
      <span className={styles.input}>
        <SvgIcon className={styles.icon} iconName="Link" />
        kriseldzarova-website.com
      </span>
    </div>
    <div className={styles.cardWrap}>
      <span className={styles.input}>
        <SvgIcon className={styles.smIcon} iconName="Whatsapp" />
        +79251464191
      </span>
      <span className={styles.input}>
        <SvgIcon className={styles.smIcon} iconName="Telegram" />
        @krsldz
      </span>
    </div>
    <AdditionalBlock />
  </div>
);
export default memo(BasicInfo);

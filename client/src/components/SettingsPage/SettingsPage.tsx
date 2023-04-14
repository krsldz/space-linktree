import React, { type FC, memo } from 'react';
import { useHistory } from 'react-router-dom';
import CardLayout from '../../ui/CardLayout/CardLayout';

import styles from './SettingsPage.module.scss';

const SettingsPage: FC = () => {
  const history = useHistory();

  const onCancel = () => {
    history.push('/profile/edit');
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Basic information...</h3>
          <CardLayout>
            <input className={styles.input} id="name" placeholder="Name" />
            <label className={styles.infoTitle} htmlFor="name">
              Name
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="email" placeholder="Email" />
            <label className={styles.infoTitle} htmlFor="email">
              Email
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="website" placeholder="Website" />
            <label className={styles.infoTitle} htmlFor="website">
              Website
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="whatsapp" placeholder="WhatsApp" />
            <label className={styles.infoTitle} htmlFor="whatsapp">
              WhatsApp
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="telegram" placeholder="Telegram" />
            <label className={styles.infoTitle} htmlFor="telegram">
              Telegram
            </label>
          </CardLayout>
          <CardLayout>
            <input className={styles.input} id="avatar" placeholder="Avatar pic" />
            <label className={styles.infoTitle} htmlFor="avatar">
              Avatar pic
            </label>
          </CardLayout>
        </div>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Social media links...</h3>
          <CardLayout>
            <span className={styles.infoTitle}>LinkedIn</span>
            <input />
          </CardLayout>
          <CardLayout>
            <span className={styles.infoTitle}>Github</span>
            <input />
          </CardLayout>
          {/* <CardLayout>
          <span className={styles.infoTitle}>Behance</span>
          <input />
        </CardLayout> */}
          <CardLayout>
            <span className={styles.infoTitle}>Facebook</span>
            <input />
          </CardLayout>
          <CardLayout>
            <span className={styles.infoTitle}>Instagram</span>
            <input />
          </CardLayout>
          <CardLayout>
            <span className={styles.infoTitle}>Tiktok</span>
            <input />
          </CardLayout>
          <CardLayout>
            <span className={styles.infoTitle}>Spotify</span>
            <input />
          </CardLayout>
          <CardLayout>
            <span className={styles.infoTitle}>Youtube</span>
            <input />
          </CardLayout>
        </div>
        <div className={styles.sectionWrap}>
          <h3 className={styles.title}>Additional...</h3>
          <CardLayout>
            <span className={styles.infoTitle}>Your Link</span>
            <input />
          </CardLayout>
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.applyBtn}>Apply</button>
        <button className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </>
  );
};
export default memo(SettingsPage);

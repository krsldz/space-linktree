import React, { type FC, memo } from 'react';

import styles from './SettingsPage.module.scss';

const SettingsPage: FC = () => (
  <>
    <div className={styles.wrap}>
      <div className={styles.basicWrap}>
        <h3>Basic information</h3>
      </div>
      <div className={styles.socialMediaWrap}>
        <h3>Social media links</h3>
      </div>
      <div className={styles.additionalWrap}>
        <h3>Additional</h3>
      </div>
    </div>
    <div className={styles.buttonBlock}>
      <button>Apply</button>
      <button>Cancel</button>
    </div>
  </>
);
export default memo(SettingsPage);

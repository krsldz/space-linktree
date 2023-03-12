import React, { type FC, memo } from 'react';
import styles from './AdditionalBlock.module.scss';

const AdditionalBlock: FC = () => (
  <>
    <div className={styles.wrap}>Addtional Block</div>
    <div className={styles.wrap}>+</div>
  </>
);
export default memo(AdditionalBlock);

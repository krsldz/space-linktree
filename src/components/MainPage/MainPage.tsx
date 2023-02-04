import React, {type FC, memo} from 'react';
import email from '../../icons/email.png';
import styles from './MainPage.module.scss';

const MainPage: FC = () => (
	<div className={styles.wrap}>
		<div className={styles.cardWrap}>
			<div className={styles.input}><img className={styles.icon} src={email}/>kris.eldzarova@gmail.com</div>
		</div>
	</div>
);
export default memo(MainPage);

import React, {type FC} from 'react';
import styles from './App.module.scss';
import MainPage from './MainPage';

const App: FC = () => (
	<div className={styles.app}>
		<MainPage />
	</div>
);

export default App;

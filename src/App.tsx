import React, {type FC} from 'react';
import styles from './App.module.scss';
import AuthPage from './components/AuthPage/AuthPage';

const App: FC = () => (
	<div className={styles.app}>
		<AuthPage />
	</div>
);

export default App;

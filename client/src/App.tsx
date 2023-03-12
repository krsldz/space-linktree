import React, { FC } from 'react';
import styles from './App.module.scss';
import MainPage from './components/MainPage/MainPage';

const App: FC = () => (
  <div className={styles.app}>
    <MainPage />
  </div>
);

export default App;

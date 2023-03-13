import React, { FC } from 'react';
import styles from './App.module.scss';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

const App: FC = () => (
  <div className={styles.app}>
    <SettingsPage />
  </div>
);

export default App;

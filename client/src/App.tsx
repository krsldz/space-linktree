import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import ErrorModal from './components/ErrorModal/ErrorModal';
import { store } from './redux/store/configureStore';

const App: FC = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<AuthPage />} path="/" />
          <Route element={<MainPage />} path="/profile/edit" />
          <Route element={<SettingsPage />} path="/profile/settings" />
        </Routes>
        <ErrorModal />
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;

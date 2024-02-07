import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store/configureStore';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import ErrorModal from './components/ErrorModal/ErrorModal';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

import styles from './App.module.scss';

const App: FC = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<AuthPage />} path="/" />
          <Route
            element={
              <PrivateRouter>
                <MainPage />
              </PrivateRouter>
            }
            path="/profile"
          />
          <Route
            element={
              <PrivateRouter>
                <SettingsPage />
              </PrivateRouter>
            }
            path="/profile/settings"
          />
        </Routes>
        <ErrorModal />
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;

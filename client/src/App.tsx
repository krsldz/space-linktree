import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import { history } from './constants/app';
import SettingsPage from './components/SettingsPage/SettingsPage';
import { store } from './redux/store/configureStore';

const App: FC = () => (
  <div className={styles.app}>
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          <Route component={AuthPage} exact path="/" />
          <Route component={MainPage} exact path="/profile/edit" />
          <Route component={SettingsPage} exact path="/profile/settings" />
        </Switch>
      </Provider>
    </Router>
  </div>
);

export default App;

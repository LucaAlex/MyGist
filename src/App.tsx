import React, { useState } from 'react';
import './App.css';
import { HomePage, GistsPage, FilesPage } from './pages';
import { GlobalContext, IGlobal } from './contexts/GlobalContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const global: IGlobal = {
  userName: '',
  setUserName: (value) => {},
};

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <GlobalContext.Provider
        value={{ userName: userName, setUserName: setUserName }}
      >
        <Router forceRefresh={false}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/gists">
              <GistsPage />
            </Route>
            <Route exact path="/files">
              <FilesPage />
            </Route>
          </Switch>
        </Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

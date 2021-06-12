import React, { useState } from 'react';
import './App.css';
import { GistsPage } from './pages';
import { GlobalContext, IGlobal } from './contexts/GlobalContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const global: IGlobal = {
  userName: '',
  gist: null,
  setUserName: (value) => {},
  setGist: (value) => {},
};

function App() {
  const [userName, setUserName] = useState('');
  const [files, setGist] = useState(null);

  return (
    <>
      <GlobalContext.Provider
        value={{
          userName: userName,
          setUserName: setUserName,
          gist: files,
          setGist: setGist,
        }}
      >
        <Router forceRefresh={false}>
          <Switch>
            <Route exact path="/">
              <GistsPage />
            </Route>
          </Switch>
        </Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

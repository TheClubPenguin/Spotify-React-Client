import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Chat from './components/chat'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

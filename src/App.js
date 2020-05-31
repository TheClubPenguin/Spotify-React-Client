import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Chat from './components/Chat'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <a href='http://localhost:8000/login'> Login to Spotify </a>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

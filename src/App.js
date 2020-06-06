import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Chat from './components/Chat';
import './App.css';
import { render } from '@testing-library/react';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor()
  {
      super();
      const params = this.getHashParams();
      const token = params.access_token;
      if (token)
      {
          spotifyApi.setAccessToken(token);
      }
      this.state = {}
  }

  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
  getHashParams()
  {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      e = r.exec(q)
      while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
      }
      return hashParams;
  }

  render()
  {
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
}

export default App;

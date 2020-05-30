import React from 'react';

import SpotifyWebApi from 'spotify-web-api'
const spotifyApi = new SpotifyWebApi();

class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props);
        const params = this.getHashParams();
        const token = params.access_token;
        if (token)
        {
            spotifyApi.setAccessToken(token);
        }
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
        
    }
}
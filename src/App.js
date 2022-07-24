import { useEffect } from 'react';
// import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Spotify from './components/Spotify';
import { reducerCases } from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';



function App() {

  const [{token}, dispatch] = useStateProvider();

  useEffect(() => {

    const hash = window.location.hash;
    
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Chuks Spotify Clone";
  }, [dispatch, token]);

/*  const spotify = new SpotifyWebApi();

  const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

 useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token) {

        dispatch({type:reducerCases.SET_TOKEN, token: _token});

        spotify.setAccessToken(_token);

        spotify.getUserPlaylists().then((playlists) => {
            dispatch({
              type: reducerCases.SET_PLAYLISTS,
              playlists,
            });
          });

          spotify.getMe().then((user) => {
            dispatch({
              type: reducerCases.SET_USER,
              user,
            });
          });

          spotify.getPlaylist('37i9dQZF1DWZCOSaet9tpB').then((response) => {
            dispatch({
              type: reducerCases.SET_NAIJA_HITS_PLAYLIST,
              naija_hits_playlist: response,
            });
          });

          spotify.getMyTopArtists().then((response) => {
            dispatch({
              type: reducerCases.SET_TOP_ARTISTS,
              top_artists: response,
            });
          });
        
          dispatch({
            type: reducerCases.SET_SPOTIFY,
            spotify: spotify,
          });
          console.log(spotify)

    };

  }, [token, dispatch]);
  */

  return (

    <div className="App">

      {
        token ? <Spotify/> : <Login/>
        
      }

    </div>

  );

}

export default App;

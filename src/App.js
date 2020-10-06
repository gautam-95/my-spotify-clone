import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const authData = getTokenFromUrl();
    window.location.hash = "";
    const authToken = authData.access_token;
    if (authToken) {
      dispatch({ type: "SET_TOKEN", token: authToken });

      spotify.setAccessToken(authToken);

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        spotify.getPlaylist(playlists?.items[0].id).then((res) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });

          dispatch({
            type: "SET_CURRENT_PLAYLIST",
            currentPlaylist: res,
          });
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;

// const [token, setToken] = useState(null);

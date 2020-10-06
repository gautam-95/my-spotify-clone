export const initialState = {
  user: null,
  playlists: [],
  currentPlaylist: null,
  playing: false,
  item: null,
  discover_weekly: null,
  token: null,
  // token:
  //   "BQAKPChFXNaIEYRYQ5yd3LWZ3qIAJCtbeZvEChRZNqcJ84JLhVKe2C3QJtSgQZPwhshRrHVQmnnkHYHHRuOvuA7IkVmmpV-84kn8xwiiUg6qNSwo-Nvn9Kv5oUuNMzFDlJqdFwr3yS5vOKV7ETXTS916Sjsl1BgS1m_0wUPGxrFhFRxPET1l",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        currentPlaylist: action.currentPlaylist,
      };
    default:
      return state;
  }
};

export default reducer;
